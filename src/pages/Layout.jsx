import { useContext } from "react";
import { NavbarContext } from "../context/NavbarContext";
import { DarkScreen } from "../components/UI/DarkScreen";
import { Header } from "../components/Layout/Header";
import { Hero } from "../components/Sections/Hero/Hero";
import { About } from "../components/Sections/About/About";
import { Projects } from "../components/Sections/Project/Projects";
import { Experiences } from "../components/Sections/Experience/Experiences";
import { Educations } from "../components/Sections/Education/Educations";
import { Footer } from "../components/Layout/Footer/Footer";
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
        <Footer />
      </div>
    </div>
  );
}
