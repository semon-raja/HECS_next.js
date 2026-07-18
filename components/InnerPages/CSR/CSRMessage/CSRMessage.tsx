import type { ReactNode } from "react";
import styles from "./CSRMessage.module.css";

type CSRMessageProps = {
  title: string;
  image: string;
  alt: string;
  body: string;
  footerName?: string;
  footerCompany?: string;
};

export default function CSRMessage({
  title,
  image,
  alt,
  body,
  footerName,
  footerCompany,
}: CSRMessageProps) {
  let footer: ReactNode = null;

  if (footerName || footerCompany) {
    footer = (
      <p className={styles.footerText}>
        {footerName ? <strong>{footerName}</strong> : null}
        {footerName && footerCompany ? <br /> : null}
        {footerCompany}
      </p>
    );
  }

  return (
    <section className={`${styles.messageSection} section-anim`}>
      <div className={styles.messageInner}>
        <div className={styles.messageImg}>
          <img src={image} alt={alt} />
        </div>
        <div className={styles.messageText}>
          <h2>{title}</h2>
          <p>{body}</p>
          {footer}
        </div>
      </div>
    </section>
  );
}