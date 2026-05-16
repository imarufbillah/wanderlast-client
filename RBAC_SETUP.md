# Role-Based Access Control (RBAC) Setup Guide

## Overview
This project now has role-based access control with two roles:
- **user** (default) - Can view destinations and make bookings
- **admin** - Can create, edit, and delete destinations

## What Was Implemented

### 1. Database Schema
- Added `role` field to user schema in Better Auth (`src/lib/auth.js`)
- Default role: "user"
- Users cannot set their own role (input: false)

### 2. Utility Functions
- `src/lib/rbac.js` - Role checking utilities (isAdmin, isUser, hasRole)
- `src/hooks/useAdmin.js` - React hook for checking admin status in components

### 3. UI Changes
- **Destinations Page**: "Add New Destination" button only visible to admins
- **Destination Details**: Edit and Delete buttons only visible to admins
- **Profile Page**: Admin badge displayed for admin users

### 4. Route Protection
- **Proxy middleware** (`src/proxy.js`) protects admin routes:
  - `/destinations/new` - Create new destination
  - `/destinations/[id]/edit` - Edit destination
- Non-admins redirected to destinations page with error toast
- Authentication check happens before page loads

## How to Make a User Admin

### Option 1: Directly in MongoDB (Easiest)
1. Open **MongoDB Compass** or **MongoDB Atlas**
2. Connect to your database
3. Find your database: `wanderlast`
4. Go to `user` collection
5. Find the user you want to make admin (search by email)
6. Click "Edit Document"
7. Add or change the field:
   ```json
   {
     "role": "admin"
   }
   ```
8. Click "Update"
9. Done! User needs to log out and log back in

### Option 2: Using MongoDB Shell
```javascript
// Connect to your database
use wanderlast

// Update user by email
db.user.updateOne(
  { email: "your-email@example.com" },
  { $set: { role: "admin" } }
)

// Verify the update
db.user.findOne({ email: "your-email@example.com" })
```

### Option 3: Create Admin Script (For Production)
Create a Node.js script to promote users:

```javascript
// scripts/make-admin.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_DB_URI);

async function makeAdmin(email) {
  try {
    await client.connect();
    const db = client.db("wanderlast");
    
    const result = await db.collection("user").updateOne(
      { email },
      { $set: { role: "admin" } }
    );
    
    if (result.modifiedCount > 0) {
      console.log(`✅ User ${email} is now an admin`);
    } else {
      console.log(`❌ User ${email} not found`);
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

// Usage: node scripts/make-admin.js your-email@example.com
const email = process.argv[2];
if (!email) {
  console.log("Usage: node scripts/make-admin.js <email>");
  process.exit(1);
}

makeAdmin(email);
```

## Testing the RBAC

### As Regular User (role: "user"):
1. Sign up or log in as a regular user
2. Go to `/destinations`
3. ❌ "Add New Destination" button should NOT be visible
4. Click on any destination
5. ❌ Edit and Delete buttons should NOT be visible
6. Try to access `/destinations/new` directly in browser
7. ❌ Should be redirected to `/destinations` with error toast
8. Profile page shows NO admin badge

### As Admin User (role: "admin"):
1. Make your user admin using one of the methods above
2. **Important**: Log out and log back in (to refresh session)
3. Go to `/destinations`
4. ✅ "Add New Destination" button should be visible
5. Click on any destination
6. ✅ Edit and Delete buttons should be visible
7. ✅ Can access `/destinations/new` and edit pages
8. ✅ Profile shows "Admin" badge next to name

## Backend API Protection (CRITICAL!)

⚠️ **Frontend protection alone is NOT enough!** You MUST also protect your backend API endpoints.

### Add Admin Middleware to Express Backend

```javascript
// middleware/requireAdmin.js
export const requireAdmin = async (req, res, next) => {
  try {
    // Assuming you already have auth middleware that sets req.user
    const user = req.user;
    
    if (!user) {
      return res.status(401).json({ 
        message: 'Authentication required' 
      });
    }
    
    if (user.role !== 'admin') {
      return res.status(403).json({ 
        message: 'Admin access required' 
      });
    }
    
    next();
  } catch (error) {
    console.error('Admin check error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
```

### Apply to Protected Routes

```javascript
// routes/destinations.js
import { requireAdmin } from '../middleware/requireAdmin.js';

// Public routes (anyone can access)
router.get('/destinations', getAllDestinations);
router.get('/destinations/:id', getDestinationById);

// Admin-only routes
router.post('/destinations', requireAdmin, createDestination);
router.patch('/destinations/:id', requireAdmin, updateDestination);
router.delete('/destinations/:id', requireAdmin, deleteDestination);
```

## How It Works

### Frontend Flow:
1. User tries to access admin route (e.g., `/destinations/new`)
2. `proxy.js` intercepts the request
3. Checks if user is authenticated
4. Checks if user has admin role
5. If not admin → Redirects to `/destinations?error=unauthorized`
6. `DestinationsClient` shows error toast
7. Admin buttons hidden via `useAdmin()` hook

### Backend Flow:
1. Frontend makes API request (e.g., POST /destinations)
2. Auth middleware verifies JWT token
3. `requireAdmin` middleware checks user role
4. If not admin → Returns 403 Forbidden
5. If admin → Proceeds to route handler

## Security Best Practices

1. ✅ **Never trust the frontend** - Always validate roles on the backend
2. ✅ **Use middleware** - Protect routes at the middleware level
3. ✅ **Validate on every request** - Don't cache role checks
4. ✅ **Log admin actions** - Keep audit logs of admin operations
5. ✅ **Use HTTPS in production** - Protect tokens in transit
6. ✅ **Refresh session after role change** - User must log out/in

## Troubleshooting

### "Add New" button not showing for admin
**Solution:**
- Check if user has `role: "admin"` in MongoDB
- Log out and log back in to refresh session
- Check browser console for errors
- Verify `useAdmin()` hook is working: Add `console.log(isAdmin)` in component

### Redirected when accessing admin routes
**Solution:**
- Verify user role in database: `db.user.findOne({ email: "your@email.com" })`
- Check proxy.js is working: Add `console.log(session.user.role)` in proxy
- Clear cookies and log in again
- Restart dev server

### Role not updating after database change
**Solution:**
- Better Auth caches session data
- **Must log out and log back in** after changing role
- Or restart the dev server
- Check session: `console.log(session.user)` in component

### Error toast not showing
**Solution:**
- Check `DestinationsClient` has `useToast()` imported
- Verify ToastProvider wraps the app in layout
- Check browser console for errors

### Backend still allows non-admins to create/edit
**Solution:**
- Add `requireAdmin` middleware to Express routes
- Test with Postman/Thunder Client
- Check JWT token includes role field
- Verify middleware is applied before route handler

## File Structure

```
src/
├── lib/
│   ├── auth.js              # Better Auth config with role field
│   └── rbac.js              # Role checking utilities
├── hooks/
│   └── useAdmin.js          # React hook for admin checks
├── components/
│   ├── destinations/
│   │   ├── DestinationsHeader.jsx    # Shows "Add New" for admins
│   │   └── DestinationsClient.jsx    # Shows error toast
│   ├── destination-details/
│   │   └── TopNavigationBar.jsx      # Shows Edit/Delete for admins
│   └── profile/
│       └── ProfileHero.jsx           # Shows admin badge
└── proxy.js                 # Route protection middleware
```

## Future Enhancements

Consider adding:
- **More roles**: moderator, editor, viewer
- **Permissions system**: Fine-grained access control
- **Admin dashboard**: User management UI
- **Audit logs**: Track admin actions
- **Role assignment UI**: Let super admins assign roles
- **API rate limiting**: Prevent abuse
- **Two-factor auth**: Extra security for admins

## Quick Reference

### Check if user is admin (Client Component):
```javascript
import { useAdmin } from "@/hooks/useAdmin";

const MyComponent = () => {
  const { isAdmin, user, isPending } = useAdmin();
  
  if (isPending) return <div>Loading...</div>;
  
  return (
    <div>
      {isAdmin && <button>Admin Only Action</button>}
    </div>
  );
};
```

### Check if user is admin (Server Component):
```javascript
import { auth } from "@/lib/auth";
import { isAdmin } from "@/lib/rbac";
import { headers } from "next/headers";

const MyPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  
  const userIsAdmin = isAdmin(session?.user);
  
  return (
    <div>
      {userIsAdmin && <div>Admin Content</div>}
    </div>
  );
};
```

## Support

If you encounter issues:
1. Check this guide first
2. Verify database has correct role
3. Log out and log back in
4. Check browser console for errors
5. Restart dev server

---

**Remember**: Always protect both frontend AND backend! 🔒
