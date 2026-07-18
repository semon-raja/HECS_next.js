import React from 'react';
import styles from './ProductGrid.module.css';

const products = [
  {
    img: "/product_img/service-1-img-1.png",
    title: "Turnkey Solutions",
    desc: "With over a decade of experience, HECS Turnkey Division specializes in end-to-end water and wastewater treatment solutions, having completed 120+ projects across India and Asia, while adopting the latest technologies to ensure full regulatory compliance.",
  },
  {
    img: "/product_img/service-2.png",
    title: "Consultancy Services",
    desc: "We offer personalized consultancy services in environmental management, specializing in areas such as Environmental Impact Assessment (EIA), Environmental Management Plans (EMP), MoEF project clearance, state PCB liaisoning, wastewater feasibility studies, risk analysis, disaster management, HAZOP, and environmental modeling.",
  },
  {
    img: "/product_img/service-3.png",
    title: "Laboratory Services",
    desc: "The HECS Laboratory Division provides advanced environmental, water, and food testing services from a state-of-the-art facility, accredited by NABL, FSSAI, and BIS, using cutting-edge technology and ensuring high standards of quality and precision.",
  },
  {
    img: "/product_img/service-4.png",
    title: "Operations & Maintenance (O&M) Services",
    desc: "With over a decade of experience, HECS Operation and Maintenance division is one of India's largest third-party providers, managing 60+ water and wastewater treatment plants, offering technical expertise, design consultation, and tailored O&M services for optimal plant performance.",
  },
  {
    img: "/product_img/service-5.png",
    title: "Packaged Sewage Treatment Plants",
    desc: "HECS is a pioneering leader in on-site sewage treatment, offering compact, eco-friendly, and cost-effective IoT-enabled Packaged Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP) powered by advanced technologies for efficient, sustainable wastewater management across residential, commercial, and industrial sectors.",
  },
  {
    img: "/product_img/service-6.png",
    title: "Education and Training Division",
    desc: "We at HECS believe that building a sustainable future starts with empowering people. Our Education and Training Division is dedicated to fostering a culture of continuous learning in environmental management, sustainability, and regulatory compliance.",
  },
  {
    img: "/product_img/service-7.png",
    title: "BI Marketing & Services",
    desc: "BI Marketing is the leading provider of comprehensive pumping and wastewater treatment solutions across India, with over 130 professionals and partnerships with top global brands like Grundfos, Sandpiper, Viking, OBL, Pulsafeeder, Mitsubishi, Fujimac, and Toyobo MC.",
  },
];

export default function ProductGrid() {
  return (
    <section className={styles.productCards}>
      <div className={styles.productGrid}>

        {products.map((product, index) => (
          <div className={styles.productCard} key={index}>

            <img src={product.img} alt={product.title} />

            <h3>{product.title}</h3>

            <p>{product.desc}</p>

            <div className={styles.cardFooter}>
              <div className={styles.plusBtn}>
                <i className="fa-solid fa-plus"></i>
              </div>

              <a href="#" className={styles.learnBtn}>
                <i className="fa-solid fa-arrow-right"></i>
                Learn More
              </a>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
