import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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


export default Work;