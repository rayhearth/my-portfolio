import React from "react";
import Section from "./Section";
import Reseaux from "./Reseaux";
import Stack from "./Stack";
import LightDarkToggle from "./LightDarkToggle";

const Hero = () => {
	return (
		<Section className="grid items-start gap-4 p-4">
			<div className="grid grid-cols-2 gap-4 items-stretch p-0">
				{/* Carte 1 : Introduction */}
				<div className="flex flex-col gap-2 bg-secondary p-1 rounded-lg">
					<p className="font-caption text-2xl font-bold text-primary">
						Bonjour, je suis
					</p>
					<h1 className="font-caption text-2xl font-bold text-primary">
						Emmanuelle Jupon
					</h1>
					<h3 className="text-lg font-caption">
						Développeuse Front-End | UX/UI Designer | Créatrice de Sites Web
					</h3>
				</div>

				{/* Carte 3 : Mode Light */}
				<LightDarkToggle/>
			</div>

			<div className="grid grid-cols-2 gap-4 items-stretch p-0 ">
				{/* Carte 2 : Image profile */}
				<div className="max-h-80 h-full">
					<img
						src="./photo_profile.png"
						className="h-full w-full object-cover rounded-lg"
						alt="Emmanuelle Jupon"
					/>
				</div>

				{/* Cartes A propos et Réseaux */}

				<div className="flex flex-col justify-between gap-4 h-full">
					{/* Carte 4 : À propos */}
					<div className="flex flex-col flex-grow gap-2 p-4 bg-accent rounded-lg">
						<h2 className="font-caption text-xl font-bold">À Propos</h2>
						<p className="text-sm">
							Passionnée de design, j’aime chercher des solutions pour une
							expérience digitale adaptée à vos besoins.
						</p>
					</div>
					{/* Carte 6 : Réseaux sociaux */}
					<Reseaux />
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4 items-stretch p-0">
				{/* Carte 5 : Mes projets */}
				<div className="flex flex-col justify-center items-center bg-accent rounded-lg p-4">
					<p className="font-caption text-xl font-bold">Mes projets</p>
					<span className="rotate-90 text-lg font-bold">→</span>
				</div>

				{/* Carte 7 : Stack technique */}
				<Stack/>
			</div>
		</Section>
	);
};

export default Hero;
