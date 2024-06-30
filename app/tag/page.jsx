"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import PromptCard from "@components/PromptCard";

const PromptCardList = ({ data }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={() => {}}
          handleDelete={() => {}}
          handleEdit={() => {}}
        />
      ))}
    </div>
  );
};

const Tag = () => {
  const searchParams = useSearchParams();
  const tagName = searchParams.get("name");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/tag/${tagName}`);
      const data = await response.json();

      setPosts(data);
    };
    fetchPosts();
  }, [tagName]); // run the effect only when tagName changes

  return (
    <section className="feed">
      <h1 className="head_text text-left">
        <span className="blue_gradient">#{tagName}</span>
      </h1>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Tag;
