import React from "react";
import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Service from "../components/home/Service";
import RunningMenu from "../components/home/RunningMenu";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <RunningMenu />
      <Contact />
    </>
  );
};

export default Home;
