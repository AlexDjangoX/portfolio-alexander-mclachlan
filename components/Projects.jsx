'use client';

import Image from 'next/image';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { TypingText } from './TypingText';

import { styles } from '../styles/styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  repo,
}) => {
  return (
    <>
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 1)}
        initial="hidden"
        whileInView="show"
      >
        <Tilt
          options={{ max: 25, scale: 1, speed: 450 }}
          className="bg-tertiary p-2 rounded-2xl sm:w-[500px] w-full"
        >
          <div className="relative aspect-w-16 aspect-h-9 w-[300px] h-[170px] xs:w-[400px] xs:h-[220px] sm:w-[490px] sm:h-[280px]  ">
            <Image
              src={image}
              alt={name}
              className="w-full h-full object-fit rounded-md"
            />
            <div className="absolute bottom-[-64px] right-[-4px] flex justify-end m-3 card-img_hover">
              {repo === 'Live link' && (
                <div
                  onClick={() => window.open(source_code_link, '_blank')}
                  className="black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <p className="font-extralight text-[12px]">{repo}</p>
                </div>
              )}
              {repo === 'Repo' && (
                <div
                  onClick={() => window.open(source_code_link, '_blank')}
                  className="black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <div>
                    <p className="font-extralight text-[12px]">
                      <Image
                        src={github}
                        alt={'Repo'}
                        className="w-full h-full object-fit rounded-md"
                      />
                    </p>
                    <p className="font-light">Repo</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-light text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div initial="hidden" whileInView="show" variants={textVariant(1)}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>
      <motion.div initial="hidden" whileInView="show">
        <TypingText
          title="Projects thus far"
          textStyles={`${styles.heroSubText} text-secondary text-center italic font-light`}
        />
      </motion.div>
      <div className="w-full flex">
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={fadeIn('up', 'spring', 0.5, 1)}
          className="mt-3 text-secondary text-[18px] font-extralight leading-[30px]"
        >
          The following projects have been built with the latest technologies.
          Thanks to JSMastery for inspiring tutorials. And thanks to ChatGPT, my
          pair-coding partner for elucidating some points I did not understand.
          My Boolean UK journey enabled me to create the Polish Conjugator
          full-stack application with React frontend and Node/Express backend. I
          have decided to use NextJS in all future projects.
        </motion.p>
      </div>

      <div className="mt-20  flex flex-wrap gap-8 align-center justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
