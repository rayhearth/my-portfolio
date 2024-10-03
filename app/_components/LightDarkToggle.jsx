"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoonStar, Sun } from "lucide-react"; // Ou utilisez vos propres icônes

const LightDarkToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Charger le mode à partir du localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Sauvegarder les préférences et changer le mode
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-full bg-yellow-300 dark:bg-gray-800"
      aria-label="Toggle Dark Mode"
    >
      {/* Animation entre lune et soleil */}
      <motion.div
        key={isDarkMode ? "moon" : "sun"}
        initial={{ opacity: 0, rotate: 90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: -90 }}
        transition={{ duration: 0.5 }}
      >
        {isDarkMode ? (
          <MoonStar className="w-6 h-6 text-white" />
        ) : (
          <Sun className="w-6 h-6 text-yellow-500" />
        )}
      </motion.div>
    </button>
  );
};

export default LightDarkToggle;