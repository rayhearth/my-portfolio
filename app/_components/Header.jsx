"use client"; // Indique que ce composant doit être rendu côté client

import React, { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";


const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<header className="w-full sticky bg-background/70 top-0 py-4 border-b border-border">
			<nav className="max-w-[56rem] w-full mx-auto px-6 flex justify-between items-center">
				<Link href="/">
					<img
						src="logo.svg"
						alt="logo de la société jemmadesign créée et dirigée par Emmanuelle Jupon Graphiste et développeuse front-end"
						className="h-5"
					/>
				</Link>

				{/* Menu Burger pour version mobile */}
				<button
					aria-label="toggle button"
					aria-expanded={menuOpen}
					id="menu-btn"
					onClick={toggleMenu}
					className="cursor-pointer w-7 md:hidden"
				>
					<img 
						src="./menu-burger.svg" 
						alt="Menu burger" 
					/>
				</button>

				{/* Menu Desktop */}
				<ul className="hidden md:flex gap-4">
					<Link
						href="/"
						className={cn(buttonVariants({ variant: "outline" }), "p-0")}
					>
						Accueil
					</Link>
					<Link
						href="/about"
						className={cn(buttonVariants({ variant: "outline" }), "p-0")}
					>
						Qui suis-je ?
					</Link>
					<Link
						href="/projets"
						className={cn(buttonVariants({ variant: "outline" }), "p-0")}
					>
						Projets
					</Link>
					<Link
						href="/contact"
						className={cn(buttonVariants({ variant: "outline" }), "p-0")}
					>
						Contact
					</Link>
				</ul>

				{/* Menu Mobile avec animation */}
				<ul
					id="toggled-menu"
					className={`absolute top-16 left-0 w-full p-6 flex flex-col items-center gap-4 bg-background border-b transition-transform duration-500 ease-in-out  ${
						menuOpen ? "translate-x-0" : "-translate-x-full"
					} md:hidden`}
				>
					<Link
						href="/"
						onClick={toggleMenu}
						className={cn(buttonVariants({ variant: "outline" }), "p-0")}
					>
						Accueil
					</Link>
					<Link
						href="/about"
						onClick={toggleMenu}
						className={cn(buttonVariants({ variant: "outline" }), "p-0")}
					>
						Qui suis-je ?
					</Link>
					<Link
						href="/projets"
						onClick={toggleMenu}
						className={cn(buttonVariants({ variant: "outline" }), "p-0")}
					>
						Projets
					</Link>
					<Link
						href="/contact"
						onClick={toggleMenu}
						className={cn(buttonVariants({ variant: "outline" }), "p-0 ")}
					>
						Contact
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
