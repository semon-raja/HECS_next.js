"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./LifeAtHECS.module.css";

const slides = [
  {
    img: "/careers_image/img_1.jpeg",
    alt: "Unwind — Team Activities",
    title: "Unwind",
    sub: "At HECS, work and play go hand in hand.",
    desc: "At HECS, we believe a strong team is built through shared experiences. From sports tournaments and friendly challenges to creative contests and talent showcases, our activities encourage collaboration, fitness, and camaraderie. These moments help us recharge, connect across departments, and strengthen the team spirit that defines life at HECS.",
  },
  {
    img: "/careers_image/img-2.jpg",
    alt: "Uplift — CSR Activities",
    title: "Uplift",
    sub: "Giving back is part of who we are.",
    desc: "At HECS, our CSR initiatives are driven by employees who care deeply about community impact. Our teams regularly visit orphanages and elder care homes, spending meaningful time through games, music, and companionship. We also organize volunteer initiatives and blood donation drives—standing together to support and uplift the communities around us.",
  },
  {
    img: "/careers_image/img-3.jpg",
    alt: "Unite — Annual Day",
    title: "Unite",
    sub: "A celebration of togetherness",
    desc: "HECS Annual Day brings employees and their families together for a day filled with games, activities, and celebration. It is a time to connect beyond the workplace and honour the people who make HECS strong. The day concludes with a proud awards ceremony that recognizes dedication, performance, and teamwork across the organization.",
  },
];

type ViewMode = "mobile" | "tablet" | "desktop";

function getViewMode(width: number): ViewMode {
  if (width < 769) return "mobile";
  if (width <= 1024) return "tablet";
  return "desktop";
}

export default function LifeAtHECS() {
  const [active, setActive] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("desktop");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Detect view mode
  useEffect(() => {
    const check = () => setViewMode(getViewMode(window.innerWidth));
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Auto-slide on mobile (1 at a time) and tablet (2 at a time, step 1 slide)
  useEffect(() => {
    if (viewMode === "desktop") {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    // On tablet: 3 slides, showing 2 at a time → valid indexes 0,1 (step by 1)
    // On mobile: 3 slides, showing 1 at a time → valid indexes 0,1,2
    const maxIdx = viewMode === "tablet" ? slides.length - 2 : slides.length - 1;
    intervalRef.current = setInterval(() => {
      setActive((prev) => {
        const next = prev + 1;
        return next > maxIdx ? 0 : next;
      });
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [viewMode]);

  const [prevViewMode, setPrevViewMode] = useState<ViewMode>("desktop");
  if (viewMode !== prevViewMode) {
    setActive(0);
    setPrevViewMode(viewMode);
  }

  // Track transform:
  // Desktop: no transform (grid layout)
  // Tablet: each slide is 50% of track (track width = 150%), step = 33.3333%
  // Mobile: each slide is 33.3333% of track (track width = 300%), step = 33.3333%
  const translateX = viewMode === "desktop" ? 0 : -(active * 33.3333);

  return (
    <section className={styles.lifeHecs}>
      <div className={styles.lifeHecsInner}>

        <div className={styles.lifeHecsHeader}>
          <h2>Life at HECS</h2>
          <p>
            At HECS, our workplace culture goes beyond projects, reports, and
            deadlines. We believe that meaningful work is best supported by
            meaningful relationships—within our teams and with the communities
            around us. From community outreach and CSR initiatives to festive
            celebrations and annual family gatherings, life at HECS is a blend
            of purpose, pride, and togetherness.
          </p>
        </div>

        {/* Slider viewport — active on mobile & tablet, passthrough on desktop */}
        <div className={styles.lifeHecsSliderViewport}>
          <div
            className={styles.lifeHecsGrid}
            style={
              viewMode !== "desktop"
                ? { transform: `translateX(${translateX}%)` }
                : undefined
            }
          >
            {slides.map((slide, i) => (
              <div className={styles.lifeCol} key={i}>
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className={styles.lifeColImg}
                />
                <div className={styles.lifeColContent}>
                  <div className={styles.lifeLabel}>
                    <span className={styles.lifeLabelTitle}>{slide.title}</span>
                    <span className={styles.lifeLabelSub}>{slide.sub}</span>
                  </div>
                  <p className={styles.lifeDesc}>{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
