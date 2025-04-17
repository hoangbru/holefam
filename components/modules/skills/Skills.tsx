import { FC, Fragment } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import styles from "./skills.module.css";

import { ITechnology } from "@/types/technology";

type SkillsProps = {
  technologies: ITechnology[];
};

const Skills: FC<SkillsProps> = ({ technologies }) => {
  const t = useTranslations("HomePage");

  return (
    <section className="section" id="skills">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <h2 className="section__title">{t("skills.title")}</h2>
        <span className="section__subtitle">{t("skills.subtitle")}</span>
      </div>

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
                {technologies.map((item: ITechnology) => {
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
