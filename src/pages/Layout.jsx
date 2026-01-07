import { useContext } from "react";
import { NavbarContext } from "../context/NavbarContext";
import { DarkScreen } from "../components/DarkScreen";
import { Header } from "../components/Layout/Header";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Experiences } from "../components/Experiences";
import { Educations } from "../components/Educations";
import { Projects } from "../components/Projects";
export default function Layout() {
  const { openNavbar } = useContext(NavbarContext);
  return (
    <div className="bg-gray-900">
      {openNavbar && <DarkScreen />}
      <div className="mx-auto min-h-screen max-w-7xl">
        <Header />
        <main className="text-white space-y-10 lg:space-y-15">
          <Hero />
          <About />
          <Projects />
          <Experiences />
          <Educations />
        </main>
        <footer className="p-4 text-white space-y-4 mt-20">
          <div className="flex flex-wrap text-center justify-center">
            <p className="text-2xl mr-1">Trabajemos juntos,</p>
            <p className="text-2xl text-tertiary">el futuro es AHORA!</p>
          </div>
          <p className="text-center">
            Diseñado libremente con
            <a href="https://es.react.dev/" className="text-tertiary mx-1">
              React
            </a>
            y
            <a href="https://tailwindcss.com/" className="text-tertiary mx-1">
              Tailwind CSS
            </a>
            y programado en
            <a
              href="https://code.visualstudio.com/"
              className="text-tertiary mx-1"
            >
              Visual Studio Code
            </a>
            por mí. Implementado con
            <a href="https://www.netlify.com/" className="text-tertiary ml-1">
              Netlify
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
