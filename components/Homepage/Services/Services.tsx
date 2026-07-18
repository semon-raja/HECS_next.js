"use client";

import { useState } from "react";
import { services } from "@/data/services";
import Badge from "@/components/UI/Badge/Badge";
import styles from "./Services.module.css";

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesIntro}>
        <Badge variant="tag">WHAT WE OFFER</Badge>

        <h2>
          Innovative <strong>Solutions</strong>
          <br />
          for <strong>a Sustainable</strong> Tomorrow
        </h2>
      </div>

      <div className={styles.servicesWrapper}>
        {/* Left Menu */}
        <div className={styles.serviceMenu}>
          {services.map((service) => (
            <button
              key={service.id}
              className={`${styles.serviceBtn} ${
                selectedService.id === service.id ? styles.serviceBtnActive : ""
              }`}
              onClick={() => setSelectedService(service)}
              suppressHydrationWarning
            >
              <span>{service.title}</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          ))}
        </div>

        {/* Right Panel */}
        <div className={styles.serviceDisplay}>
          <div className={styles.serviceImage}>
            <img
              src={selectedService.image}
              alt={selectedService.title}
            />
          </div>

          <div className={styles.serviceInfo}>
            <h3>{selectedService.title}</h3>

            <p className={styles.serviceDesc}>{selectedService.description}</p>

            <div className={styles.serviceFeatures}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-chart-line"></i>
                </div>

                <div className={styles.featureText}>
                  <h4>{selectedService.feature1.title}</h4>
                  <p>{selectedService.feature1.text}</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-globe"></i>
                </div>

                <div className={styles.featureText}>
                  <h4>{selectedService.feature2.title}</h4>
                  <p>{selectedService.feature2.text}</p>
                </div>
              </div>
            </div>

            <button className={styles.readMoreBtn} suppressHydrationWarning>
              Read More
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
