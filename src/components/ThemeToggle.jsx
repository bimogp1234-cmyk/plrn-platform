import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ position: "fixed", left: 12, top: 12, zIndex: 9999 }}>
      <Tooltip title={theme === "dark" ? "وضع النهار" : "الوضع الداكن"}>
        <IconButton
          onClick={toggleTheme}
          size="large"
          sx={{ background: "rgba(255,255,255,0.85)", boxShadow: 3 }}
          aria-label="toggle theme"
        >
          {theme === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Tooltip>
    </div>
  );
}
