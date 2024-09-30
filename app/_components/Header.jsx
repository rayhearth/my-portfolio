import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Section from "./Section";

const Header = () => {
	return (
		<header className="sticky bg-background/70 top-0 py-4 size-full  border-b">
			<Section className="flex items-center">
				<img
					src="logo.svg"
					alt="logo de la société jemmadesign créée et dirigée par Emmanuelle Jupon Graphiste et développeuse front-end"
					className="h-5 flex"
				/>
				<div className="flex-1" />
				<ul className="flex items-center gap-2">
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
			</Section>
		</header>
	);
};

export default Header;
