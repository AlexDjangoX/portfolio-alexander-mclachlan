'use client';

import Image from 'next/image';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { TypingText } from './TypingText';

import { styles } from '../styles/styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full mx-auto">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 1.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-5 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image src={icon} alt={title} className="w-16, h-16 object-contain" />
          <h3 className="text-center text-white font-extralight text-[20]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div className="text-center" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>
      <motion.div initial="hidden" whileInView="show">
        <TypingText
          title="A short introduction"
          textStyles={`${styles.heroSubText} text-secondary text-center italic font-light`}
        />
      </motion.div>

      <motion.p
        variants={fadeIn('bottom', 'spring', 1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] tracking-wider mx-auto "
      >
        Graduated from Boolean UK Bootcamp. Skills gained include, but not
        limited to Vanilla JavaScript, React, Node, PostgreSQL and Prisma. With
        my passion for learning the Polish language and grammar, I've unlocked a
        unique opportunity to develop custom software solutions for a top-tier
        Polish language school.<br></br>
        <span className="h-8"></span>
        When I am not coding I am practicing meditation.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
