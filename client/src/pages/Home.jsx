import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import Exclusive0ffers from "../components/Exclusive0ffers";
import Testmonial from "../components/Testmonial";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = ({ theme }) => {
  return (
    <>
      <Hero />
      <FeaturedDestination theme={theme} />
      <Exclusive0ffers />
      <Testmonial />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
