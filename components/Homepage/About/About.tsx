"use client";

import { useState } from "react";
import styles from "./About.module.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutInner}>
        <div className={styles.aboutIntro}>
          <h1>India&apos;s Leading Environmental Solutions Provider</h1>

          <p>
            Hubert Enviro Care Systems (HECS) is a pioneer in delivering
            integrated environmental solutions with 27 years of
            industry-leading expertise. As one of India&apos;s most trusted
            environmental service providers, we offer a comprehensive range of
            services, including wastewater treatment solutions, STP operations
            and maintenance, environmental consultancy, NABL-accredited
            laboratory services, and Packaged Sewage Treatment Plants (PSTP).
            Our solutions are designed to help industries, institutions, and
            municipalities meet regulatory standards while promoting
            sustainability. With a strong focus on innovation, compliance, and
            long-term performance, HECS is committed to driving measurable
            environmental impact and building a cleaner, safer future for
            generations ahead.
          </p>
        </div>

        <div className={styles.aboutContainer}>
          <div className={styles.aboutImage}>
            <img
              src="/images/history-new-1.jpeg"
              alt="HECS"
            />

            <div className={styles.experienceBox}>
              <div className={styles.statItem}>
                <h2>10+</h2>
                <p>Locations Internationally</p>
              </div>

              <div className={styles.statDivider}></div>

              <div className={styles.statItem}>
                <h2>25k+</h2>
                <p>Satisfied Clients</p>
              </div>
            </div>
          </div>

          <div className={styles.aboutContent}>
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${
                  activeTab === "vision" ? styles.tabActive : ""
                }`}
                onClick={() => setActiveTab("vision")}
                suppressHydrationWarning
              >
                Our Vision
              </button>

              <button
                className={`${styles.tab} ${
                  activeTab === "mission" ? styles.tabActive : ""
                }`}
                onClick={() => setActiveTab("mission")}
                suppressHydrationWarning
              >
                Our Mission
              </button>
            </div>

            <div className={styles.contentArea}>
              {activeTab === "vision" && (
                <div className={`${styles.tabContent} ${styles.tabContentActive}`}>
                  <h3>Vision 2025</h3>
                  <p>
                    In 2015, Hubert Enviro Care Systems Ltd. (HECS)
                    set forth a clear vision to emerge as one of
                    India&apos;s leading Environmental Management
                    Companies by 2025.
                  </p>

                  <h3>Vision 2035</h3>
                  <p>
                    Upon the successful realization of Vision
                    2025, HECS now embarks on its ambitious
                    Vision 2035.
                  </p>
                </div>
              )}

              {activeTab === "mission" && (
                <div className={`${styles.tabContent} ${styles.tabContentActive}`}>
                  <h3>Our Mission</h3>
                  <p>
                    At HECS, our mission is to provide innovative
                    and sustainable environmental management
                    solutions that foster a cleaner environment
                    while positively contributing to communities
                    and industries.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
