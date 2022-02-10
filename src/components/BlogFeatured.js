import React from 'react';
import testImage from '../assets/image-1.jpg';
import userPhoto from '../assets/user.jpg';

function BlogFeatured({ category, date, title, description, imageSrc  }) {
  return (
    <div className="card w-full p-6 rounded-3xl transition duration-150 ease-in hover:bg-hover-card">
      <div className="md:flex items-stretch">
        <img src={imageSrc} className="md:w-1/2 rounded-3xl" />

        <div className="information md:mx-5">
          <p className="mt-5 text-sm md:text-base" style={{ color: "#B8BCC2" }}>
            {category} | {date}
          </p>

          <h1 className="text-2xl md:text-4xl font-bold text-white md:leading-normal mt-5 ">
            {title}
          </h1>

          <p
            className="text-sm md:text-base font-normal mt-4 md:mt-8 md:leading-7 md:tracking-wide"
            style={{ color: "#B8BCC2" }}
          >
            {description}
          </p>

          <div className="flex mt-6 md:mt-10 items-center">
            <img src={userPhoto} className="w-10 rounded-full" />
            <p className="text-sm md:text-md ml-3 text-white font-medium">
              Rifqi Pratama
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogFeatured;