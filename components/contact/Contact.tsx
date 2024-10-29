"use client";

import toast from "react-hot-toast";

import styles from "./contact.module.css";

export default function Contact() {
  const forms = {
    name: "",
    email: "",
    message: "",
  };
  const errors = {
    name: {
      message: "Please insert your name",
    },
    email: {
      message: "Please insert your email",
    },
    message: {
      message: "Please insert your message",
    },
  };
  const pattern = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Invalid email format",
  };
  const maxLength = {
    value: 200,
    message: "Enter a maximum of 200 characters",
  };
  const onHandleContact = async (value: any) => {
    try {
      const data = await {
        ...value,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      if (data) {
        toast.success("Contact successfully");
      } else {
        toast.error("Something went wrong, please try again");
      }
    } catch (error) {
      console.log(error);
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
          <form className={styles.contact__form} onSubmit={onHandleContact}>
            <div className={styles.contact__form_group}>
              <label htmlFor="name" className={styles.contact__form_tag}>
                {errors.name ? (
                  <span className="text-red-500">
                    {errors.name.message as React.ReactNode}
                  </span>
                ) : (
                  <span>Name</span>
                )}
              </label>
              <input
                className={styles.contact__form_input}
                id="name"
                name="name"
                placeholder="Insert your name"
              />
            </div>
            <div className={styles.contact__form_group}>
              <label htmlFor="email" className={styles.contact__form_tag}>
                {errors.email ? (
                  <span className="text-red-500">
                    {errors.email.message as React.ReactNode}
                  </span>
                ) : (
                  <span>Email</span>
                )}
              </label>
              <input
                className={styles.contact__form_input}
                id="email"
                name="email"
                placeholder="Insert your email"
              />
            </div>
            <div
              className={`${styles.contact__form_group} ${styles.contact__form_area}`}
            >
              <label htmlFor="message" className={styles.contact__form_tag}>
                {errors.message ? (
                  <span className="text-red-500">
                    {errors.message.message as React.ReactNode}
                  </span>
                ) : (
                  <span>Message</span>
                )}
              </label>
              <textarea
                className={styles.contact__form_input}
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Insert your message"
              ></textarea>
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
