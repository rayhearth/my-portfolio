import React from "react";
import { Card } from "@/components/ui/card";

const Status = () => {
	return (
		<section className="flex max-lg:flex-col items-start gap-4">
			<div className="flex-[3] w-full">
				<Card className="w-full p-4 flex flex-col gap-2 w-full">
        <p className="text-lg text-muted-foreground">Side fun project</p>

          </Card>
			</div>
			<div className="flex-[2] w-full flex flex-col gap-4">
				<Card className="p-4 flex-1">Contact me</Card>
				<Card className="p-4 flex-1">Work</Card>
			</div>
		</section>
	);
};

export default Status;
