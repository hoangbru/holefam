"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import styles from "./projects.module.css";

import { IProject } from "@/types/project";
import ProjectCard from "./ProjectCard";

type ProjectsProps = {
  projects: IProject[];
};

const Projects: FC<ProjectsProps> = ({ projects }) => {
  const t = useTranslations("HomePage");

  return (
    <section className="section" id="projects">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <h2 className="section__title">{t("projects.title")}</h2>
        <span className="section__subtitle">{t("projects.subtitle")}</span>
      </div>

      <div
        className={`${styles.projects__container} container grid-gap ${styles.projects__div}`}
      >
        {projects?.length == 0 ? (
          t("projects.no_results")
        ) : (
          <>
            {projects?.map((item: IProject, index: number) => (
              <ProjectCard key={index} project={item} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
