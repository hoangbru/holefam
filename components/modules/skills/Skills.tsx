"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import styles from "./skills.module.css";
import { Technology } from "@/types/technology";
import { fetcher } from "@/utils/fetcher";

const Skills = () => {
  const t = useTranslations("HomePage");
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTechnologies() {
      try {
        const data = await fetcher("/api/technologies");
        setTechnologies(data);
      } catch {
        setError("Failed to fetch technologies");
      }
    }
    fetchTechnologies();
  }, []);

  return (
    <section className="section" id="skills">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <h2 className="section__title">{t("skills.title")}</h2>
        <span className="section__subtitle">{t("skills.subtitle")}</span>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className={styles.skills__container}>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className={styles.skills__content}
        >
          <div className={styles.skills__box}>
            {technologies.length === 0 ? (
              "No results."
            ) : (
              <Fragment>
                {technologies.map((item: Technology) => {
                  return (
                    <div
                      key={item.id}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                      className={`${styles.skills__data} flex flex-col justify-center items-center`}
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.tag ? (
                          <i
                            className={`bx bxl-${item.tag} ${styles.skills__icon}`}
                          ></i>
                        ) : (
                          <div
                            className={`relative ${styles.skills__icon} ${styles.image}`}
                          >
                            <Image
                              src="/images/nextjs-icon.png"
                              alt="nextjs"
                              className={`flex justify-center items-center`}
                              fill
                            />
                          </div>
                        )}
                      </a>
                      <h3 className={styles.skills__name}>{item.name}</h3>
                    </div>
                  );
                })}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
