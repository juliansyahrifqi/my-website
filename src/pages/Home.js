import React, { useEffect, useState } from 'react';

import ActivityCard from '../components/ActivityCard';
import ReadingList from '../components/ReadingList';
import LoadingRipple from "../components/LoadingRipple";
import BlogPostFeatured from "../components/BlogPostFeatured";

import { activities, readingLists } from '../utils/data';

import { blogQuery } from "../utils/blogQuery";

function Home() {  
  
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      const query = blogQuery("juliansyahrifqi");

      const response = await fetch("https://api.hashnode.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const responseData = await response.json();

      setRecentBlogs(responseData.data.user.publication.posts.slice(0, 1));
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <LoadingRipple />;

   return (
     <main className="Home">
       <article className="container mx-auto py-10">
         <section className="introduction-hero">
           <h1 className="text-6xl font-bold text-white text-center">
             Hi, I'm Rifqi Pratama
           </h1>

           <p className="text-xl text-center md:max-w-2xl text-gray-400 mx-auto font-normal mt-10">
             I'm a Informatics Engineering Student. Sometimes I work on projects
             from clients. Currently, I'm focus on learning about Frontend
             Development.
           </p>
         </section>

         <hr className="mt-10 w-64 mx-auto border border-gray-400" />

         <section className="activity">
           <h1 className="text-center text-3xl text-white font-medium mt-10">
             What I Do
           </h1>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
             {activities.map((activity, index) => (
               <ActivityCard activity={activity} key={index} />
             ))}
           </div>
         </section>

         <section className="recent-posts">
           <h1 className="text-center text-3xl text-white font-medium mt-14">
             Recent Post
           </h1>

           {recentBlogs.map((blog, index) => (
             <a href={`blog/${blog.slug}`}>
               <BlogPostFeatured blog={blog} key={index} />
             </a>
           ))}
         </section>

         <section className="reading-list">
           <h1 className="text-center text-3xl text-white font-medium mt-14">
             Reading List
           </h1>

           {readingLists.map((readingList, index) => (
             <ReadingList list={readingList} key={index} />
           ))}
         </section>
       </article>
     </main>
   );
}

export default Home;