import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const screenCheck = window.matchMedia("(max-width: 640px)");
    setIsSmallScreen(screenCheck.matches);

    const storedTheme = localStorage.getItem("theme");

    if (screenCheck.matches) {
      // Mobile: Force dark mode
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    } else {
      // Desktop: Load stored theme
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    !isSmallScreen && (
      <button
        onClick={toggleTheme}
        className={cn(
          "fixed top-5 right-5 z-50 p-3 rounded-full transition-colors duration-300",
          "min-w-[44px] min-h-[44px] flex items-center justify-center",
          "focus:outline-none"
        )}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
    )
  );
};
