import styles from "./CourseCard.module.css";

export default function CourseCard({ title, institution, description, link }) {
  return (
    <div className={styles.course_card}>
      <h3>{title}</h3>
      <span className={styles.institution}>{institution}</span>
      <p>{description}</p>
      <a href={link} target="_blank">Acessar Curso</a>
    </div>
  );
}
