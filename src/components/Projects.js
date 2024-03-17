import React, { useState, useEffect } from 'react';

// import data
import { github_link, projectsData } from '../data';
import { projectsNav } from '../data';
import { more } from '../data';

// import components
import Project from './Project';

const Projects = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* projects nav */}
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center text-black'>
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? 'active' : ''
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projects */}
      <section className='grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8'>
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
        <a href={github_link}>
        <div className='flex flex-col items-center text-center'>
              <div className='mb-8'>
                <img className='rounded-2xl' src={more.image} alt='' />
              </div>
              <p className='capitalize text-accent text-sm mb-3'>{more.category}</p>
              <br></br>
              <h3 className='text-2xl font-semibold capitalize mb-3'>{more.name}</h3>
              {/* <p className='text-base max-w-md'>
                {item.desc}
              </p> */}
            </div>
            </a>
      </section>
    </div>
  );
};

export default Projects;
