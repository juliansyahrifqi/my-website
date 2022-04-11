import React from 'react';

import { formatDate } from '../utils/utils';

function BlogPost({ blog }) {
    return (
      <div className="card p-6 rounded-xl transition duration-150 ease-in hover:bg-[#1F2B42] hover:outline outline-2 outline-[#4A6597] duration-150 cursor-pointer h-full">
        <img src={blog.coverImage} className="w-full rounded-2xl" />

        <p className="mt-3 text-xs font-normal" style={{ color: "#B8BCC2" }}>
          {formatDate(blog.dateAdded)}
        </p>

        <h1 className="font-bold mt-4 text-md text-white">{blog.title}</h1>

        <p
          className="text-sm mt-3 font-normal md:leading-6 md:tracking-wide"
          style={{ color: "#B8BCC2" }}
        >
          {blog.brief.substring(0, 80)}...
        </p>
      </div>
    );
}

export default BlogPost;