"use client";

import { useState } from "react";
import Link from "next/link";
import { menuItems, serviceBrochure } from "@/data/turnkeySolutions";
import styles from "./TurnkeySolutions.module.css";

export default function SidebarMenu() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <aside className={styles.sidebar}>
      {/* Main menu — each item is its own card */}
      <ul className={styles.menu}>
        {menuItems.map((item, index) => {
          const hasChildren = item.children && item.children.length > 0;
          const isActive = activeItem === index;

          return (
            <li key={index} className={styles.menuItem}>
              {hasChildren ? (
                <>
                  <button
                    type="button"
                    className={`${styles.menuButton} ${isActive ? styles.menuButtonActive : ""}`}
                    onClick={() => toggleItem(index)}
                  >
                    <span>{item.title}</span>
                    <span className={styles.menuIcon}>
                      {isActive ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`${styles.subMenuWrapper} ${isActive ? styles.subMenuWrapperOpen : ""}`}
                  >
                    <ul className={styles.subMenu}>
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex} className={styles.subMenuItem}>
                          <Link href="#">{child}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <div className={styles.menuButtonPlain}>
                  <span>{item.title}</span>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Service Brochure — separate card below */}
      <div className={styles.serviceBrochureCard}>
        <p className={styles.serviceBrochureTitle}>{serviceBrochure.title}</p>
        <a href="#" className={styles.pdfDownloadBtn}>
          <i className="fa-regular fa-file-pdf"></i>
          Overall Service Brochure (PDF)
        </a>
      </div>

      {/* Consultation Card */}
      <div className={styles.consultationCard}>
        <p className={styles.consultationHeading}>
          Providing Comprehensive Environmental Solutions
        </p>

        <div className={styles.contactRow}>
          <img
            src="/turnkeysolutions/icon-contact.png"
            alt="Contact"
            className={styles.contactIcon}
          />
          <div>
            <p className={styles.contactLabel}>Contact Us</p>
            <p className={styles.contactPhone}>+044-35391255</p>
          </div>
        </div>

        <a href="#" className={styles.consultationBtn}>
          Get a Free Consultation
          <span className={styles.consultationArrow}>→</span>
        </a>
      </div>
    </aside>
  );
}