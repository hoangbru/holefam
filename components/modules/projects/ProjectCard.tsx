"use client";

import { FC } from "react";
import Image from "next/image";

import styles from "./projects.module.css";

import ActionButtons from "./ActionButtons";
import Paragraph from "./Paragraph";
import Technologies from "./Technologies";

import { IProduct } from "@/interfaces/product";

type ProjectCardProps = {
  project: IProduct;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      className={styles.projects__card}
      key={project.id}
    >
      <Image
        src={project.image || ""}
        alt={`projects-${project.name}`}
        width={400}
        height={250}
        className={styles.projects__img}
      />
      <div className={styles.projects__content}>
        <h3 className={styles.projects__title}>{project.name}</h3>
        <Paragraph text={project.description} />
        <Technologies techs={project.technologies} />
        <ActionButtons link={project.link} linkGithub={project.linkGithub} />
      </div>
    </div>
  );
};

export default ProjectCard;
