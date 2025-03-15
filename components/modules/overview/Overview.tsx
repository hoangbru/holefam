// import Image from "next/image";
import { useTranslations } from "next-intl";
import { Tooltip } from "antd";
// import { Tooltip, Dropdown } from "antd";
// import type { MenuProps } from "antd";

import styles from "./overview.module.css";

export default function Overview() {
  const t = useTranslations("HomePage");
  // tooltip
  const text = (
    <span className="tooltip-resume">{t("overview.download_cv")}</span>
  );

  // const items: MenuProps["items"] = [
  //   {
  //     key: "1",
  //     label: (
  //       <a
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         href="https://www.antgroup.com"
  //       >
  //         1st menu item
  //       </a>
  //     ),
  //   },
  //   {
  //     key: "2",
  //     label: (
  //       <a
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         href="https://www.aliyun.com"
  //       >
  //         2nd menu item
  //       </a>
  //     ),
  //   },
  //   {
  //     key: "3",
  //     label: (
  //       <a
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         href="https://www.luohanacademy.com"
  //       >
  //         3rd menu item
  //       </a>
  //     ),
  //   },
  // ];

  return (
    <section className="section" id="overview">
      {/* <div className="pr-4 w-full flex justify-end mb-4">
        <Dropdown menu={{ items }} placement="bottom">
          <div className="relative w-10 h-6">
            <Image
              src={"/images/flag/vietnam.webp"}
              alt="flag of Vietnam"
              fill
              className="object-cover"
            />
          </div>
        </Dropdown>
      </div> */}
      <div className={`${styles.overview__container} container grid-gap`}>
        <div className={`${styles.overview__content} grid-gap`}>
          <div className={styles.overview__social}>
            <a
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              href={`mailto:viethoangpham25@gmail.com`}
              className={styles.overview__social_icon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-gmail"></i>
            </a>
            <a
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              href={`https://github.com/hoangbru`}
              className={styles.overview__social_icon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-sine"
            className={`${styles.overview__img} bg-cover bg-center`}
            style={{
              backgroundImage: `url(/images/hi.jpeg)`,
            }}
          ></div>

          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
            className={styles.overview__data}
          >
            <h1 className={styles.overview__title}>holefam</h1>
            <p className={styles.overview__description}>
              {t("overview.fe_web_dev_from_Hanoi")}
            </p>
            <Tooltip
              placement="top"
              color="rgba(51,51,51,0.7)"
              overlayClassName="ant-tooltip-inner"
              title={text}
            >
              <a
                href="/[Front_End_Developer]_PHAM_VIET_HOANG.pdf"
                download="[Front_End_Developer]_PHAM_VIET_HOANG.pdf"
                className={`${styles.overview__resume} button button--flex`}
              >
                {t("overview.my_resume")}
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className={styles.overview__scroll}>
        <a
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          href="#about"
          className="nav__link"
        >
          <i
            className={`uil uil-angle-double-down ${styles.overview__scroll_down}`}
          ></i>
          {t("overview.to_scroll_down_for_more")}
        </a>
      </div>
    </section>
  );
}
