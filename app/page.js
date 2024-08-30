import Image from "next/image";
import Header from "./_components/Header.jsx";
import Hero from "./_components/Hero.jsx";
import Spacing from "./_components/Spacing.jsx";


export default function Home() {
  return (
    <main>
      <Header/>
      <Spacing size="md"/>
      <Hero/>
    </main>
  );
}
