import { updateUserFields } from "../components/Departments/ComputerDep/progressService";

const STORAGE_KEY = "plrn_theme"; // 'dark' | 'light'

export function getStoredTheme() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEY) || null;
}

// Save theme locally and optionally persist to user's profile when uid provided
export async function setTheme(theme = "light", uid = null) {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (err) {
      console.warn("Failed to persist theme locally", err);
    }
  }

  if (uid) {
    try {
      // write a small theme field to top-level user doc
      await updateUserFields(uid, { theme });
    } catch (err) {
      console.warn("Failed to persist theme to user profile", err);
    }
  }
}

// Returns the effective theme: prefers stored local theme, else null
export function detectTheme() {
  return getStoredTheme();
}

export default { getStoredTheme, setTheme, detectTheme };
