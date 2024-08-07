"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  const filterResults = (searchtext) => {
    const regex = new RegExp(searchtext, "i");
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    const searchtext = e.target.value;
    setSearchText(searchtext);
    // console.log("Search text = ", searchtext);

    if (searchtext === "") {
      setPosts(allPosts);
    } else {
      setPosts(filterResults(searchtext));
    }
  };

  const handleTagClick = (tag) => {
    setSearchText(tag);
    setPosts(filterResults(tag));
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await fetch("/api/prompt/");
      const data = await response.json();
      setPosts(data);
      setAllPosts(data);
    };
    fetchAllPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={posts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
