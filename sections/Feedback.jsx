'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import TeamMember from '../components/TeamMember';
import { TypingText } from '../components';
import { fadeIn } from '../utils/motion';
import { members } from '../constants';

const Feedback = () => (
  <section id="team" className={`${styles.paddings} relative z-10`}>

    <motion.div
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className="mx-auto my-5 flex lg:flex-row flex-col flex-wrap justify-center gap-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div className="flex items-center justify-center w-full">
        <TypingText title="| Our Team" textStyles="text-center" />

      </motion.div>
      {members.map((info, index) => (<TeamMember key={index} {...info} delay={0.1 * index} />))}
    </motion.div>
  </section>
);

export default Feedback;
