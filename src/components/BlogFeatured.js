import React from 'react';
import testImage from '../assets/image-1.jpg';
import userPhoto from '../assets/user.jpg';

function BlogFeatured() {
    return (
      <div className="card w-full p-6 rounded-3xl">
        <div className="flex items-stretch">
          <img src={testImage} className="w-1/2 rounded-3xl" />

          <div className="information mx-5">
            <p className="mt-5" style={{ color: "#B8BCC2" }}>
              UI Design | Kamis, 28 Januari 2020
            </p>

            <h1 className="text-4xl font-bold text-white leading-normal mt-5">
              Cara Membuat Glassmorphism di Figma
            </h1>

            <p
              className="font-normal mt-8 leading-7 tracking-wide"
              style={{ color: "#B8BCC2" }}
            >
              Singkatnya glassmorphism merupakan bahasa desain dengan
              menggunakan pendekatan depth (kedalaman bidang) dengan menggunakan
              transaparansi yang mirip dengan efek blur kaca. Efek glassmorphism
              tersebut dipertegas dengan menggunakan layer yang berlapis . . . .
            </p>

            <div className="flex mt-10 items-center">
              <img src={userPhoto} className="w-10 rounded-full" />
              <p className="text-md ml-3 font-medium text-white">
                Rifqi Pratama
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BlogFeatured;