"use client";

import { useEffect, useState } from "react";
import { csrProjects } from "../data";
import styles from "./CSRProjects.module.css";

function getSlidesPerView(width: number) {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
}

export default function CSRProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const nextSlidesPerView = getSlidesPerView(window.innerWidth);
      const nextMaxIndex = Math.max(csrProjects.length - nextSlidesPerView, 0);

      setSlidesPerView(nextSlidesPerView);
      setActiveIndex((current) => Math.min(current, nextMaxIndex));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(csrProjects.length - slidesPerView, 0);
  const boundedIndex = Math.min(activeIndex, maxIndex);
  const step = 100 / slidesPerView;

  return (
    <section className={`${styles.projectsSection} section-anim`}>
      <div className={styles.projectsInner}>
        <div className={styles.projectsHeader}>
          <h2>CSR Projects</h2>
          <div className={styles.projectsNav}>
            <button
              className={styles.navBtn}
              type="button"
              aria-label="Previous slide"
              onClick={() => setActiveIndex((current) => Math.max(current - 1, 0))}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className={styles.navBtn}
              type="button"
              aria-label="Next slide"
              onClick={() => setActiveIndex((current) => Math.min(current + 1, maxIndex))}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className={styles.sliderViewport}>
          <div
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${boundedIndex * step}%)` }}
          >
            {csrProjects.map((project) => (
              <article className={styles.projectCard} key={project.title}>
                <div className={styles.projectImgWrap}>
                  <img src={project.image} alt={project.alt} />
                  <span className={styles.label}>CSR</span>
                </div>
                <h3>{project.title}</h3>
                <a href="#" className={styles.keepReading}>
                  Keep Reading <i className="fa-solid fa-arrow-right"></i>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}