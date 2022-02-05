import React from 'react';

import Blog from '../components/Blog';
import BlogFeatured from '../components/BlogFeatured';

function Home() {
    return (
      <div className="blog-post" style={{ backgroundColor: "#0E182A" }}>
        <div className='blog-featured px-8 pt-8'>
            <BlogFeatured />
        </div> 

        <div className="grid grid-cols-3 gap-6 p-8">
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    );
}

export default Home;