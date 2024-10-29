import Image from "next/image";

import styles from "./about.module.css";

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">Some infomation about me</span>

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
              <h3 className={styles.about__title}>Full name</h3>
              <span className={styles.about__subtitle}>Phạm Việt Hoàng</span>
            </div>

            <div className={styles.about__box}>
              <i className={`bx bxs-graduation ${styles.about__icon}`}></i>
              <h3 className={styles.about__title}>Education</h3>
              <span className={styles.about__subtitle}>
                University of Transport and Communitications
              </span>
            </div>

            <div className={styles.about__box}>
              <i className={`bx bx-map ${styles.about__icon}`}></i>
              <h3 className={styles.about__title}>Location</h3>
              <span className={styles.about__subtitle}>
                Cau Giay, Hanoi, Vietnam
              </span>
            </div>
          </div>
          <div className={styles.about__description}>
            As a Front-end Web Developer with hands-on experience in building
            professional web applications, I have a strong foundation in HTML,
            CSS, JavaScript, and modern front-end frameworks such as React and
            Vue.js. I am an active communicator with experience in teamwork and
            problem-solving skills.
          </div>
          <a
            href="#contact"
            className="button button--flex"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </section>
  );
}
