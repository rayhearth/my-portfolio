import React from "react";
import Section from "./Section";
import Code from "./Code"



const Hero = () => {
	return (
		<Section className="flex max-lg:flex-col items-start gap-4">
			<div className="flex-[3] w-full flex flex-col gap-2">
				<h1 className="font-caption font-bold text-5xl text-primary">Emmanuelle Jupon</h1>
				<h3 className="text-3xl font-caption">
					Développeuse Front-End | UX/UI Designer | Création de Sites Web
				</h3>
				<p className="text-base">
					Je suis on{" "} <Code className="inline-flex items-center gap-1">Développeuse front-end 👩‍💻</Code> passionnée par le design UX/UI. J'aime collaborer sur des projets qui allient créativité et performance, en utilisant des outils comme React et Figma. Ensemble, nous pouvons créer des expériences digitales qui font la différence !
				</p>
			</div>
			<div className="flex-[2] max-md:m-auto ml-auto">
				<img
					src="./photo_profile.png"
					className="w-full h-auto max-w-xs max-md:w-56"
					alt="Emmanuelle Jupon picture"
				/>
			</div>
		</Section>
	);
};

export default Hero;
