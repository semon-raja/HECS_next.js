"use client";

import styles from "./Badge.module.css";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "tag" | "news" | "news-solid";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  if (variant === "tag") {
    return (
      <span className={styles.badgeTag}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        {children}
      </span>
    );
  }

  if (variant === "news" || variant === "news-solid") {
    const badgeClass = variant === "news-solid" 
      ? `${styles.newsBadge} ${styles.newsSolid}` 
      : styles.newsBadge;

    return (
      <span className={badgeClass}>
        <span className={styles.dot1}></span>
        <span className={styles.dot2}></span>
        <span className={styles.dot3}></span>
        {children}
      </span>
    );
  }

  // default variant
  return (
    <span className={styles.badge}>
      {children}
    </span>
  );
}
