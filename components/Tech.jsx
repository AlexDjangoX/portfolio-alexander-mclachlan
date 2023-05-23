import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { TypingText } from './TypingText';
import { styles } from '../styles/styles';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants/index.js';

const Tech = () => {
  return (
    <>
      <motion.div className="text-center min-h-full" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </motion.div>
      <motion.div initial="hidden" whileInView="show">
        <TypingText
          title="Tech stack, including but not limited to"
          textStyles={`${styles.heroSubText} text-secondary text-center italic font-light`}
        />
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
