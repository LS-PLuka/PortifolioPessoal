import styles from "./ProjectCard.module.css";

export default function ProjectCard({ title, description, link }) {
  return (
    <div className={styles.card_projects}>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={link} target="_blank" className={styles.button}>
        Repositório GitHub
      </a>
    </div>
  );
}
