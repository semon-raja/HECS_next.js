"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    location: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className={styles.contactSection}>
      {/* Contact Form */}
      <div className={styles.contactFormPanel}>
        <div className={styles.contactFormCard}>
          <div className={styles.contactIntro}>
            <h2>Get in touch</h2>
            <p>Do you want to know more or contact our sales department?</p>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                suppressHydrationWarning
              />
            </div>

            <div className={styles.formGroup}>
              <label>Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                suppressHydrationWarning
              />
            </div>

            <div className={styles.formGroup}>
              <label>Phone*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                suppressHydrationWarning
              />
            </div>

            <div className={styles.formGroup}>
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                suppressHydrationWarning
              />
            </div>

            <div className={styles.formGroup}>
              <label>Company*</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                suppressHydrationWarning
              />
            </div>

            <div className={styles.formGroup}>
              <label>Location*</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                suppressHydrationWarning
              />
            </div>

            <div className={styles.formGroup}>
              <label>Description*</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formButtons}>
              <button type="submit" className={styles.btnSubmit} suppressHydrationWarning>
                Submit
              </button>
              <button type="reset" className={styles.btnReset} suppressHydrationWarning>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className={styles.contactMapPanel}>
        <div className={styles.contactMapCard}>
          <iframe
            src="https://www.google.com/maps?q=Hubert+Enviro+Care+Systems+Ltd,+A21+Thiru+Vi+Ka+Industrial+Estate+Guindy+Chennai&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
