import Image from "next/image";
import { useTranslations } from "next-intl";

import styles from "./about.module.css";

export default function About() {
  const t = useTranslations("HomePage");

  return (
    <section className="section" id="about">
      <h2 className="section__title">{t("about.title")}</h2>
      <span className="section__subtitle">{t("about.subtitle")}</span>

      <div className={`${styles.about__container} container grid-gap`}>
        <Image
          src={"/images/me.jpeg"}
          alt="holefam-image"
          width={350}
          height={350}
          className={styles.about__img}
        />

        <div className={styles.about__data}>
          <div className={`${styles.about__info} grid-gap`}>
            <div className={styles.about__box}>
              <i className={`bx bx-user-circle ${styles.about__icon}`}></i>
              <h3 className={styles.about__title}>{t("about.full_name")}</h3>
              <span className={styles.about__subtitle}>Phạm Việt Hoàng</span>
            </div>

            <div className={styles.about__box}>
              <i className={`bx bxs-graduation ${styles.about__icon}`}></i>
              <h3 className={styles.about__title}>{t("about.education")}</h3>
              <span className={styles.about__subtitle}>
                {t("about.school")}
              </span>
            </div>

            <div className={styles.about__box}>
              <i className={`bx bx-map ${styles.about__icon}`}></i>
              <h3 className={styles.about__title}>{t("about.location")}</h3>
              <span className={styles.about__subtitle}>
                Cau Giay, Hanoi, Vietnam
              </span>
            </div>
          </div>
          <div className={styles.about__description}>
            {t("about.description")}
          </div>
          <a href="#contact" className="button button--flex">
            {t("about.let_us_talk")}
          </a>
        </div>
      </div>
    </section>
  );
}
