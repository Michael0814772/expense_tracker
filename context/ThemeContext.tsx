import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * 1️⃣ Define the allowed theme types
 */
type Theme = "light" | "dark";

/**
 * 2️⃣ Define what the context exposes
 */
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isLoading: boolean;
};

/**
 * 3️⃣ Create the context
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Storage key (just a constant string)
 */
const THEME_KEY = "@app_theme";

/**
 * 4️⃣ Create the provider
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isLoading, setIsLoading] = useState(true);

  /**
   * 5️⃣ Load saved theme when app starts
   */
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_KEY);

        if (savedTheme === "light" || savedTheme === "dark") {
          setTheme(savedTheme);
        }
      } catch (error) {
        console.log("Failed to load theme:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTheme();
  }, []);

  /**
   * 6️⃣ Toggle + save theme
   */
  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    try {
      await AsyncStorage.setItem(THEME_KEY, newTheme);
    } catch (error) {
      console.log("Failed to save theme:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLoading }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * 7️⃣ Custom hook for easy usage
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};
