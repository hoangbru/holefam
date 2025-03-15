import styles from "./projects.module.css";

const ActionButtons = ({
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

export default ActionButtons;
