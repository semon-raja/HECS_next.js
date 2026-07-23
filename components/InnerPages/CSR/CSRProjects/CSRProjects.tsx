"use client";

import { useRef } from "react";
import { csrProjects } from "../../../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import styles from "./CSRProjects.module.css";
import "swiper/css";

export default function CSRProjects() {
  const swiperRef = useRef<SwiperType | null>(null);

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
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className={styles.navBtn}
              type="button"
              aria-label="Next slide"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className={styles.sliderViewport}>
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={28}
            slidesPerView={3}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[...csrProjects, ...csrProjects].map((project, index) => (
              <SwiperSlide key={index}>
                <article className={styles.projectCard}>
                  <div className={styles.projectImgWrap}>
                    <img src={project.image} alt={project.alt} />
                    <span className={styles.label}>CSR</span>
                  </div>
                  <h3>{project.title}</h3>
                  <a href="#" className={styles.keepReading}>
                    Keep Reading <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}