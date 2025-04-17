import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import styles from "./projects.module.css";

const Paragraph = ({ text }: { text: string | undefined }) => {
  const t = useTranslations("HomePage");

  const [isReadMore, setIsReadMore] = useState(true);
  const [isLongText, setIsLongText] = useState(false);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    if (textRef.current) {
      const { scrollHeight } = textRef.current;
      const lineHeight = parseFloat(
        getComputedStyle(textRef.current).lineHeight || "0"
      );
      const maxHeight = lineHeight * 2;
      if (scrollHeight > maxHeight !== isLongText) {
        setIsLongText(scrollHeight > maxHeight);
      }
    }
  }, [text, isLongText]);

  return (
    <div className="flex flex-col gap-[2px] justify-center mb-6">
      <p
        ref={textRef}
        className={`${styles.projects__description} ${
          isReadMore ? "read-more" : "read-more expanded"
        }`}
      >
        {t(text)}
      </p>
      {isLongText && (
        <span
          onClick={toggleReadMore}
          className="w-fit text-sm cursor-pointer text-blue-500 hover:underline"
        >
          {t(isReadMore ? "projects.read_more" : "projects.show_less")}
        </span>
      )}
    </div>
  );
};

export default Paragraph;
