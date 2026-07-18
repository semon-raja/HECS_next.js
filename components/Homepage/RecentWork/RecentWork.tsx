"use client";

import { useRef } from "react";
import { recentWorks } from "@/data/recentwork";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import Badge from "@/components/UI/Badge/Badge";
import styles from "./RecentWork.module.css";

import "swiper/css";

export default function RecentWork() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={styles.recentWorkSection}>
      <div className={styles.recentWorkHeader}>
        <div>
          <Badge variant="tag">Our Featured Projects in Action</Badge>
          <h2>Recent Work</h2>
        </div>

        <div className={styles.recentWorkNav}>
          <button
            className="recent-prev"
            onClick={() => swiperRef.current?.slidePrev()}
            suppressHydrationWarning
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>

          <button
            className="recent-next"
            onClick={() => swiperRef.current?.slideNext()}
            suppressHydrationWarning
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className={styles.recentWorkWrapper}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="recent-work-slider"
        >
          {recentWorks.map((work, index) => (
            <SwiperSlide key={index}>
              <div className={styles.workCard}>
                <div className={styles.workCardImgWrap}>
                  <img src={work.image} alt={work.title} />
                </div>

                <span className={styles.workLocation}>
                  <i className="fa-solid fa-location-dot"></i>
                  {work.location}
                </span>

                <div className={styles.workInfo}>
                  <span className={styles.workClient}>{work.client}</span>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
