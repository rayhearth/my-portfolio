"use client";

import React from "react";
import { motion } from "framer-motion";
import ReactIcon from "./icons/ReactIcon";
import GithubIcon from "./icons/GithubIcon";
import WordpressIcon from "./icons/WordpressIcon";
import IllustratorIcon from "./icons/IllustratorIcon";
import Vite from "./icons/Vite";
import JsIcon from "./icons/JsIcon";
import FigmaIcon from "./icons/FigmaIcon";

const Stack = () => {
	return (
		<div className="flex flex-col justify-center items-center bg-border rounded-lg p-4">
			<h2 className="font-caption text-xl font-bold mb-4">Ma stack</h2>

			<div className="overflow-hidden w-full">
				<motion.div
					className="flex space-x-8"
					animate={{ x: [-100, 0, -100] }} // Mouvement continu
					transition={{ repeat: Infinity, duration: 10, ease: "linear" }} // Répète l'animation en boucle
				>
					<Vite size={42} />
					<GithubIcon size={42} />
					<WordpressIcon size={42} />
					<ReactIcon size={42} />
					<IllustratorIcon size={42} />
					<FigmaIcon size={42} />
					<JsIcon size={42} />
				</motion.div>
			</div>
		</div>
	);
};

export default Stack;
