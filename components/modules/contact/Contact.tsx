"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import styles from "./contact.module.css";

import { emailPattern } from "@/constants/pattern";
import { debounce } from "@/utils/debounce";
import { InputBase, TextareaBase } from "@/components/base";

export default function Contact() {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    message: "",
  });

  type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
  };

  const [errors, setErrors] = useState<FormErrors>({});

  const checkValidationContactForm = (): boolean => {
    const newErrors: FormErrors = {}; // Create a new errors object

    // Check if the name does not exceed 50 characters
    if (forms.name.length > 50) {
      newErrors.name = "Enter a maximum of 50 characters";
    }

    // Validate email: it should not be empty and must follow a valid format
    if (!forms.email.trim()) {
      newErrors.email = "Please insert your email";
    } else if (!emailPattern.test(forms.email)) {
      newErrors.email = "Invalid email format";
    }

    // Check if the message does not exceed 200 characters
    if (forms.message.length > 200) {
      newErrors.message = "Enter a maximum of 200 characters";
    }

    // Update the errors state if there are any errors
    setErrors(newErrors);

    // Return true if no errors, false if any errors found
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value }); // Update the forms state
  };

  const debouncedInputChange = debounce(handleInputChange, 300);

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    const isFormValid = checkValidationContactForm();

    if (isFormValid) {
      toast.success("Contact successfully");
    } else {
      toast.error("Something went wrong, please try again");
    }
  };

  return (
    <section className="section" id="contact">
      <h2 className="section__title">Contact me</h2>
      <span className="section__subtitle">
        Let&apos;s connect and dive into our project right away!
      </span>
      <div className={`${styles.contact__container} container grid-gap`}>
        <div className={styles.contact__content}>
          <form className={styles.contact__form} onSubmit={handleSubmitContact}>
            <div className={styles.contact__form_group}>
              <label htmlFor="name" className={styles.contact__form_tag}>
                {errors.name ? (
                  <span className="text-red-500">{errors.name}</span>
                ) : (
                  <span>Name</span>
                )}
              </label>
              <InputBase
                id="name"
                value={forms.name}
                onChange={debouncedInputChange}
                className={styles.contact__form_input}
                placeholder="Insert your name"
              />
            </div>
            <div className={styles.contact__form_group}>
              <label htmlFor="email" className={styles.contact__form_tag}>
                {errors.email ? (
                  <span className="text-red-500">{errors.email}</span>
                ) : (
                  <span>Email</span>
                )}
              </label>
              <InputBase
                id="email"
                value={forms.email}
                onChange={debouncedInputChange}
                className={styles.contact__form_input}
                placeholder="Insert your email"
              />
            </div>
            <div
              className={`${styles.contact__form_group} ${styles.contact__form_area}`}
            >
              <label htmlFor="message" className={styles.contact__form_tag}>
                {errors.message ? (
                  <span className="text-red-500">{errors.message}</span>
                ) : (
                  <span>Message</span>
                )}
              </label>
              <TextareaBase
                id="message"
                value={forms.message}
                onChange={debouncedInputChange}
                className={styles.contact__form_input}
                placeholder="Insert your message"
              />
            </div>
            <button
              type="submit"
              className={`button button--flex ${styles.contact__form_send}`}
            >
              Send<i className="bx bx-send"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
