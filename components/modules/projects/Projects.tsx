"use client";

import { useTranslations } from "next-intl";

import styles from "./projects.module.css";

import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { fetcher } from "@/utils/fetcher";

const Projects = () => {
  const t = useTranslations("HomePage");
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await fetcher('/api/projects');
        setProjects(data);
      } catch  {
        setError('Failed to fetch projects');
      }
    }
    fetchProjects();
  }, []);

  return (
    <section className="section" id="projects">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <h2 className="section__title">{t("projects.title")}</h2>
        <span className="section__subtitle">{t("projects.subtitle")}</span>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div
        className={`${styles.projects__container} container grid-gap ${styles.projects__div}`}
      >
        {projects?.length == 0 ? (
          t("projects.no_results")
        ) : (
          <>
            {projects?.map((item: Project, index: number) => (
              <ProjectCard key={index} project={item} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
