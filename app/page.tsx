import {
  About,
  Contact,
  Footer,
  Navigation,
  Overview,
  Projects,
  Scrollup,
  Skills,
} from "@/components";

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
