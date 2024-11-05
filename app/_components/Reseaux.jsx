import React from 'react';
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Githubicon from "./icons/Githubicon";
import Linkedinicon from "./icons/Linkedin";
import Instaicon from "./icons/Insta";
import { cn } from "@/lib/utils";

const Reseaux = () => {
  return (
    <div className='flex flex-col flex-grow bg-secondary-foreground dark:bg-secondary dark:border dark:border-orange-400 rounded-lg p-4 gap-4'>
			<h2 className="font-caption text-xl font-bold">Vous pouvez me retrouver sur:</h2>
      <ul className="flex items-center gap-2">
      <Link
						href="https://github.com/rayhearth"
						className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
					>
						<img src="./git.svg" alt="" />
						<Githubicon size={12} className="text-foreground" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/emmanuelle-jupon-11b24a7b/"
						className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
					>
					<img src="./linkedin.svg" alt="" />
						<Linkedinicon size={12} className="text-foreground" />
					</Link>
					<Link
						href="https://www.instagram.com/designjemma/"
						className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
					>
						<img src="./instagram.svg" alt="" />
						<Instaicon size={12} className="text-foreground" />
					</Link>
      </ul>
    </div>
  );
};

export default Reseaux;