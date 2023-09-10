import React, { useState } from 'react';
import { more } from '../data';

import githubimg from '../assets/img/gi.png';
import ytimg from '../assets/img/ytt.png';
import pptimg from '../assets/img/ppt.png';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='hovOverCard flex flex-col items-center relative z-0 text-center bg-secondary p-4 rounded-2xl'>
      {/* <div className='card-body' ></div> */}
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        {item.desc}
      </p>

      <div class=" card-body absolute inset-0 flex justify-center items-center z-10">
      <div>
        <a href={item.gitlink} target="_blank" rel="noopener noreferrer">
        <div>
          <img src={githubimg} ></img>
        </div>
        </a>
        <a href={item.ytlink} target="_blank" rel="noopener noreferrer">
        <div>
          <img src={ytimg} >
        </img>
        </div>
        </a>
        <a href={item.pptlink} target="_blank" rel="noopener noreferrer" >
        <div>
          <img src={pptimg} ></img>
        </div>
        </a>
        
      </div>
    </div>
    </div>
  );
};

export default Project;
