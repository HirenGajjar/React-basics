import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPost, action) => {
  let newPostList = currentPost;
  if (action.type === "DELETE_POST") {
    newPostList = currentPost.filter(
      (post) => post.id !== action.payload.postId
    );
  }

  return newPostList;
};

const addPost = () => {};

const deletePost = (postId, dispatchPostList) => {
  dispatchPostList({
    type: "DELETE_POST",
    payload: {
      postId,
    },
  });
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Title 1",
    body: "body 1",
    reaction: 0,
    userId: "user1",
    tags: ["tag1", "tag2"],
  },
  {
    id: "2",
    title: "Title 2",
    body: "body 2",
    reaction: 10,
    userId: "user2",
    tags: ["tag3", "tag4"],
  },
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost: (postId) => deletePost(postId, dispatchPostList),
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
