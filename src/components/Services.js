import React from 'react';

// import services data
import { services } from '../data';

const Services = () => {


  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            My work experience
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
          {services.map((service, index) => {
            const { icon, name, description , company,path} = service;
            return (
              <a href={path}> 
              <div className='bg-secondary p-6 rounded-2xl' key={index}>
                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                  <img
                    className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 '
                    src={icon}
                    alt=''
                  />
                </div>
                <h3 className='text-xl  font-medium mb-2'>{company}</h3>
                <h3 className='text-xl font-medium mb-2'>{name}</h3>
                <p>{description}</p>
              </div>
            </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
