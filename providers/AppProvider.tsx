"use client";

import { Fragment, ReactNode, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import AOS from "aos";

import "aos/dist/aos.css";

const AppProvider = ({ children }: { children: ReactNode }) => {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Fragment>
      <Toaster />
      {children}
    </Fragment>
  );
};

export default AppProvider;
