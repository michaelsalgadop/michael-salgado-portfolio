import { useContext } from "react";
import rentariImg from "../assets/Rentari.PNG";
import { NavbarContext } from "../context/NavbarContext";
import { DarkScreen } from "../components/DarkScreen";
import { Header } from "../components/Layout/Header";
import { About } from "../components/About";
import { Jumbotron } from "../components/Jumbotron";
import { Experiences } from "../components/Experiences";
import { Educations } from "../components/Educations";
export default function Layout() {
  const { openNavbar } = useContext(NavbarContext);
  return (
    <div className="bg-gray-900">
      {openNavbar && <DarkScreen />}
      <div className="mx-auto min-h-screen max-w-7xl">
        <Header />
        <main className="text-white space-y-10 lg:space-y-15">
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
                Web de renting de vehículos pensada tanto para empresas como
                para particulares, diseñada con el objetivo de ofrecer una
                experiencia moderna, segura y fácil de utilizar.
              </p>
              <img src={rentariImg} alt="Imagen de la web de Rentari" />
            </a>
          </section>
          <Educations />
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
    </div>
  );
}
