'use client'

import React, { useState, useEffect } from 'react';
import { getRandomHeroActiveIndex } from "~/app/actions";
import { BlogPostApi } from "~/app/api/api-helpers";
import { HomePage } from "./home";

const HomePageServer = () => {
  const [activeIndex, setActiveIndex] = useState<any | null>(null);
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const index:any = await getRandomHeroActiveIndex();
        const fetchedPosts:any = await BlogPostApi.list({ limit: 3 });
        setActiveIndex(index);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  return <HomePage activeIndex={activeIndex} posts={posts} />;
};

export default HomePageServer;