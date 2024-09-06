import React from "react";
import Section from "./Section";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clapperboard, Piano } from "lucide-react";
import Link from "next/link";

const Status = () => {
	const Sideproject = ({ Logo, title, description, url }) => {
		return (
			<Link href={url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
				<span className="bg-accent text-accent-foreground p-3 rounded-sm">
					<Logo size={16}/>
				</span>

				<div>
					<p className="text-lg font-semibold">{title}</p>
					<p className="text-sm text-muted-foreground">{description}</p>
				</div>
			</Link>
		)
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

	const Work = ({ image, title, role, url, date }) => {
		return (
			<Link href={url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
				
					<img 
					src={image} 
					alt={title} 
					className="w-10 h-10 object-contain rounded-md" />
				

				<div>
					<p className="text-lg font-semibold">{title}</p>
					<p className="text-sm text-muted-foreground">{role}</p>
				</div>
				<div className="ml-auto">
				<p className="text-sm text-muted-foreground">{date}</p>
				</div>
			</Link>
		)
	};

	const WORKS = [
		{
			image: "./fidaxe.png",
			title: "Fidaxe",
			role: "designer et développeuse",
			date:"2023",
			url: "https://fidaxe.com/",
		},
		{
			image: "https://media.licdn.com/dms/image/v2/C4E0BAQH40l1lBHgbZA/company-logo_100_100/company-logo_100_100/0/1631378617391/tikamoon_logo?e=1733961600&v=beta&t=27MUXiENJdLexcSANMUnt9JBLI71GDSzAGL3U2mpo3w",
			title: "Tikamoon",
			role: "développeuse front-end",
			date:"2023",
			url: "https://www.tikamoon.com/",
		},
		{
			image: "./Logo-hofstudies.png",
			title: "Hofstudies",
			role: "Webdesigner",
			date:"2021",
			url: "https://www.jemma-design.fr/swane/",
		},
	];

	return (
		<Section className="flex max-lg:flex-col items-start gap-4">
			<div className="flex-[3] w-full">
				<Card className="w-full p-4 flex flex-col gap-2 w-full">
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
				<Card className="p-4 flex-1">Contact me</Card>
				<Card className="p-4 flex-1">
					<p className="text-lg text-muted-foreground">Work</p>
					{WORKS.map((work, index) => (
							<Work
								key={index}
								image={work.image}
								title={work.title}
								role={work.role}
								date={work.date}
								url={work.url}
							/>
						))}
					</Card>
			</div>
		</Section>
	);
};

export default Status;
