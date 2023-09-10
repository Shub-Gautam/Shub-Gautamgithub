import React from 'react';
import { useEffect } from 'react';

// import brands data
import { brands } from '../data';

const Blog = () => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src =
      "https://widgets.sociablekit.com/medium-publication-feed/widget.js"

    script.async = true

    // script.crossOrigin = "anonymous"

    document.body.appendChild(script)

    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script)
    }
  }, [])
  return (
    <section className='section bg-primary' id='blogs'>
     <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-blog relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            Blogs
          </h2>
          {/* <p className='subtitle'>
            
          </p> */}
        </div>
        <div className='flex flex-col'>
        <div class='sk-ww-medium-publication-feed' data-embed-id='192266'></div>
        </div>
        
      </div>
    </section>
  );
};

export default Blog;