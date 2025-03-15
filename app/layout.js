import { Oswald, Fredoka } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./_components/Header.jsx";
import Spacing from "./_components/Spacing.jsx";

const oswald = Oswald({ 
	subsets: ["latin"],
	variable: "--font-caption"

});

const fredoka = Fredoka({
	subsets: ["latin"] ,
})


export const metadata = {
	metadataBase: new URL("https://jemma-design.fr/"),
	title: "Portfolio Emmanuelle Jupon Graphiste - Développeuse Front-End",
	description:
		"Découvrez le portfolio d'Emmanuelle Jupon, développeuse front-end, graphiste et webdesigner basée dans les Hauts-de-France. Spécialisée en design moderne et responsive, je crée des expériences web uniques et accessibles à tous.",
	keywords: [
		"Développeuse front-end", 
		"graphiste", 
		"webdesigner", 
		"portfolio", 
		"Hauts-de-France", 
		"design web", 
		"création site internet", 
		"UX/UI design", 
		"responsive design"
	],
	author: "Emmanuelle Jupon",
	openGraph: {
		title: "Portfolio Emmanuelle Jupon Graphiste - Développeuse Front-End",
		description: "Découvrez mon portfolio où je combine développement front-end, graphisme et webdesign pour créer des sites web modernes et réactifs.",
		url: "https://jemma-design.fr/",
		images: [
			{
				url: "/path/to/your-image.jpg",  // Remplacez par l'URL réelle de votre image
				width: 1200,
				height: 630,
				alt: "Emmanuelle Jupon Portfolio Image",
			},
		],
		type: "website",
		locale: "fr_FR",
	},
	alternates: {
		canonical: "https://jemma-design.fr/",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr" className="h-full">
			<body className={cn(fredoka, oswald.variable, "bg-background text-foreground"  )}>
				<Header/>
				<main>{children}</main>
			</body>
		</html>
	);
}
