"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Testimonials.module.css";
import Badge from "@/components/UI/Badge/Badge";

const testimonials = [
  {
    avatar: "/careers_image/1.jpg",
    name: "Gunasekaran",
    role: "Accounts - General Manager",
    body: "HECS is an excellent company to work with, known for its commendable and diversified outlook, offering a wide range of environmental solutions to society and the country at large, along with the execution of turnkey projects. My tenure as General Manager in the HECS family provided me with valuable opportunities to gain rich experience, contributing significantly to my career growth and domain expertise. Working in a dynamic environment, navigating complex situations, and taking on challenging tasks instilled in me a deep sense of pride and enabled me to achieve sustainable milestones in my professional journey. I'm grateful for the trust and support from colleagues and leadership, which fostered collaboration and innovation.",
  },
  {
    avatar: "/careers_image/2.jpg",
    name: "Shyamprakash MV",
    role: "Regional Manager",
    body: "After joining HECS, I have taken on multiple and enhanced roles that significantly deepened my expertise in Environmental Impact Assessment (EIA), particularly in alignment with Indian standards and guidelines. My journey at HECS has greatly expanded my knowledge beyond Risk Assessment into advanced areas such as Life Cycle Assessment, Carbon Footprint studies, Water and Energy Audits, and emerging concepts like the Circular Economy. These diverse and enriching experiences at HECS have empowered me to grow professionally, broaden my perspective, and strengthen my commitment to sustainable and innovative environmental solutions.",
  },
  {
    avatar: "/careers_image/3.jpg",
    name: "Anusuya Dhakshana Moorthy",
    role: "Lab Manager",
    body: "My journey at HECS began in July 2016, and it's been an enriching experience with opportunities for growth and learning. With the support of our CEO and management, I completed my Master's degree and am now pursuing my Ph.D. Starting in Quality, I progressed to Laboratory In-charge, working across various platforms. HECS's nurturing environment and inclusive culture have enabled my professional growth, especially for women in leadership roles. I'm proud to be part of HECS and look forward to contributing to its continued success, innovation, and excellence.",
  },
  {
    avatar: "/careers_image/4.jpg",
    name: "Murugaeswari K",
    role: "Food Lab - Manager, Laboratory",
    body: "My journey at HECS has been transformative, professionally and personally. I've broadened my skills beyond technical expertise, boosting confidence and presentation skills. The work culture is empowering and inclusive, valuing female employees' growth. I'm grateful for the directors' support, creating an environment where opinions are valued and potential recognized. Collaborating with advanced souls and best practices has fueled my growth, allowing me to contribute meaningfully and pursue my Ph.D. dream.",
  },
  {
    avatar: "/careers_image/5.jpg",
    name: "Sriya G Nath",
    role: "Senior Sales Executive, Marketing",
    body: "Over the past four years, my journey with HECS has been marked by continuous learning and growth. With the guidance and support of the management team, I have expanded my expertise not only in marketing but also in technical areas, gaining a well-rounded perspective of the business. I completed my Master's in Environmental Studies, deepening my ability to integrate diverse insights into my work. Through these experiences, I have evolved into a more capable, confident, and well-rounded professional.",
  },
  {
    avatar: "/careers_image/6.jpg",
    name: "Rabik Raja M",
    role: "Senior Environmental Consultant, Consultancy",
    body: "Collaborating with HECS signifies joining a mission-oriented team dedicated to achieving environmental excellence, distinguished by its comprehensive range of all environmental services provided under one roof, including Approvals & Licences, manufacturing and installation of treatment plants, operations and maintenance, and periodic regulatory compliance for all industries. The organisation presents a solid foundation for professionals to tackle environmental challenges and develop innovative solutions.",
  },
  {
    avatar: "/careers_image/7.jpg",
    name: "Ajeeth kumar M.T",
    role: "Head - Digital Marketing",
    body: "My journey at HECS spans over five years, beginning as a Report Executive. Driven by passion, I explored interdepartmental roles, and HECS recognized my potential, entrusting me with diverse responsibilities. I developed skills in organizing exhibitions, video production, editing, event coordination, and social media management. Today, I'm proud to serve as Head of Digital Marketing at HECS, leveraging my expertise to drive innovation and excellence.",
  },
  {
    avatar: "/careers_image/8.jpg",
    name: "Ravichandran",
    role: "O&M - Operations Manager",
    body: "As an Operations Manager at HECS, managing Operation and Maintenance (O&M) services opens doors to professional growth, innovation, and a commitment to excellence. The organisational setup provides a dynamic and inspiring environment where passionate professionals can drive impactful results and ensure customer satisfaction. Being part of the O&M team is an enriching experience, filled with opportunities to contribute meaningfully to operational excellence and make a real difference.",
  },
];

type ViewMode = "mobile" | "tablet" | "desktop";

function getViewMode(width: number): ViewMode {
  if (width < 769) return "mobile";
  if (width <= 1024) return "tablet";
  return "desktop";
}

// Cards visible at once per mode
const VISIBLE: Record<ViewMode, number> = { mobile: 1, tablet: 2, desktop: 3 };

// Cards stepped per slide transition
const STEP: Record<ViewMode, number> = {
  mobile: 1,
  tablet: 2,   // full page pairs
  desktop: 1,  // one card at a time
};

// CSS gap between cards per mode (must match globals.css values)
const GAP: Record<ViewMode, number> = {
  mobile: 0,   // gap removed on mobile
  tablet: 20,  // gap: 20px on tablet
  desktop: 24, // default gap: 24px on desktop
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("desktop");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;

  // Detect view mode
  useEffect(() => {
    const check = () => setViewMode(getViewMode(window.innerWidth));
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Reset index on mode change
  const [prevViewMode, setPrevViewMode] = useState<ViewMode>("desktop");
  if (viewMode !== prevViewMode) {
    setIndex(0);
    setPrevViewMode(viewMode);
  }

  const visible = VISIBLE[viewMode];
  const step    = STEP[viewMode];
  const gap     = GAP[viewMode];

  // Max valid start index (so last group of `visible` cards is fully shown)
  const maxIndex = total - visible;

  // Number of dots = positions from 0 → maxIndex stepping by `step`
  const positions = Array.from(
    { length: Math.ceil((maxIndex + 1) / step) },
    (_, i) => i * step
  );
  // Which dot is active
  const activeDot = positions.findIndex(
    (pos, i) => index >= pos && (i === positions.length - 1 || index < positions[i + 1])
  );

  // Auto-slide — every mode
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + step > maxIndex ? 0 : prev + step));
    }, 4000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [viewMode, maxIndex, step]);

  // Build the CSS transform:
  //   Each card occupies (100/visible)% of the container width.
  //   With `gap` px between cards, each step must also shift by gap/visible per card.
  //   Per-step shift = (100/visible)% + (gap/visible)px
  //   For N steps: translateX(calc(-N * ((100/visible)% + (gap/visible)px)))
  const pct      = (100 / visible).toFixed(6);
  const gapPart  = (gap / visible).toFixed(6);
  const transform =
    index === 0
      ? "translateX(0)"
      : `translateX(calc(${-index} * (${pct}% + ${gapPart}px)))`;

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsInner}>

        <div className={styles.testimonialsHeader}>
          <Badge variant="news">Hear from HECS team</Badge>
          <h2>What Our Team Says</h2>
          <p>Hear directly from the people who make HECS great — stories of growth, purpose, and belonging.</p>
        </div>

        <div className={styles.testimonialsSliderWrap}>
          <div
            className={styles.testimonialsTrack}
            style={{ transform }}
          >
            {testimonials.map((t, i) => (
              <div className={styles.tcard} key={i}>

                <div className={styles.tcardTop}>
                  <div className={styles.tcardPerson}>
                    <div className={styles.tcardAvatar}>
                      <img src={t.avatar} alt={t.name} />
                    </div>
                    <div className={styles.tcardMeta}>
                      <span className={styles.tcardName}>{t.name}</span>
                      <span className={styles.tcardRole}>{t.role}</span>
                    </div>
                  </div>
                  <div className={styles.tcardQuoteMark}>&rdquo;</div>
                </div>

                <p className={styles.tcardBody}>{t.body}</p>

                <div className={styles.tcardStars}>
                  {[...Array(5)].map((_, s) => (
                    <i key={s} className="fa-solid fa-star"></i>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots — hidden on mobile, shown on tablet & desktop */}
        <div className={`${styles.testimonialsDots} ${viewMode === "mobile" ? styles.testimonialsDotsHidden : ""}`}>
          {positions.map((pos, i) => (
            <button
              key={i}
              className={`${styles.testimonialDot} ${activeDot === i ? styles.active : ""}`}
              onClick={() => setIndex(pos)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}




