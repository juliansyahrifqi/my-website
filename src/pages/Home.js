import React, { useState, useEffect } from 'react';

import Blog from '../components/Blog';
import BlogFeatured from '../components/BlogFeatured';

import { blogQuery } from '../utils/blogQuery';

function Home() {  
  const [blogs, setBlogs] = useState([]);
  const [blogFeatured, setBlogFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      const query = blogQuery('juliansyahrifqi');

      const response = await fetch(
        "https://api.hashnode.com", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        }
      );

      const responseData = await response.json();

      setBlogs(responseData.data.user);
      setBlogFeatured(responseData.data.user.publication.posts[0]);
      setLoading(false);
    }

    fetchData();
  }, []);


  if(loading) return (
    <div class="loading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );

  return (
    <div className="blog-post" style={{ backgroundColor: "#0E182A" }}>
      <div className="blog-featured px-8 pt-8">
        <BlogFeatured
          blog={blogFeatured}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {
          blogs.publication?.posts?.map((blog, index) => {
            return (
              <Blog key={index} blog={blog} />
            ); 
          })
        }
      </div>
    </div>
  );
}

export default Home;