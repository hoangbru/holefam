import {
  About,
  Contact,
  Overview,
  Projects,
  Skills,
} from "@/components/modules";
import { Footer, Navigation, Scrollup } from "@/components/ui";

export default function Home() {
  return (
    <div className="background-image">
      <div className="main">
        <Navigation />
        <Overview />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Scrollup />
      </div>
    </div>
  );
}
