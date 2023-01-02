"use client";
import { Footer, Navbar } from "../components";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

const Page = () => {
  const [data, setData] = useState();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    axios
      .get(
        "https://opensheet.elk.sh/1whrsPZBjqKQGTBXLdThLTom8aeIcmjWk3Ej2gURyJOI/1"
      )
      .then((result) => {
        setData(result.data);
      });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-primary-black overflow-hidden relative ">
      <Navbar />
      <Hero />
      <a
        href="#navbar"
        className={`${
          scrollPosition < 450 && "hidden "
        } bg-primary-black fixed bottom-5 right-5 z-20 rounded-full w-[55px] h-[55px] ${
          scrollPosition > 450 && "flex"
        } items-center justify-center transition-[flex] duration-75 ease-in-out group`}
      >
        <img
          src="/arrow-down.svg"
          alt="arrow"
          className="rotate-180 group-hover:scale-125"
        />
      </a>
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore data={data} />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>

      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-05 z-0" />
        <Feedback />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
