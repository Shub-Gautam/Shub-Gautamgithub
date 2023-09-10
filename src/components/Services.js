import React from 'react';

// import services data
import { services } from '../data';
import { education } from '../data';
import { certi } from '../data';
import { posres } from '../data';
import { awahor } from '../data';

const Services = () => {


  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-experience relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            Experience & certifications
          </h2>
          <p className='subtitle'>
        
          </p>
        </div>
        <p className='mb-4 text-xl font-medium text-accent'>
          Education
        </p>
        <hr className='mb-8 opacity-5' />
        {/* <div className='grid lg:grid-cols-4 gap-8'> */}
        {education.map((education, index) => {
          const { icon, name, description, duration, course, percentage } = education;
          return (
            <div>
              <div className='bg-secondary p-6 rounded-2xl' key={index}>
                <div className='grid lg:grid-cols-2'>
                  <div >
                    <h3 className='text-xl  mb-2'>{course}</h3>
                  </div>

                  <div className='grid place-items-end'>
                    <p className='mb-2'>{duration}</p>
                  </div>
                </div>

                <p className='mb-2'>{name}</p>
                <p className='mb-2'>{percentage}</p>
                <p>{description}</p>
              </div>
              <br></br>
            </div>

          );
        })}

        {/* </div> */}
        <div>

          <div className='grid lg:grid-cols-2 gap-8'>

            <div>
              <p className='mb-4 text-xl font-medium text-accent'>Work Ex</p>
              <hr className='mb-8 opacity-5' />
              {services.map((service, index) => {
                const { icon, name, description, company, path } = service;
                return (
                  <div>

                    <div className='bg-secondary p-6 rounded-2xl' key={index}>
                      {/* <div className='text-accent rounded-sm w-6 h-6 flex justify-center items-center mb-24 text-[28px]'>
                  <img
                    className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 '
                    src={icon}
                    alt=''
                  />
                </div> */}
                      <h3 className='text-xl  font-medium mb-2'>{company}</h3>
                      <h3 className='text-xl mb-2'>{name}</h3>
                      {description.map((desc, index) => {
                        return (
                          <div>
                            <p>{desc}</p>
                          </div>
                        )
                      })}

                      <br></br>
                      <div>
                        <p className='mb-4 text-accent'><a href={path} >Click here for internship details</a></p>
                      </div>

                    </div>

                    <br></br>

                  </div>
                );
              })}
            </div>
            <div>
              <div>
              <p className='mb-4 text-xl font-medium text-accent'>Certifications</p>
              <hr className='mb-8 opacity-5' />
              {/* Here comes certificates */}
              {certi.map((cer, index) => {
                const { name, link } = cer;
                return (
                  <div>
                    <br></br>
                    <br></br>
                    <p className='text-xl mb-2'>{name}</p>
                    <a className='m-4 text-accent' href={link}>Check here</a>
                  </div>
                )
              })}
              </div>
              <div>
                <br></br>
                <br></br>
                <p className='mb-4 text-xl font-medium text-accent'>Positions of responsibilities</p>
                <hr className='mb-8 opacity-5' />
                {/* Here comes certificates */}
                {posres.map((respos, index) => {
                  const { title, duration, desc } = respos;
                  return (
                    <div>
                      <div className='bg-secondary p-6 rounded-2xl' key={index}>
                        <div className='grid lg:grid-cols-2'>
                          <div >
                            <h3 className='text-xl  mb-2'>{title}</h3>
                          </div>

                          <div className='grid place-items-end'>
                            <p className='mb-2'>{duration}</p>
                          </div>
                        </div>

                        <p className='mb-2'>{desc}</p>
                      </div>
                    <br></br>
                </div>
                    )
                  })}
              </div>
              <div>
                
                <br></br>
                <p className='mb-4  text-xl font-medium text-accent'>Awards and Honors</p>
                <hr className='mb-8 opacity-5' />
                {/* Here comes certificates */}
                {awahor.map((cer, index) => {
                const { title, desc } = cer;
                return (
                  <div>
                    <p className='mb-2 font-medium'>{title}</p>
                    <p className='mb-2'>{desc}</p>
                    {/* <a className='m-4 text-accent' href={link}>Check here</a> */}
                  </div>
                )
              })}
              </div>
              

            </div>

          </div>


        </div>

      </div>

    </section>
  );
};

export default Services;
