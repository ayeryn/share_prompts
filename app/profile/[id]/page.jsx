"use client";

import { useState, useEffect } from "react";
import Profile from "@components/profile";

const UserProfile = (obj) => {
  const userId = obj.params.id;
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserDetails = async () => {
      const response = await fetch(`/api/profile/${userId}`);
      const data = await response.json();

      setUser({
        username: data.username,
        email: data.email,
        image: data.image,
      });
    };

    if (userId) getUserDetails();
  }, [userId]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/profile/${userId}/posts`);
      const data = await response.json();

      setPosts(data);
    };
    if (userId) fetchPosts();
  }, [userId]);

  return (
    <Profile
      name={user.username}
      desc={`Welcome to ${user.username}'s profile page. Explore ${user.username}'s exceptional prompts and be inspired buy the power of their imagination.`}
      data={posts}
      handleDelete={() => {}}
      handleEdit={() => {}}
    />
  );
};

export default UserProfile;
