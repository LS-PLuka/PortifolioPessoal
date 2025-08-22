import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#home"><h1>Pedro Luka</h1></a>
      <nav>
        <ul>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#cursos">Cursos</a></li>
          <li><a href="#diferenciais">Diferenciais</a></li>
        </ul>
      </nav>
    </header>
  );
}
