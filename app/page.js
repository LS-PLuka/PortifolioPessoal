import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.banner}>
        <div className={styles.text_banner}>
          <h1 className={styles.title}>
            Olá, seja bem-vindo <br /> ao meu portfólio
          </h1>
          <h2 className={styles.subtitle}>Estudante de Desenvolvimento Backend</h2>

          <div className={styles.socialBanner}>
            <a href="https://github.com/LS-PLuka" target="_blank" className={styles.socialBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56
                  0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71
                  1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.11-.75.41-1.26.74-1.55-2.55-.29-5.23-1.28-5.23-5.7
                  0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.79 0c2.2-1.49 
                  3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.85 1.19 3.11 
                  0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 
                  0 .31.21.68.8.56C20.21 21.42 23.5 17.1 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/pedroluka-dev/" target="_blank" className={styles.socialBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 24 24">
                <path d="M19 0h-14C2.23 0 0 2.23 0 5v14c0 2.77 2.23 5 5 
                  5h14c2.77 0 5-2.23 5-5V5c0-2.77-2.23-5-5-5zm-11 19H5v-9h3v9zm-1.5-10.3c-.97 
                  0-1.75-.79-1.75-1.75S5.53 5.2 6.5 5.2 8.25 6 8.25 7s-.78 1.7-1.75 1.7zM20 
                  19h-3v-4.5c0-1.08-.02-2.47-1.5-2.47s-1.75 1.17-1.75 2.38V19h-3v-9h2.88v1.23h.04c.4-.75 
                  1.37-1.54 2.82-1.54 3.01 0 3.56 1.98 3.56 4.56V19z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a href="https://instagram.com/ls_pedroluka_" target="_blank" className={styles.socialBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 24 24">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 
                  5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 
                  5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 
                  3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 
                  3.5 0 0 0 16.5 4h-9zm4.5 3.5a5 5 0 1 1 0 10 
                  5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 
                  3 3 0 0 0 0-6zm5.25-2.75a1.25 1.25 0 1 1 0 2.5 
                  1.25 1.25 0 0 1 0-2.5z"/>
              </svg>
              <span>Instagram</span>
            </a>
          </div>
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
            <img src="./primeiro.png" alt="MoveON" />
            <h1>Primeiro Projeto</h1>
            <p>Descrição rápida do projeto.</p>
          </a>

          <a href="#" className={styles.card_projects}>
            <img src="./outro.png" alt="Outro" />
            <h1>Outro Projeto</h1>
            <p>Descrição rápida do projeto.</p>
          </a>

          <a href="#" className={styles.card_projects}>
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

      <div id="cursos" className={styles.courses}>
        <h2>Cursos Digitais</h2>
        
        <div className={styles.courses_container}>
          <div className={styles.course_card}>
            <h3>Java do básico ao avançado</h3>
            <span className={styles.institution}>Geek University - Udemy</span>
            <p>Curso completo de Java com mais de 32h de conteúdo, cobrindo do básico ao avançado. Inclui orientação a objetos, estruturas de dados, coleções, threads e criação de executáveis. São mais de 300 exercícios práticos e 3 projetos finais (Jogo, Mercado e Banco) para consolidar o aprendizado.</p>
            <a href="https://www.udemy.com/course/programacao-em-java-essencial/?couponCode=MT180825G1" target="_blank">Acessar Curso</a>
          </div>

          <div className={styles.course_card}>
            <h3>.</h3>
            <span className={styles.institution}>.</span>
            <p>.</p>
            <a href="#" target="_blank">Acessar Curso</a>
          </div>

          <div className={styles.course_card}>
            <h3>.</h3>
            <span className={styles.institution}>.</span>
            <p>.</p>
            <a href="#" target="_blank">Acessar Curso</a>
          </div>
        </div>
      </div>

      <div id="diferenciais" className={styles.hire_me}>
        <h2>Por que me contratar?</h2>
        
        <p>
          Busco constantemente crescer na área de tecnologia e evoluir como desenvolvedor.
        </p>
        <p>
          Sempre disposto a aprender novas tecnologias e me adaptar a diferentes desafios.
        </p>
        <p>
          Valorizo o trabalho em equipe e acredito que a colaboração gera os melhores resultados.
        </p>
        <p>
          Tenho boa comunicação, o que facilita a troca de ideias e a resolução de problemas.
        </p>
        <p>
          Comprometido em entregar soluções funcionais, práticas e bem estruturadas.
        </p>
        <p>
          Tenho disciplina, foco e organização no desenvolvimento de projetos.
        </p>
        <p>
          Encaro a tecnologia como uma ferramenta de impacto positivo para negócios e pessoas.
        </p>
      </div>

      <Footer />
    </div>
  );
}
