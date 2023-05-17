import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles/styles';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants/index.js';

const Tech = () => {
  return (
    <>
      <motion.div className="text-center" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
        <span className="h-8"></span>
        <p className={styles.sectionSubText}>Including but not limited to...</p>
        <span className="h-8 mb-12"></span>
      </motion.div>
      <div className="  flex flex-row flex-wrap justify-center gap-10 p-12 ">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon.src} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
