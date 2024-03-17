import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import woman image
import WomanImg from '../assets/img/banner-woman2.webp';
import {resumeLink} from '../data';


const Hero = () => {



  const openResume = () => {
    window.open(resumeLink, "_blank")
  }

  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey everyone, 
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
             I am Shubham Kumar Gautam <br /> Software Engineer
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              CS Student from Maharaja Agrasen Institute of Technology, currently in my 4th academic year 
            </p>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all' onClick={openResume}>
              My Resume
            </button>
          </div>
          <div className='hidden lg:flex flex-1'>
            {/* <img src={WomanImg} alt='' /> */}
          {/* <div className="calendly-inline-widget" data-url="https://calendly.com/skgautam393/30min" style={{minWidth:"320px",height:"700px"}}></div> */}
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
