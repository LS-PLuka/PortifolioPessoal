import styles from "./page.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  const projects = [
    {
      title: "Sistema Bancário Simples em Java",
      description: 
        "Este projeto é uma simulação de um sistema bancário desenvolvido em Java, com foco em conceitos de Programação Orientada a Objetos (POO), como encapsulamento, classes, métodos e instância de objetos.",
      link: "https://github.com/LS-PLuka/ContaBancaria.git",
    },
    {
      title: "MoveON",
      description: 
        "Rede social focada em atividades físicas e interação entre amigos, com funcionalidades de postagens, comentários, curtidas e chat em tempo real.",
      link: "https://github.com/LS-PLuka/MoveON.git",
    },
    {
      title: "Portifólio Pessoal",
      description: 
        "Meu portifólio pessoal criado com React e Next.js",
      link: "https://github.com/LS-PLuka/PortifolioPessoal.git",
    },
  ];

  const courses = [
    {
      title: "Informática para Internet",
      institution: "Instituto Federal de São Paulo - IFSP",
      description: 
        "Curso técnico em Informática para Internet, focado em criação de sites e aplicativos, utilizando linguagens de programação e frameworks modernos.",
      link: "https://www.ifspcaraguatatuba.edu.br/cursos/tecnico/tecnico-em-informatica-para-internet",
    },
    {
      title: "Java do básico ao avançado",
      institution: "Udemy",
      description:
        "Curso completo de Java do básico ao avançado, com mais de 32h de conteúdo, exercícios práticos e 3 projetos finais. Aprenda orientação a objetos, estruturas de dados, threads e técnicas essenciais para desenvolver qualquer tipo de software em Java.",
      link: "https://www.udemy.com/course/programacao-em-java-essencial/?couponCode=MT180825G1",
    },
  ];

  return (
    <div className={styles.main}>
      <Header />

      {/* Banner */}
      <div className={styles.banner}>
        <div className={styles.text_banner}>
          <h1 className={styles.title}>
            Olá, seja bem-vindo <br /> ao meu portfólio
          </h1>
          <h2 className={styles.subtitle}>
            Estudante de Desenvolvimento Backend
          </h2>

          {/* Botões sociais */}
          <div className={styles.socials}>
            <a href="https://github.com/LS-PLuka" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <FaGithub className={styles.icon} /> GitHub
            </a>
            <a href="https://linkedin.com/in/pedroluka-dev" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <FaLinkedin className={styles.icon} /> LinkedIn
            </a>
            <a href="https://instagram.com/ls_pedroluka_" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <FaInstagram className={styles.icon} /> Instagram
            </a>
          </div>
        </div>

        <img className={styles.img_banner} src="/foto-perfil.jpg" alt="Banner" />
      </div>

      <hr className={styles.hr} />

      {/* Projetos */}
      <div id="projetos" className={styles.projects}>
        <div className={styles.title_desc}>
          <h2>Projetos</h2>
        </div>
        <div className={styles.cards_container}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* Sobre Mim */}
      <section id="sobre" className={styles.about}>
        <h2 className={styles.about_title}>Sobre Mim</h2>

        <div className={styles.about_section}>
          <h3>Formação</h3>
          <p>Técnico em Informática para Internet pelo Instituto Federal de São Paulo (IFSP).</p>
        </div>

        <div className={styles.about_section}>
          <h3>Educação Atual</h3>
          <p>Cursando o último semestre de Técnico em Informática para Internet.</p>
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
            <span>APIs REST</span>
            <span>Postman</span>
            <span>Git & GitHub</span>
            <span>Métodologia Ágil (Scrum)</span>
          </div>
        </div>

        <div className={styles.about_section}>
          <h3>Idiomas</h3>
          <p>Inglês básico, atualmente estudando por conta própria.</p>
        </div>
      </section>

      {/* Formações */}
      <div id="cursos" className={styles.courses}>
        <h2>Formações</h2>
        
        <div className={styles.courses_container}>
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
