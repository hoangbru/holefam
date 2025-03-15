"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  About,
  Contact,
  Overview,
  Projects,
  Skills,
} from "@/components/modules";
import { Footer, Navigation, Scrollup } from "@/components/ui";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
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
