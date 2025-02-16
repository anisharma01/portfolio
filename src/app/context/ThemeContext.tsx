"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Read stored theme from localStorage (if any)
  const storedTheme = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme || "light";
  const [theme, setTheme] = useState<Theme>(storedTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    // We are not relying on Tailwind's dark: variants anymore.
    // All styling is applied conditionally below.
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
