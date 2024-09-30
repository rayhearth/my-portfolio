import React from 'react';
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Githubicon from "./icons/Githubicon";
import Linkedin from "./icons/Linkedin";
import Insta from "./icons/Insta";

const Reseaux = () => {
  return (
    <div className='flex-1'>
      <ul className="flex items-center gap-2">
      <Link
						href="https://github.com/rayhearth"
						className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
					>
						<Githubicon size={12} className="text-foreground" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/emmanuelle-jupon-11b24a7b/"
						className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
					>
						<Linkedin size={12} className="text-foreground" />
					</Link>
					<Link
						href="https://www.instagram.com/designjemma/"
						className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
					>
						<Insta size={12} className="text-foreground" />
					</Link>
      </ul>
    </div>
  );
};

export default Reseaux;