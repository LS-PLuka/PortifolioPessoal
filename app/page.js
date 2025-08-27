import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import ProjectCard from "@/components/ProjectCard";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  const techs = [
    { image: "/java.png", title: "Java" },
    { image: "/js.png", title: "JavaScript" },
    { image: "/node.png", title: "Node.js" },
    { image: "/mysql.png", title: "MySQL" },
    { image: "/postgre.png", title: "PostgreSQL" },
    { image: "/mongodb.png", title: "MongoDB" },
    { image: "/github.png", title: "Git & GitHub" },
  ];

  const projects = [
    {
      image: "./primeiro.png",
      title: "Primeiro Projeto",
      description: "Descrição rápida do projeto.",
      link: "https://github.com/LS-PLuka/MoveON.git",
    },
    {
      image: "./outro.png",
      title: "Outro Projeto",
      description: "Descrição rápida do projeto.",
      link: "#",
    },
    {
      image: "./terceiro.png",
      title: "Terceiro",
      description: "Descrição rápida do projeto.",
      link: "#",
    },
  ];

  const courses = [
    {
      title: "Java do básico ao avançado",
      institution: "Geek University - Udemy",
      description:
        "Curso completo de Java com mais de 32h de conteúdo, cobrindo do básico ao avançado...",
      link: "https://www.udemy.com/course/programacao-em-java-essencial/?couponCode=MT180825G1",
    },
    {
      title: ".",
      institution: ".",
      description: ".",
      link: "#",
    },
    {
      title: ".",
      institution: ".",
      description: ".",
      link: "#",
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
        </div>
        <img className={styles.img_banner} src="/foto-perfil.jpg" alt="Banner" />
      </div>

      {/* Tecnologias */}
      <div className={styles.section_devs}>
        {techs.map((tech, index) => (
          <Card key={index} image={tech.image} title={tech.title} />
        ))}
      </div>

      <hr className={styles.hr} />

      {/* Projetos */}
      <div id="projetos" className={styles.projects}>
        <div className={styles.title_desc}>
          <h2>Projetos</h2>
          <p>Conheça meus projetos em destaque.</p>
        </div>
        <div className={styles.cards_container}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* Cursos */}
      <div id="cursos" className={styles.courses}>
        <h2>Cursos Digitais</h2>
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
