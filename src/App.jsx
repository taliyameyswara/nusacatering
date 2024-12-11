import "./index.css";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About";
import Service from "./components/Service";
import Menu from "./components/Menu";
import RunningMenu from "./components/RunningMenu";
import TestimonialSection from "./components/Testimonial";
import ContactSection from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Service />
      {/* <Menu /> */}
      <RunningMenu />
      {/* <TestimonialSection /> */}
      <ContactSection />
    </>
  );
}

export default App;
