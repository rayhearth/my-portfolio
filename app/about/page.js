import Image from "next/image";

import Hero from "./_components/Hero.jsx";
import Spacing from "./_components/Spacing.jsx";
import Status from "./_components/Status.jsx"
import Skills from "./_components/Skill.jsx";


export default function About() {
  return (
    <main>

      <Spacing size="md"/>
      <Hero/>
      <Spacing size="md"/>
      <Status/>
      <Spacing size="md"/>
      <Skills/>
      <Spacing size="md"/>
      
    </main>
  );
}
