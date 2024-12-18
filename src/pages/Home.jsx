import React from "react";
import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Package from "../components/home/Package";
import RunningMenu from "../components/home/RunningMenu";
import Contact from "../components/home/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Package />
      <RunningMenu />
      <Contact />
    </>
  );
};

export default Home;
