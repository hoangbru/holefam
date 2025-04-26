import {
  About,
  Contact,
  Overview,
  Projects,
  Skills,
} from "@/components/modules";
import { Footer, Navigation, Scrollup } from "@/components/templates";

export default async function Home() {
  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url(/images/background-a.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
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
