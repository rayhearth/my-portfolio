import React from "react";
import Section from "./Section";
import { Badge } from "@/components/ui/badge";
import ReactIcon from "./icons/ReactIcon";
import NextLogo from "./icons/NextLogo";
import ViteLogo from "./icons/Vite";
import Code from "./Code";

const Skills = () => {
	return (
		<Section className="flex flex-col items-start gap-4">
			<Badge variant={"outline"}>Skills</Badge>
			<h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
				J'aime travailler sur...
			</h2>
			<div className="flex max-md:flex-col gap-4">
				<div className="flex flex-col gap-2">
					<ReactIcon
						size={42}
						className="animate-spin"
						style={{ animationDuration: "10s" }}
					/>
					<h3 className="text-2xl font-semibold tracking-tigh">React</h3>
					<p className="text-sm text-muted-foreground">
						My main framework is <Code>React</Code>. I also use{" "}
						<Code>Nextjs</Code> as a backend and frontend framework.
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<NextLogo size={42} />

					<h3 className="text-2xl font-semibold tracking-tigh">Nextjs</h3>
					<p className="text-sm text-muted-foreground">
						My main framework is <Code>React</Code>. I also use{" "}
						<Code>Nextjs</Code> as a backend and frontend framework.
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<ViteLogo size={42} />

					<h3 className="text-2xl font-semibold tracking-tigh">Vite</h3>
					<p className="text-sm text-muted-foreground">
						My main framework is <Code>React</Code>. I also use{" "}
						<Code>Nextjs</Code> as a backend and frontend framework.
					</p>
				</div>
			</div>
		</Section>
	);
};

export default Skills;
