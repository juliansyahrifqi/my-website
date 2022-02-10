import React from 'react';

import Blog from '../components/Blog';
import BlogFeatured from '../components/BlogFeatured';

import imageFirst from '../assets/image-1.jpg';
import imageSecond from '../assets/image-2.jpg';

function Home() {
    return (
      <div className="blog-post" style={{ backgroundColor: "#0E182A" }}>
        <div className="blog-featured px-8 pt-8">
          <BlogFeatured
            category="UI Design"
            date="Kamis, 28 Januari 2020"
            title="Cara Membuat Glassmorphism di Figma"
            description="Singkatnya glassmorphism merupakan bahasa desain dengan menggunakan pendekatan depth (kedalaman bidang) dengan menggunakan transaparansi yang mirip dengan efek blur kaca. Efek glassmorphism tersebut dipertegas dengan menggunakan layer yang berlapis . . . ."
            imageSrc={imageFirst}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    );
}

export default Home;