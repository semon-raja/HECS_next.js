import React from "react";
import Link from "next/link";
import styles from "./PageHeader.module.css";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumb: BreadcrumbItem[];
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <section className={styles.pageHeader}>
      <div className={styles.pageHeaderInner}>
        <h1>{title}</h1>
        <div className={styles.breadcrumb}>
          {breadcrumb.map((item, index) => {
            const isLast = index === breadcrumb.length - 1;
            return (
              <React.Fragment key={index}>
                {item.href ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  <span className={isLast ? styles.current : ""}>{item.label}</span>
                )}
                {!isLast && <i className="fa-solid fa-chevron-right"></i>}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
