import { About } from "../components/About";
import { EducationCertification } from "../components/EducationCertification";
import { Jumbotron } from "../components/Jumbotron";
import { Footer } from "../components/Layout/Footer";
import { Header } from "../components/Layout/Header";
import { Social } from "../components/Social";

export default function Layout() {
  return (
    <div className="app-container bg-black text-white font-noto-sans">
      <Header />
      <main className="container mx-auto px-4 space-y-16">
        <Jumbotron />
        <About />
        <EducationCertification />
      </main>
      <Footer />
    </div>
  );
}
