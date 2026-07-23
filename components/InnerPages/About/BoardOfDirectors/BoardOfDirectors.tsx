"use client";

import styles from "./BoardOfDirectors.module.css";

const directors = [
  {
    id: 1,
    name: "Dr. JR Moses",
    role: "CEO & MD",
    image: "/board_of_dir/dr-moses.jpg",
  },
  {
    id: 2,
    name: "Mr. Sangeeth Moses",
    role: "Director",
    image: "/board_of_dir/sangeeth-moses-rev.jpg",
  },
  {
    id: 3,
    name: "Dr. Rajkumar Samuel",
    role: "Director",
    image: "/board_of_dir/dr-rajkumar-samuel-rev.jpg",
  },
  {
    id: 4,
    name: "Mr. Abishek Moses",
    role: "Director",
    image: "/board_of_dir/abishek.jpg",
  },
];

export default function BoardOfDirectors() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Meet Our Board Of Directors</h2>
          <p>Leadership that drives our Vision</p>
        </div>

        <div className={styles.grid}>
          {directors.map((director) => (
            <div key={director.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={director.image} alt={director.name} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{director.name}</h3>
                <span className={styles.role}>{director.role}</span>
                <div className={styles.arrow}>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
