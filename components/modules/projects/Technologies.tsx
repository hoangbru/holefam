import { ITechnology } from "@/types/technology";

import styles from "./projects.module.css";
import Image from "next/image";

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

export default Technologies;
