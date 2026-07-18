"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import styles from "./Hero.module.css";
import Badge from "@/components/UI/Badge/Badge";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
    {
        image: "/images/hecsbanner1.jpg",
        badge: "● 27+ Years",
        title: "A Leader in the",
        description: "Water and Wastewater Treatment Industry",
        button: "Our Services",
    },
    {
        image: "/images/am.jpeg",
        badge: "● 500+ Projects",
        title: "Engineering Excellence",
        description: "Environmental Solutions",
        button: "Explore",
    },
    {
        image: "/images/hecsbanner2.jpg",
        badge: "● Trusted Partner",
        title: "Smart Water Management",
        description: "Innovative Water Treatment Systems",
        button: "Learn More",
    },
];

export default function Hero() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <section className={styles.hero}>

            {/* Custom nav arrows — sit above Swiper via z-index */}
            <button
                ref={prevRef}
                className={`${styles.heroNavBtn} ${styles.heroPrev}`}
                aria-label="Previous slide"
                suppressHydrationWarning
            >
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
                ref={nextRef}
                className={`${styles.heroNavBtn} ${styles.heroNext}`}
                aria-label="Next slide"
                suppressHydrationWarning
            >
                <i className="fa-solid fa-chevron-right"></i>
            </button>

            {/*
              "banner-slider" is kept as a plain global class because
              Swiper's own CSS selects .swiper and adjacent classes.
              Using a module class here would break Swiper's internal styling.
            */}
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                } as NavigationOptions}
                onSwiper={(swiper) => {
                    // Re-init navigation after refs are attached
                    const nav = swiper.params.navigation as NavigationOptions;
                    nav.prevEl = prevRef.current;
                    nav.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                pagination={{ clickable: true }}
                className="banner-slider"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.slide}>
                            <img src={slide.image} alt={slide.title} />
                            <div className={styles.overlayCard}>
                                <div className={styles.overlayText}>
                                    {/*
                                      .badge stays as a global class — it is
                                      shared with the About page hero and other
                                      sections and lives in globals.css.
                                    */}
                                    <Badge>{slide.badge}</Badge>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.description}</p>
                                </div>
                                <button className={styles.servicesBtn} suppressHydrationWarning>
                                    {slide.button}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
