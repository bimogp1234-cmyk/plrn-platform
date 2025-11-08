import {
  ensureUserInitialized,
  updateUserFields,
} from "../components/Departments/ComputerDep/progressService";

/**
 * Backwards-compatible helper to save a user. Delegates to the centralized
 * ensureUserInitialized to avoid duplicated initialization logic.
 */
export const saveUserToFirestore = async (user, data) => {
  if (!user?.uid) throw new Error("User UID is missing");

  // Use the centralized initializer which sets canonical fields
  await ensureUserInitialized(user.uid, {
    fullName: data?.fullName || data?.name || user.displayName || "",
    username: data?.username || user.email?.split("@")[0] || "",
    email: data?.email || user.email || "",
    provider: data?.provider || "email",
    agree: data?.agree || false,
  });

  // Keep a lightweight doc for compatibility as well
  await updateUserFields(user.uid, {
    uid: user.uid,
    email: data?.email || user.email,
    ...data,
    // prefer numeric epoch timestamps for consistency with server rules
    createdAt: Date.now(),
  });
};
