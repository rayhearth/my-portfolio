"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoonStar, Sun } from "lucide-react";

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
		<div className="flex flex-col justify-center items-center bg-secondary-foreground dark:bg-gray-800 rounded-lg p-4">
			<button
				onClick={toggleTheme}
				className="flex items-center justify-center p-4 rounded-lg bg-secondary-foreground dark:bg-gray-800"
				aria-label="Toggle Dark Mode"
			>
				{/* Animation entre lune et soleil */}
				<motion.div
					key={isDarkMode ? "moon" : "sun"}
					initial={{ opacity: 0, y: isDarkMode ? -50 : 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: isDarkMode ? 50 : -50 }}
					transition={{ duration: 0.75 }}
				>
					{isDarkMode ? (
						<MoonStar className="w-6 h-6 text-primary" />
					) : (
						<Sun className="w-6 h-6 text-primary" />
					)}
				</motion.div>
			</button>
			<p className="mb-2 text-center font-semibold">
				{isDarkMode
					? "Cliquez sur cette carte pour le mode Light"
					: "Cliquez sur cette carte pour le mode Dark"}
			</p>
		</div>
	);
};

export default LightDarkToggle;
