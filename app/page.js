import styles from "./page.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.banner}>
        <div className={styles.text_banner}>
          <h1 className={styles.title}>Olá, seja bem-vindo <br></br> ao meu portfólio</h1>
          <h2 className={styles.subtitle}>Estudante de Desenvolvimento Backend</h2>
        </div>

        <img className={styles.img_banner} src="/foto-perfil.jpg" alt="Banner" />
      </div>

      <div className={styles.section_devs}>
        <div className={styles.card}>
          <img src="/java.png"></img>
          <span>Java</span>
        </div>

        <div className={styles.card}>
          <img src="/js.png"></img>
          <span>JavaScript</span>
        </div>

        <div className={styles.card}>
          <img src="/node.png"></img>
          <span>Node.js</span>
        </div>

        <div className={styles.card}>
          <img src="/mysql.png"></img>
          <span>MySQL</span>
        </div>

        <div className={styles.card}>
          <img src="/postgre.png"></img>
          <span>PostgreSQL</span>
        </div>

        <div className={styles.card}>
          <img src="/mongodb.png"></img>
          <span>MongoDB</span>
        </div>

        <div className={styles.card}>
          <img src="/github.png"></img>
          <span>Git & GitHub</span>
        </div>
      </div>

      <hr className={styles.hr}></hr>

      <div id="projetos" className={styles.projects}>
        <div className={styles.title_desc}>
          <h2>Projetos</h2>
          <p>Conheça meus projetos em destaque.</p>
        </div>

        <div className={styles.cards_container}>
          <a href="https://github.com/LS-PLuka/MoveON.git" className={styles.card_projects}>
            <img src="./moveon.png" alt="MoveON" />
            <h1>MoveON</h1>
            <p>Projeto Fullstack (HTML, CSS e JS).</p>
          </a>

          <a href="https://github.com/LS-PLuka/OutroProjeto.git" className={styles.card_projects}>
            <img src="./outro.png" alt="Outro" />
            <h1>Outro Projeto</h1>
            <p>Descrição rápida do projeto.</p>
          </a>

          <a href="https://github.com/LS-PLuka/Terceiro.git" className={styles.card_projects}>
            <img src="./terceiro.png" alt="Terceiro" />
            <h1>Terceiro</h1>
            <p>Descrição rápida do projeto.</p>
          </a>
        </div>
      </div>

      <div className={styles.about}>
        <h2>Sobre Mim</h2>

        <div id="sobre" className={styles.about_section}>
          <h3>Formação</h3>
          <p>Técnico em Informática para Internet pelo Instituto Federal de São Paulo (IFSP).</p>
        </div>

        <div className={styles.about_section}>
          <h3>Educação Atual</h3>
          <p>Cursando o primeiro semestre de Análise e Desenvolvimento de Sistemas.</p>
        </div>

        <div className={styles.about_section}>
          <h3>Objetivo</h3>
          <p>Busco oportunidades de estágio e posições júnior, especialmente na área de desenvolvimento backend.</p>
        </div>

        <div className={styles.about_section}>
          <h3>Habilidades</h3>
          <div className={styles.skills_list}>
            <span>Java</span>
            <span>SpringBoot</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MySQL</span>
            <span>PostgreSQL</span>
            <span>MongoDB</span>
            <span>Postman</span>
            <span>Git & GitHub</span>
            <span>Métodologia Ágil (Scrum)</span>
          </div>
        </div>

        <div className={styles.about_section}>
          <h3>Idiomas</h3>
          <p>Inglês básico, atualmente estudando por conta própria.</p>
        </div>
      </div>
    </div>
  );
}
