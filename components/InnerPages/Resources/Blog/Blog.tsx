import { blogs } from "@/data/blogs";
import styles from "./Blog.module.css";

export default function Blog() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogInner}>

        <div className={styles.blogTopRow}>
          <h2 className={styles.blogHeading}>Blogs</h2>
          <a href="#" className={styles.seeAllLink}>
            See Articles <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className={styles.blogGrid}>
          {blogs.map((blog, index) => (
            <div className={styles.blogCard} key={index}>
              <div className={styles.blogCardImg}>
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className={styles.blogCardBody}>
                <span className={styles.newsTag}>{blog.category}</span>
                <h3>{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
