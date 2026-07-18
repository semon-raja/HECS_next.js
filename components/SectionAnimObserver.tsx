"use client";

import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to every `.section-anim` element
 * on the page and adds the `visible` class when the element scrolls
 * into view. Safe to mount multiple times — each observer only watches
 * elements that haven't been made visible yet.
 */
export default function SectionAnimObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".section-anim");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
