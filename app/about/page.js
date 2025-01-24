import Spacing from "../_components/Spacing.jsx";
import Code from "../_components/Code.jsx";


export default function About() {
  return (
    <main>
      <Spacing size="md"/>
      <h1>About</h1>
      <p className="text-base">
					Je suis on{" "} <Code className="inline-flex items-center gap-1">Développeuse front-end 👩‍💻</Code> passionnée par le design UX/UI. J'aime collaborer sur des projets qui allient créativité et performance, en utilisant des outils comme React et Figma. Ensemble, nous pouvons créer des expériences digitales qui font la différence !
				</p>
      
    </main>
  );
}
