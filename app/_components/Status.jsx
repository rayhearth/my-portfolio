import React from "react";
import Section from "./Section";
import { Card } from "@/components/ui/card";
import {
	ArrowUpRight,
	CheckCircle,
	Clapperboard,
	Linkedin,
	Piano,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const Status = () => {
	const Sideproject = ({ Logo, title, description, url }) => {
		return (
			<Link
				href={url}
				className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
			>
				<span className="bg-accent text-accent-foreground p-3 rounded-sm">
					<Logo size={16} />
				</span>

				<div>
					<p className="text-lg font-semibold">{title}</p>
					<p className="text-sm text-muted-foreground">{description}</p>
				</div>
			</Link>
		);
	};

	const SIDE_PROJECTS = [
		{
			Logo: Piano,
			title: "SummerJazz",
			description: "A platform for developpers to share their projects",
			url: "/summerjazz",
		},
		{
			Logo: CheckCircle,
			title: "TodoApp",
			description: "A platform for developpers to share their projects",
			url: "/todoapp",
		},
		{
			Logo: Clapperboard,
			title: "cinereact",
			description: "A platform for developpers to share their projects",
			url: "/cinereact",
		},
	];

	const Work = ({ image, title, role, url, date, freelance }) => {
		return (
			<Link
				href={url}
				className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
			>
				<img
					src={image}
					alt={title}
					className="w-10 h-10 object-contain rounded-md"
				/>

				<div className="mr-auto">
					<div className="flex items-center gap-2">
						<p className="text-lg font-semibold">{title}</p>
						{freelance && <Badge variant="outline">Mission</Badge>}
					</div>
					<p className="text-xs text-muted-foreground">{role}</p>
				</div>

				<p className="text-xs text-end text-muted-foreground">{date}</p>
			</Link>
		);
	};

	const WORKS = [
		{
			image: "./fidaxe.png",
			title: "Fidaxe",
			role: "designer et développeuse",
			date: "2023",
			url: "https://fidaxe.com/",
			freelance: true,
		},
		{
			image:
				"https://media.licdn.com/dms/image/v2/C4E0BAQH40l1lBHgbZA/company-logo_100_100/company-logo_100_100/0/1631378617391/tikamoon_logo?e=1733961600&v=beta&t=27MUXiENJdLexcSANMUnt9JBLI71GDSzAGL3U2mpo3w",
			title: "Tikamoon",
			role: "développeuse front-end",
			date: "2023",
			url: "https://www.tikamoon.com/",
		},
		{
			image: "./Logo-hofstudies.png",
			title: "Hofstudies",
			role: "Webdesigner",
			date: "2021",
			url: "https://www.jemma-design.fr/swane/",
		},
	];

	const ContactCard = ({ image, mediumImage, mediumImageUrl, name, description }) => {
		return (
			<Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
				<div className="relative">
					<img
						src={image}
						alt={name}
						className="w-10 h-10 rounded-full object-contain"
					/>
					{mediumImageUrl ? (
						<img
							src={mediumImageUrl}
							alt="medium icon"
							className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
						/>
					) : (
						mediumImage && (
							<mediumImage className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
						)
					)}
				</div>
				<div className="mr-auto">
					<div className="flex items-center gap-2">
						<p className="text-lg font-semibold">{name}</p>
					</div>
					<p className="text-xs text-muted-foreground">{description}</p>
				</div>
				<ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16} />
			</Card>
		);
	};

	return (
		<Section className="flex max-lg:flex-col items-start gap-4">
			<div className="flex-[3] w-full">
				<Card className="w-full p-4 flex flex-col gap-2">
					<p className="text-lg text-muted-foreground">Side fun project</p>
					<div className="flex flex-col gap-4">
						{SIDE_PROJECTS.map((project, index) => (
							<Sideproject
								key={index}
								Logo={project.Logo}
								title={project.title}
								description={project.description}
								url={project.url}
							/>
						))}
					</div>
				</Card>
			</div>
			<div className="flex-[2] w-full flex flex-col gap-4">
				<Card className="p-4 flex-1">
					<p className="text-lg text-muted-foreground">Work</p>
					{WORKS.map((work, index) => (
						<Work key={index} {...work} />
					))}
				</Card>
				<Card className="p-4 flex-1 flex flex-col gap-2">
					<p className="text-lg text-muted-foreground">Contact me</p>
					<ContactCard
						name="Emmanuelle Jupon"
						image="https://avatars.githubusercontent.com/u/91567944?s=400&u=a2f9efd2527e990c6b5289f1ebaa891151e9bfa5&v=4"
						mediumImageUrl="https://imgs.search.brave.com/CRKpJ2i7Qrapog4PsRGqk7PdEECm2mCeMt1a4ujorvc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/MW1pbjMwLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/Ny9TeW1ib2xlLUlu/c3RhZ3JhbS01MDB4/NDAzLmpwZw"
						description="développeuse front-end | UI designer"
					/>
					<ContactCard
						name="Emmanuelle Jupon"
						image="https://avatars.githubusercontent.com/u/91567944?s=400&u=a2f9efd2527e990c6b5289f1ebaa891151e9bfa5&v=4"
						mediumImageUrl="https://imgs.search.brave.com/MWfgmzPzeosjEZfRQcGE12XBVZ9BXLTAw7xDTA-iG5I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9nZXQt/cGljdG8uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzAy/L2xvZ28tbGlua2Vk/aW4ud2VicA"
						description="développeuse front-end | UI designer"
					/>
				</Card>
			</div>
		</Section>
	);
};

export default Status;
