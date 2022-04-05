import React from 'react';

import { formatDate } from '../utils/utils';

function Blog({ blog }) {
    return (
      <div className="card p-6 rounded-3xl transition duration-150 ease-in hover:bg-hover-card transition ease-in-out hover:outline outline-2 outline-hover-border duration-150 cursor-pointer">
        <img src={blog.coverImage} className="w-full rounded-3xl" />

        <p className="mt-3 text-sm font-normal" style={{ color: "#B8BCC2" }}>
          { formatDate(blog.dateAdded)}
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

export default Blog;