"use client";

import { useState, FormEvent, ChangeEvent, useRef, ElementRef } from "react";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";

import styles from "./contact.module.css";

import { emailPattern } from "@/constants/pattern";
import { debounce } from "@/utils/debounce";
import { InputBase, TextareaBase } from "@/components/base";

export default function Contact() {
  const t = useTranslations();
  const formRef = useRef<ElementRef<"form">>(null);

  const [forms, setForms] = useState({
    name: "",
    email: "",
    message: "",
  });

  type FormFieldErrors = {
    name?: string;
    email?: string;
    message?: string;
  };

  const [errors, setErrors] = useState<FormFieldErrors>({});

  const checkValidationContactForm = (): boolean => {
    const newErrors: FormFieldErrors = {};

    // Check if the name does not exceed 50 characters
    if (forms.name.length > 50) {
      newErrors.name = t("Validation.maximum", { num: 50 });
    }

    // Validate email: it should not be empty and must follow a valid format
    if (!forms.email.trim()) {
      newErrors.email = t("Validation.required", { field: "email" });
    } else if (!emailPattern.test(forms.email)) {
      newErrors.email = t("Validation.email_pattern");
    }

    // Check if the message does not exceed 200 characters
    if (forms.message.length > 200) {
      newErrors.message = t("Validation.maximum", { num: 200 });
    }

    // Update the errors state if there are any errors
    setErrors(newErrors);

    // Return true if no errors, false if any errors found
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value }); // Update the forms state
  };

  const debouncedInputChange = debounce(handleInputChange, 500);

  const handleSubmitContact = (e: FormEvent) => {
    e.preventDefault();

    const isFormValid = checkValidationContactForm();

    if (isFormValid) {
      toast.success(t("HomePage.contact.contact_successfully"));
      formRef.current?.reset();
      setForms({
        name: "",
        email: "",
        message: "",
      });
    } else {
      toast.error(t("HomePage.contact.contact_failed"));
    }
  };

  return (
    <section className="section" id="contact">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <h2 className="section__title">{t("HomePage.contact.title")}</h2>
        <span className="section__subtitle">
          {t("HomePage.contact.subtitle")}
        </span>
      </div>
      <div className={`${styles.contact__container} container grid-gap`}>
        <div className={styles.contact__content}>
          <form
            className={styles.contact__form}
            ref={formRef}
            onSubmit={handleSubmitContact}
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className={styles.contact__form_group}
            >
              <label htmlFor="name" className={styles.contact__form_tag}>
                {errors.name ? (
                  <span className="text-red-500">{errors.name}</span>
                ) : (
                  <span>{t("HomePage.contact.name")}</span>
                )}
              </label>
              <InputBase
                id="name"
                name="name"
                defaultValue={forms.name}
                onChange={debouncedInputChange}
                className={styles.contact__form_input}
                placeholder={t("HomePage.contact.insert_your_name")}
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className={styles.contact__form_group}
            >
              <label htmlFor="email" className={styles.contact__form_tag}>
                {errors.email ? (
                  <span className="text-red-500">{errors.email}</span>
                ) : (
                  <span>
                    {t("HomePage.contact.email")}
                    <span className="text-red-500 ">*</span>
                  </span>
                )}
              </label>
              <InputBase
                id="email"
                name="email"
                defaultValue={forms.email}
                onChange={debouncedInputChange}
                className={styles.contact__form_input}
                placeholder={t("HomePage.contact.insert_your_email")}
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className={`${styles.contact__form_group} ${styles.contact__form_area}`}
            >
              <label htmlFor="message" className={styles.contact__form_tag}>
                {errors.message ? (
                  <span className="text-red-500">{errors.message}</span>
                ) : (
                  <span>{t("HomePage.contact.message")}</span>
                )}
              </label>
              <TextareaBase
                id="message"
                name="message"
                cols={30}
                rows={10}
                defaultValue={forms.message}
                onChange={debouncedInputChange}
                className={styles.contact__form_input}
                placeholder={t("HomePage.contact.insert_your_message")}
              />
            </div>
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              type="submit"
              className={`button button--flex ${styles.contact__form_send}`}
            >
              {t("HomePage.contact.send")}
              <i className="bx bx-send"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
