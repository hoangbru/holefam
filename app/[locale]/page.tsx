import {
  About,
  Contact,
  Overview,
  Projects,
  Skills,
} from "@/components/modules";
import { Footer, Navigation, Scrollup } from "@/components/ui";

import { getProjects } from "@/actions/getProjects";
import { getTechnologies } from "@/actions/getTechnologies";

export default async function Home() {
  const [projects, technologies] = await Promise.all([
    getProjects(),
    getTechnologies(),
  ]);

  return (
    <div className="background-image">
      <div className="main">
        <Navigation />
        <Overview />
        <About />
        <Skills technologies={technologies} />
        <Projects projects={projects} />
        <Contact />
        <Footer />
        <Scrollup />
      </div>
    </div>
  );
}
