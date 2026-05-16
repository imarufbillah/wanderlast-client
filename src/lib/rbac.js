/**
 * Role-Based Access Control (RBAC) utilities
 */

export const ROLES = {
  USER: "user",
  ADMIN: "admin",
};

/**
 * Check if user has admin role
 */
export const isAdmin = (user) => {
  return user?.role === ROLES.ADMIN;
};

/**
 * Check if user has user role
 */
export const isUser = (user) => {
  return user?.role === ROLES.USER;
};

/**
 * Check if user has any of the specified roles
 */
export const hasRole = (user, roles) => {
  if (!user?.role) return false;
  const roleArray = Array.isArray(roles) ? roles : [roles];
  return roleArray.includes(user.role);
};
