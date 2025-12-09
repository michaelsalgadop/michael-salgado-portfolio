import { useContext } from "react";
import rentariImg from "../assets/Rentari.PNG";
import { NavbarContext } from "../context/NavbarContext";
import { DarkScreen } from "../components/DarkScreen";
import { Header } from "../components/Layout/Header";
import { About } from "../components/About";
import { Jumbotron } from "../components/Jumbotron";
import { Experiences } from "../components/Experiences";
export default function Layout() {
  const { openNavbar } = useContext(NavbarContext);
  return (
    <div className="bg-gray-900">
      {openNavbar && <DarkScreen />}
      <Header />
      <main className="text-white">
        <Jumbotron />
        <About />
        <Experiences />
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
          <p>2017-</p>
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
          <div className="progress">
            <div className="progress-bar">
              <span className="progress-bar-text">Nativo</span>
            </div>
          </div>
          <span>Castellano</span>
          <div>
            <div className="progress-bar">
              <span className="progress-bar-text">Nativo</span>
            </div>
          </div>
          <span>Catalán</span>
          <div>
            <div className="progress-bar">
              <span className="progress-bar-text">Profesional</span>
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
