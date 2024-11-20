import Features from "./components/ui/Features";
import Hero from "./components/ui/Hero";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Tips from "./components/ui/Tips";
import AboutUs from "./components/ui/About";
import Contact from "./components/ui/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div>
        <Navbar />
      </div>
      <div className="">
        <Hero />
      </div>
      <div>
        <AboutUs />
        <Features />
        <Tips />
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
