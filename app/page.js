'use client';

import {
  About,
  Navbar,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Tech,
  Projects,
  StarsCanvas,
} from '../components/index.js';

const Page = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className=" bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Projects />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Page;
