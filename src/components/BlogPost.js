import React from 'react';

import { formatDate } from '../utils/utils';

function BlogPost({ blog }) {
    return (
      <div className="card p-6 rounded-3xl transition duration-150 ease-in hover:bg-[#1F2B42] hover:outline outline-2 outline-[#4A6597] duration-150 cursor-pointer">
        <img src={blog.coverImage} className="w-full rounded-3xl" />

        <p className="mt-3 text-sm font-normal" style={{ color: "#B8BCC2" }}>
          {formatDate(blog.dateAdded)}
        </p>

        <h1 className="font-bold mt-4 text-xl text-white">{blog.title}</h1>

        <p
          className="text-sm mt-3 text-base font-normal"
          style={{ color: "#B8BCC2" }}
        >
          {blog.brief.substring(0, 150)}...
        </p>
      </div>
    );
}

export default BlogPost;