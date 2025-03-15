"use client";

import { useTranslations } from "next-intl";

import styles from "./projects.module.css";

import { IProduct } from "@/interfaces/product";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const t = useTranslations("HomePage");

  const products: IProduct[] = [
    {
      id: 1,
      name: "QLtask",
      image: "/images/qltask.png",
      description: t("projects.qltask"),
      link: "https://qltask.vercel.app/",
      linkGithub: "https://github.com/hoangbru/QLtask",
      technologies: [
        {
          id: 1,
          name: "TypeScript",
          tag: "typescript",
        },
        {
          id: 2,
          name: "Next.js",
          tag: "",
        },
        {
          id: 3,
          name: "Tailwind CSS",
          tag: "tailwind-css",
        },
        {
          id: 4,
          name: "PostgreSQL",
          tag: "postgresql",
        },
      ],
    },
    {
      id: 2,
      name: "easyFood",
      image: "/images/easyFood.png",
      description: t("projects.easy_food"),
      link: "https://easyfood.firebbq.id.vn/",
      linkGithub: "",
      technologies: [
        {
          id: 1,
          name: "TypeScript",
          tag: "typescript",
        },
        {
          id: 2,
          name: "React",
          tag: "react",
        },
        {
          id: 3,
          name: "Redux",
          tag: "redux",
        },
        {
          id: 4,
          name: "PHP",
          tag: "php",
        },
      ],
    },
  ];

  return (
    <section className="section" id="projects">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <h2 className="section__title">{t("projects.title")}</h2>
        <span className="section__subtitle">{t("projects.subtitle")}</span>
      </div>

      <div
        className={`${styles.projects__container} container grid-gap ${styles.projects__div}`}
      >
        {products?.length == 0 ? (
          t("projects.no_results")
        ) : (
          <>
            {products?.map((item: IProduct, index: number) => (
              <ProjectCard key={index} project={item} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}
