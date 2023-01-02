"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import {
  navVariants,
  zoomIn,
  slideIn,
  zoomOut,
  backgroundFadeIn,
} from "../utils/motion";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState(true);
  const rectangle = {
    active: { opacity: "1" },
    disabled: { right: "20%" },
  };
  return (
    <motion.section
      id="navbar"
      variants={navVariants}
      viewport={{ once: false, amount: 0.15 }}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01 "></div>
      <div
        className={`${styles.innerWidth} mx-auto flex-1/4 flex-row gap-8 justify-between `}
      >
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white flex flex-row">
          <img
            src="/S.png"
            alt="S"
            className="rounded-full w-[25px] h-[25px] opacity-100 mt-[1px]"
          />
          -Games Studio
        </h2>

        <motion.div
          variants={backgroundFadeIn("right", "spring", 0.2, 0.5, "100%", 400)}
          animate={active ? "hidden" : "show"}
          viewport={{ once: false, amount: 0.15 }}
          className="flex flex-row gap-5 items-center justify-start w-full bg-slate-900 rounded-[34px] pl-[15px] mt-[-50px]  float-right"
        >
          <div className="w-[30px]">
            <img
              src="/menu.svg"
              alt="menu"
              className="ml-[20px] w-[24px] h-[24px] object-contain cursor-pointer hover:h-[30px] hover:w-[30px] z-10"
              onClick={() => {
                setActive(!active);
              }}
            />
          </div>
          <div className="flex flex-row gap-40 items-center justify-evenly ml-20 ">
            <a
              className={`${styles.gradientText} cursor-pointer font-extrabold text-[22px] w-full`}
              href="#about"
            >
              About Us
            </a>
            <a
              className={`${styles.gradientText} cursor-pointer font-extrabold text-[22px] w-full`}
            >
              Catalog
            </a>
            <a
              className={`${styles.gradientText} cursor-pointer font-extrabold text-[22px] w-full`}
            >
              Contact
            </a>
            <div className="w-[100px] h-[50px] relative ml-[1000px]" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default Navbar;

{
  /* <motion.div
variants={slideIn("right", "tween", 1, 2)}
initial="hidden"
whileInView={!active ? "hidden" : "show"}
viewport={{ once: false, amount: 0 }}
className="flex flex-row items-start bg-gray-800 rounded-[30px] h-[120%]"
>
<div className="ml-10 w-full flex flew-row h-[70px] items-center justify-start gap-10">
  <p className="font-extrabold text-blue-400 text-[20px]">About</p>
  <p className="font-extrabold text-blue-400 text-[20px]">About</p>
  <p className="font-extrabold text-blue-400 text-[20px]">About</p>
</div>
</motion.div> */
}
