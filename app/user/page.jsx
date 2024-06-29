"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "@components/profile";

const UserProfile = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUserDetails = async () => {
      const response = await fetch(`/api/users/${userId}`);
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
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();

      setPosts(data);
    };
    if (userId) fetchPosts();
  }, [userId]);

  return (
    <Profile
      name="User"
      desc={`${user.username}'s profile page`}
      data={posts}
      handleDelete={() => {}}
      handleEdit={() => {}}
    />
  );
};

export default UserProfile;
