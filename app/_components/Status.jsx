import React from "react";
import Section from "./Section";
import ContactCard from "./ContactCard";
import Work from "./Work";
import SideProject from "./SideProject";
import { Card } from "@/components/ui/card";
import {
	CheckCircle,
	Clapperboard,
	Piano,
} from "lucide-react";



const Status = () => {
	
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

	

	return (
		<Section className="flex max-lg:flex-col items-start gap-4">
			<div className="flex-[3] w-full">
				<Card className="w-full p-4 flex flex-col gap-2">
					<p className="text-lg text-muted-foreground">Side fun project</p>
					<div className="flex flex-col gap-4">
						{SIDE_PROJECTS.map((project, index) => (
							<SideProject
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
