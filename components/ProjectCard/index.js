import styles from "./ProjectCard.module.css";

export default function ProjectCard({ image, title, description, link }) {
  return (
    <a href={link} target="_blank" className={styles.card_projects}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </a>
  );
}
