import React from 'react';

// import img
import Image from '../assets/img/about.webp';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          {/* <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            // src={Image}
            alt=''
          /> */}
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Shubham Gautam
              </h2>
              <p className='mb-4 text-accent'>
                Software Engineer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              I am a CS student obsessed with the latest advancements going on in technologies. I’m familiar with a variety of programming languages, including C, Java, JavaScript, and frameworks like Node and Spring, but I’m always adding new skills to my repertoire. Along with this I am a Web Developer (MERN), currently learning and expanding my knowledge in Deep Learning and NLP. <br />
                <br />
              </p>
              <p className='mb-4 text-accent'>
               Interests
              </p>
              <hr className='mb-8 opacity-5' />
              <div>
                
              </div>
              
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
