import React from "react";
import { cn } from "@/lib/utils";

const Code = ({ className, children }) => {
	return (
		<span
			className={cn(
				"bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent px-1 py-0.5 text-primary rounded-sm",
				className
			)}
		>
			{children}
		</span>
	);
};

export default Code;