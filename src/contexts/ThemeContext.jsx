import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useUserData } from "./UserDataContext";
import * as progressService from "../components/Departments/ComputerDep/progressService";

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const { user, progress } = useUserData() || {};
  const [theme, setThemeState] = useState("light");

  // Local storage key
  const LS_KEY = "plrn_theme_v1";

  // apply to document for global CSS hooks
  const applyDocumentTheme = useCallback((mode) => {
    try {
      const el = document.documentElement;
      if (!el) return;
      if (mode === "dark") {
        el.classList.add("plrn-dark-mode");
        el.classList.remove("plrn-light-mode");
      } else {
        el.classList.add("plrn-light-mode");
        el.classList.remove("plrn-dark-mode");
      }
    } catch (err) {
      // ignore
    }
  }, []);

  // initialize theme: prefer user progress.theme, then localStorage, then system
  useEffect(() => {
    let initial = "light";

    try {
      if (progress && progress.theme) {
        initial = progress.theme === "dark" ? "dark" : "light";
      } else if (typeof window !== "undefined") {
        const stored = localStorage.getItem(LS_KEY);
        if (stored) initial = stored === "dark" ? "dark" : "light";
        else if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          initial = "dark";
        }
      }
    } catch (err) {
      // fall back to light
    }

    setThemeState(initial);
    applyDocumentTheme(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When user/progress changes (e.g., sign-in), prefer server value if present
  useEffect(() => {
    try {
      if (progress && progress.theme) {
        const server = progress.theme === "dark" ? "dark" : "light";
        setThemeState((prev) => {
          if (prev === server) return prev;
          applyDocumentTheme(server);
          try {
            localStorage.setItem(LS_KEY, server);
          } catch (e) {}
          return server;
        });
      }
    } catch (err) {}
  }, [progress, applyDocumentTheme]);

  const persistTheme = useCallback(
    async (mode) => {
      try {
        if (user && user.uid) {
          // use updateProgressFields which will queue if auth not ready
          await progressService.updateProgressFields(user.uid, { theme: mode });
        }
      } catch (err) {
        console.warn("persistTheme failed, will rely on localStorage:", err);
      }
      try {
        localStorage.setItem(LS_KEY, mode);
      } catch (err) {}
    },
    [user]
  );

  // Accept either a direct mode string ('dark'|'light') or an updater function
  // like React's setState(prev => next). This makes toggleTheme safe to call
  // with either a value or an updater.
  const setTheme = useCallback(
    (modeOrUpdater) => {
      try {
        if (typeof modeOrUpdater === "function") {
          // Functional updater: compute new mode from previous state
          setThemeState((prev) => {
            const candidate = modeOrUpdater(prev);
            const m = candidate === "dark" ? "dark" : "light";
            try {
              applyDocumentTheme(m);
              persistTheme(m);
            } catch (e) {
              // swallow errors from side-effects; state still updates
            }
            return m;
          });
        } else {
          const m = modeOrUpdater === "dark" ? "dark" : "light";
          setThemeState(m);
          try {
            applyDocumentTheme(m);
            persistTheme(m);
          } catch (e) {
            // ignore
          }
        }
      } catch (err) {
        console.warn("setTheme failed:", err);
      }
    },
    [applyDocumentTheme, persistTheme]
  );

  const toggleTheme = useCallback(() => {
    // safe to call setTheme with an updater now
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
