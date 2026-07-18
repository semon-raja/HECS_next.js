"use client";

import { useEffect, useState } from "react";
import styles from "./FloatingButtons.module.css";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.floatingButtons}>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919444012345"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* Scroll to Top — visible state toggled by scroll listener */}
      <button
        className={`${styles.scrollTopBtn}${visible ? " " + styles.visible : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      {/* Message / Enquiry */}
      <a
        href="mailto:marketing@hecs.in"
        className={styles.messageBtn}
        aria-label="Send us a message"
      >
        <i className="fa-regular fa-comment-dots"></i>
      </a>

    </div>
  );
}
