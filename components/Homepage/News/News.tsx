"use client";

import { news } from "@/data/news";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Badge from "@/components/UI/Badge/Badge";
import styles from "./News.module.css";

import "swiper/css";

export default function News() {
  return (
    <section className={styles.newsSection}>
      <div className={styles.newsHeader}>
        <div className={styles.newsIntro}>
          <Badge variant="news">Latest Updates</Badge>

          <h2>News &amp; Events</h2>

          <p>Explore the insights and trends shaping our industry</p>

          <a href="#" className={styles.seeAllLink}>
            See all articles
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className={styles.newsSliderWrapper}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            spaceBetween={26}
            slidesPerView={2}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            className="news-track"
          >
            {news.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.newsCard}>
                  <div className={styles.newsCardImg}>
                    <img src={item.image} alt={item.title} />

                    <span className={styles.newsZoomIcon}>
                      <i className="fa-solid fa-expand"></i>
                    </span>
                  </div>

                  <div className={styles.newsCardBody}>
                    <span className={styles.newsTag}>{item.category}</span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
