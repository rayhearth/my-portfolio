import React from "react";
import Section from "./Section";
import { cn } from "@/lib/utils";

const Code = ({ className, children }) => {
	return (
		<span
			className={cn(
				"bg-accent/30 border border-accent p-1 text-primary rounded-sm",
				className
			)}
		>
			{children}
		</span>
	);
};

const Hero = () => {
	return (
		<Section className="flex max-lg:flex-col items-start">
			<div className="flex-[2]">
				<h2 className="font-caption text-5xl text-primary">Emmanuelle Jupon</h2>
				<h3 className="text-3xl font-caption">
					Développeuse Front-End | UX/UI Designer | Création de Sites Web
				</h3>
				<p>
					Je suis <Code>Développeuse</Code>
				</p>
			</div>
			<div className="flex-1">
				<img
					src="./photo-pastel.png"
					className="w-full h-auto max-w-sm"
					alt="Emmanuelle Jupon picture"
				/>
			</div>
		</Section>
	);
};

export default Hero;
