import React, { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data.posts));
  }, []);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
