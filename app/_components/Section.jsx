import React from 'react';
import { cn } from "@/lib/utils";

const Section = ({ className, children }) => {
  return (
    <section className={cn('max-w-4xl px-4 m-auto', className)}>
      {children}
    </section>
  );
};

export default Section;