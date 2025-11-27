import ownerImg from "../assets/michael-salgado.jpg";
import rentariImg from "../assets/Rentari.PNG";
export default function Layout() {
  return (
    <div className="bg-slate-900 text-white [word-spacing:2px] h-100dvh relative">
      <i></i>
      <i></i>
      <i></i>
      <header className="py-10 px-4">
        <h1 className="text-4xl font-bold tracking-tight">Michael Salgado</h1>
        <h2 className="text-xl tracking-tight mt-3">Full-Stack Developer</h2>
        <img
          src={ownerImg}
          alt="Foto del creador del portfolio"
          className="rounded-full w-100 h-auto"
        />
        <i></i>
        <p className="mt-3 text-lg leading-normal text-gray-400">
          Enfocado en crear sitios web con atención en cada detalle, ofreciendo
          una experiencia digital única y creativa.
        </p>
        <ul>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
        </ul>
      </header>
      <main className="">
        <section>
          <h3>SOBRE MI</h3>
          <p>
            Soy un desarrollador creativo, con mucha imaginación a la hora de
            crear diseños para tanto los sitios web en los que he trabajado,
            como para mis propias webs / proyectos. Perfeccionista, cuido cada
            detalle, cada pixel importa. Constante, tanto en mis estudios como
            en el trabajo, todo tenía que salir bien, y si no era así, buscaba
            1000 maneras para que al final terminara saliendo bien. Me denomino
            como full-stack, aunque en mis trabajos he estado mas enfocado como
            frontend, algo que de manera autodidacta no me ha impedido
            desarrollar mis propios proyectos. He trabajado en distintos
            entornos de desarrollo, desde Ecommerce hasta gestorías, en los
            cuales siempre he querido desempeñar todo mi potencial. Además de la
            experiencia que puedo tener, estoy enfocado en seguir aprendiendo
            nuevas tecnologías y con gran ilusión de crecer mi carrera
            profesional.
          </p>
        </section>
        <section>
          <h3>EXPERIENCIA PROFESIONAL</h3>
          <p>2021-2024</p>
          <p>ALEMANY INFORMATICA SL</p>
          <p>PROGRAMADOR JUNIOR</p>
          <p>
            Experiencia trabajando con JSP, desarrollando funcionalidades
            multilenguaje mediante archivos de idioma y aplicando medidas de
            securización en variables y código cliente. Manejo profesional
            diario de JavaScript, HTML, CSS, Bootstrap, jQuery y JSON.
            Participación activa en múltiples tareas del backlog, incluyendo
            consultas y mantenimiento en PostgreSQL, además de garantizar que
            todas las webs fueran responsive y sin scroll.
          </p>
          <ul>
            <li>
              <span>JSP</span>
            </li>
            <li>
              <span>Javascript</span>
            </li>
            <li>
              <span>HTML</span>
            </li>
            <li>
              <span>CSS</span>
            </li>
            <li>
              <span>Bootstrap</span>
            </li>
            <li>
              <span>JQuery</span>
            </li>
            <li>
              <span>JSON</span>
            </li>
          </ul>
          <p>2021-2024</p>
          <p>ALEMANY INFORMATICA SL</p>
          <p>PROGRAMADOR JUNIOR</p>
          <p>
            Experiencia trabajando con JSP, desarrollando funcionalidades
            multilenguaje mediante archivos de idioma y aplicando medidas de
            securización en variables y código cliente. Manejo profesional
            diario de JavaScript, HTML, CSS, Bootstrap, jQuery y JSON.
            Participación activa en múltiples tareas del backlog, incluyendo
            consultas y mantenimiento en PostgreSQL, además de garantizar que
            todas las webs fueran responsive y sin scroll.
          </p>
          <ul>
            <li>
              <span>JSP</span>
            </li>
            <li>
              <span>PostgreSQL</span>
            </li>
            <li>
              <span>Javascript</span>
            </li>
            <li>
              <span>HTML</span>
            </li>
            <li>
              <span>CSS</span>
            </li>
            <li>
              <span>Bootstrap</span>
            </li>
            <li>
              <span>JQuery</span>
            </li>
            <li>
              <span>JSON</span>
            </li>
          </ul>
          <p>2020</p>
          <p>MASKOKOTAS</p>
          <p>PROGRAMADOR JUNIOR</p>
          <p>
            Experiencia enfocado en la parte frontend, y realizando también
            tareas de backend para obtener y gestionar datos. Participación en
            tareas del carrito de compra, incluyendo funcionalidades como el
            cambio de divisas. Participación activa en múltiples tareas del
            backlog, además de garantizar que todas las webs fueran responsive.
          </p>
          <ul>
            <li>
              <span>PHP</span>
            </li>
            <li>
              <span>MySQL</span>
            </li>
            <li>
              <span>Javascript</span>
            </li>
            <li>
              <span>HTML</span>
            </li>
            <li>
              <span>CSS</span>
            </li>
            <li>
              <span>Bootstrap</span>
            </li>
            <li>
              <span>JQuery</span>
            </li>
            <li>
              <span>JSON</span>
            </li>
          </ul>
          <p>2018-2019</p>
          <p>ADSTORM COMMUNICATION</p>
          <p>BECARIO</p>
          <p>
            Experiencia transformando mockups en sitios web funcionales
            implementándolos en WordPress con plantillas Divi. Desarrollo
            frontend basado en diseños proporcionados, asegurando precisión
            visual y funcionalidad completa.
          </p>
          <ul>
            <li>
              <span>WordPress</span>
            </li>
            <li>
              <span>Javascript</span>
            </li>
            <li>
              <span>HTML</span>
            </li>
            <li>
              <span>CSS</span>
            </li>
            <li>
              <span>Bootstrap</span>
            </li>
            <li>
              <span>JQuery</span>
            </li>
            <li>
              <span>JSON</span>
            </li>
          </ul>
        </section>
        <section>
          <a href="https://rentari.netlify.app/" target="_blank">
            <h3>PROJECTOS</h3>
            <p>
              Rentari <i></i>
            </p>
            <p>
              Web de renting de vehículos pensada tanto para empresas como para
              particulares, diseñada con el objetivo de ofrecer una experiencia
              moderna, segura y fácil de utilizar.
            </p>
            <img src={rentariImg} alt="Imagen de la web de Rentari" />
          </a>
        </section>
        <section>
          <h3>FORMACIÓN ACADÉMICA</h3>
          <p>2017-2019</p>
          <p>TÉCNICO SUPERIOR DESARROLLO DE APLICACIONES WEB</p>
          <p>IES Carles Vallbona, Granollers, Barcelona</p>
          <p>2015-2017</p>
          <p>TÉCNICO SISTEMAS MICROINFORMÁTICOS Y REDES</p>
          <p>IES Carles Vallbona, Granollers, Barcelona</p>
        </section>
        <section>
          <h3>CERTIFICACIONES</h3>
          <p>2021</p>
          <p>
            CODING BOOTCAMP DESARROLLADOR WEB FULL STACK JAVASCRIPT (258 HORAS)
          </p>
          <ul>
            <li>Las TIC.</li>
            <li>Tecnologías y diseño Web, HTML i CSS.</li>
            <li>Algoritmos y programas. Programación Backend.</li>
            <li>Almacenes de datos.</li>
            <li>Interacción con el usuario. FrontEnd con ReactJS.</li>
            <li>Proyecto. Integración FrontEnd/BackEnd.</li>
          </ul>
        </section>
        <section>
          <h3>Idiomas</h3>
          <div class="progress">
            <div class="progress-bar">
              <span class="progress-bar-text">Nativo</span>
            </div>
          </div>
          <span>Castellano</span>
          <div>
            <div class="progress-bar">
              <span class="progress-bar-text">Nativo</span>
            </div>
          </div>
          <span>Catalán</span>
          <div>
            <div class="progress-bar">
              <span class="progress-bar-text">Profesional</span>
            </div>
          </div>
          <span>Inglés</span>
        </section>
        <section>
          <h3>OTROS DATOS</h3>
          <ul>
            <li>
              <i></i>Incorporación immediata
            </li>
            <li>
              <i></i>Disponibilidad horária completa
            </li>
            <li>
              <i></i>Permiso de conducir B1
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Trabajemos juntos! El futuro es hoy...</p>
        <p>
          Diseñado libremente con <a href="https://es.react.dev/">React</a> y
          <a href="https://tailwindcss.com/">Tailwind CSS</a> y programado en
          <a href="https://code.visualstudio.com/">Visual Studio Code</a> por
          mí. Implementado con <a href="https://www.netlify.com/">Netlify</a>.
        </p>
      </footer>
    </div>
  );
}
