import React from 'react';
import { more } from '../data';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center bg-secondary p-4 rounded-2xl'>
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        {item.desc}
      </p>
    </div>
  );
};

export default Project;
