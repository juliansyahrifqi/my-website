import React from 'react';

import { formatDate } from '../utils/utils';

function BlogPostFeatured({ blog }) {
  return (
    <div className="card w-full p-6 rounded-xl md:rounded-3xl hover:bg-[#1F2B42] transition ease-in-out hover:outline outline-2 outline-[#4A6597] duration-150 cursor-pointer mt-8">
      <div className="md:flex md:items-center">
        <img src={blog.coverImage} className="md:w-1/2 rounded-3xl" />

        <div className="information md:mx-5">
          <p className="mt-2 text-sm" style={{ color: "#B8BCC2" }}>
            {formatDate(blog.dateAdded)}
          </p>

          <h1 className="text-2xl md:text-2xl font-bold text-white md:leading-normal mt-4 ">
            {blog.title}
          </h1>

          <p
            className="text-sm md:text-base font-normal mt-4 md:mt-4 md:leading-7 md:tracking-wide"
            style={{ color: "#B8BCC2" }}
          >
            {blog.brief?.substring(0, 150)}...
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPostFeatured;