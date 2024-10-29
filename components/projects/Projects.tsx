"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import styles from "./projects.module.css";

import { IProduct } from "../../interface/product";
import { ITechnology } from "../../interface/technology";

export default function Projects() {
  const products: IProduct[] = [
    {
      id: 1,
      name: "QLtask",
      image: "/images/qltask.png",
      description:
        "Task management website, which is built based on the Trello use Next.js 14, PostgreSQL and Prisma",
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
      description:
        "Graduation project with the participation of 7 team members, focusing on the development of an automated food ordering system named easyFood. The system enables automatic menu selection through QR codes. React + Typescript + Redux Toolkit is employed for the front-end, and PHP (Laravel framework) + MySQL is used for the back-end",
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

  const Paragraph = ({ text }: { text: string | undefined }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const [isLongText, setIsLongText] = useState(false);
    const textRef = useRef(null);

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    useEffect(() => {
      if (textRef.current) {
        const { scrollHeight } = textRef.current;
        const lineHeight = parseFloat(
          getComputedStyle(textRef.current).lineHeight
        );
        const maxHeight = lineHeight * 2;
        setIsLongText(scrollHeight > maxHeight);
      }
    }, [text]);

    return (
      <div className="flex flex-col gap-[2px] justify-center mb-6">
        <p
          ref={textRef}
          className={`${styles.projects__description} ${
            isReadMore ? "read-more" : "read-more expanded"
          }`}
        >
          {text}
        </p>
        {isLongText && (
          <span
            onClick={toggleReadMore}
            className="w-fit text-sm cursor-pointer text-blue-500 hover:underline"
          >
            {isReadMore ? " Read More" : " Show Less"}
          </span>
        )}
      </div>
    );
  };

  const Technologies = ({ techs }: { techs: ITechnology[] }) => {
    return (
      <div className={styles.projects__tag}>
        {techs.map((item: ITechnology) => {
          return (
            <div key={item.id}>
              {item.tag ? (
                <i
                  className={`bx bxl-${item.tag} ${styles.projects__tag_icon}`}
                ></i>
              ) : (
                <div
                  className={`relative ${styles.projects__tag_icon} ${styles.project__tag_image}`}
                >
                  <Image
                    src="/images/nextjs-icon.png"
                    alt="nextjs"
                    style={{ color: "rgba(55, 159, 200, 1)" }}
                    fill
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const ActionButton = ({
    link,
    linkGithub,
  }: {
    link: string | undefined;
    linkGithub: string | undefined;
  }) => {
    return (
      <div className={styles.projects__button}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projects__button_demo}
        >
          <i className="bx bx-link-external"></i>
          Demo
        </a>
        {linkGithub && (
          <a
            href={linkGithub}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projects__button_github}
          >
            <i className="bx bxl-github"></i>
            Github
          </a>
        )}
      </div>
    );
  };

  return (
    <section className="section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">
        The projects that I have completed
      </span>

      <div
        className={`${styles.projects__container} container grid-gap ${styles.projects__div}`}
      >
        {products?.length == 0 ? (
          "No results."
        ) : (
          <>
            {products?.map((item: IProduct) => (
              <div className={styles.projects__card} key={item.id}>
                <Image
                  src={item.image || ""}
                  alt={`projects-${item.name}`}
                  width={400}
                  height={250}
                  className={styles.projects__img}
                />
                <div className={styles.projects__content}>
                  <h3 className={styles.projects__title}>{item.name}</h3>
                  <Paragraph text={item.description} />
                  <Technologies techs={item.technologies} />
                  <ActionButton link={item.link} linkGithub={item.linkGithub} />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
