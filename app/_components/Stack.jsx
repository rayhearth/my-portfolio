import React from "react";

import ReactIcon from "./icons/ReactIcon";

const Stack = () => {
	return (
		<div className="flex flex-col justify-center items-center bg-border rounded-lg p-4">
			<h2 className="font-caption text-xl font-bold mb-4">Ma stack</h2>

			<div className="overflow-hidden w-full">
				<div className="flex space-x-8 carousel">
					<img
						src="./illustrator.svg"
						alt="Adobe Illustrator"
						className="w-16 h-16"
					/>
					<img
						src="./photoshop.svg"
						alt="Adobe Illustrator"
						className="w-16 h-16"
					/>
					<img
						src="./indesign.svg"
						alt="Adobe Illustrator"
						className="w-16 h-16"
					/>
					<img
						src="./figma.svg"
						alt="Adobe Illustrator"
						className="w-16 h-16"
					/>
					<img src="icon-html.svg" alt="HTML" className="w-16 h-16" />
					<img src="./sass.svg" alt="React" className="w-16 h-16" />
					<img src="./js.svg" alt="React" className="w-16 h-16" />
					<ReactIcon
						size={42}
						
					/>
					<img src="./wordpress.svg" alt="WordPress" className="w-16 h-16" />
					{/* Répéter les icônes pour assurer la continuité */}
					<img
						src="./illustrator.svg"
						alt="Adobe Illustrator"
						className="w-16 h-16"
					/>
					<img
						src="./photoshop.svg"
						alt="Adobe Illustrator"
						className="w-16 h-16"
					/>
					<img
						src="./indesign.svg"
						alt="Adobe Illustrator"
						className="w-16 h-16"
					/>
					<img
						src="./figma.svg"
						alt="Adobe Illustrator"
						className="w-16 h-16"
					/>
					<img src="icon-html.svg" alt="HTML" className="w-16 h-16" />
					<img src="./sass.svg" alt="React" className="w-16 h-16" />
					<img src="./js.svg" alt="React" className="w-16 h-16" />
					<ReactIcon
						size={42}
						
					/>
					<img src="./wordpress.svg" alt="WordPress" className="w-16 h-16" />
				</div>
			</div>
		</div>
	);
};

export default Stack;
