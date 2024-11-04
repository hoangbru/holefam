"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Tooltip } from "antd";

import "./navigation.css";

export default function Navigation() {
  const t = useTranslations("HomePage");
  const [activeNav, setActiveNav] = useState("#overview");

  const navItems = [
    { href: "#overview", title: t("navigation.overview"), icon: "uil-estate" },
    { href: "#about", title: t("navigation.about"), icon: "uil-user" },
    { href: "#skills", title: t("navigation.skills"), icon: "uil-setting" },
    { href: "#projects", title: t("navigation.projects"), icon: "uil-folder" },
    { href: "#contact", title: t("navigation.contact"), icon: "uil-comment" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      const top = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 250;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top <= offset + height) {
          setActiveNav(`#${id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__menu">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li className="nav__item" key={item.href}>
                <Tooltip
                  placement="right"
                  color="rgb(0,0,0)"
                  title={item.title}
                >
                  <a
                    href={item.href}
                    onClick={() => setActiveNav(item.href)}
                    className={
                      activeNav === item.href
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                  >
                    <span className="sr-only">{item.title}</span>
                    <i className={`uil ${item.icon} nav__icon`}></i>
                  </a>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
