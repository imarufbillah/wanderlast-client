"use client";

import { authClient } from "@/lib/auth-client";
import { isAdmin } from "@/lib/rbac";

/**
 * Hook to check if current user is admin
 */
export const useAdmin = () => {
  const { data: session, isPending } = authClient.useSession();

  return {
    isAdmin: isAdmin(session?.user),
    user: session?.user,
    isPending,
  };
};
