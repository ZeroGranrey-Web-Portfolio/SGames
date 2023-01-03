'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <motion.section id="about" className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 x-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Us" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
      >
        <span className="font-extrabold text-white">S-Games Studios </span>
        has been developing{' '}
        <span className="font-extrabold text-white">unique</span> games since
        2021. We create and publish our own games, being true{' '}
        <span className="font-extrabold text-white">experts</span> in every
        stage of full cycle game development and publishing. We are eager to
        share our expertise and offer proven solutions for releasing a project
        of any complexity.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="w-[18px] h-[28px] object-contain mt-[28px]"
        src="/arrow-down.svg"
        alt="arrow-down"
      />
    </motion.div>
  </motion.section>
);

export default About;
