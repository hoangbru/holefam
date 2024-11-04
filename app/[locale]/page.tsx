import {
  About,
  Contact,
  Overview,
  Projects,
  Skills,
} from "@/components/modules";
import { Footer, Navigation, Scrollup } from "@/components/ui";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: never };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
  };
}

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
