"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { TypingText, ExploreCard, TitleText } from "../components";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";
const Explore = ({ data }) => {
  const [active, setActive] = useState(false);
  return (
    <section className={`${styles.paddings} `} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose The World Tou Want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className=" border-x-2 border-slate-800 rounded-sm mt-[50px] flex flex-shrink-0 lg:flex-row flex-col min-h-[70vh] gap-6 overflow-scroll scroll-p-[30%] ">
          {data?.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={(id) => setActive(id)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
