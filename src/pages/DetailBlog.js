import React, { useState, useEffect } from 'react';

import { blogDetailQuery } from "../utils/blogQuery";

import { useParams } from "react-router-dom";
import LoadingRipple from '../components/LoadingRipple';

import ReactMarkdown from "react-markdown";

import markdownStyle from "../markdown-style.module.css";

import { formatDate } from '../utils/utils';

function DetailBlog() {
    const [ detailBlog, setDetailBlog] = useState([]);
    const [loading, setLoading] = useState(false);

    let { slug }  = useParams();

    useEffect(() => {
        setLoading(true);

        async function fetchData() {
          const query = blogDetailQuery(slug, "juliansyahrifqi");

          const response = await fetch("https://api.hashnode.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
          });

          const responseData = await response.json();

          setDetailBlog(responseData.data.post);
          setLoading(false);
        }

        fetchData();
    }, []);

    if(loading) return <LoadingRipple /> 


  return (
    <article className="detail-blog-post py-10">
      <img src={detailBlog.coverImage} className="w-full mt-5" />

      <h1 class="text-4xl font-bold text-center text-white mt-10 mb-5">
        {detailBlog.title}
      </h1>

      <div className="flex justify-center mb-10">
        <p className="text-sm text-gray-400">
          {detailBlog.author?.name}
        </p>

        <span className="mx-4 text-gray-400">·</span>

        <p className="text-sm text-gray-400">{formatDate(detailBlog.dateAdded)}</p>
      </div>
      
      <ReactMarkdown
        className={markdownStyle.markdownStyle}
        children={detailBlog.contentMarkdown}
      />
    </article>
  );
}

export default DetailBlog;