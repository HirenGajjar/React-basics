import React, { useContext, useRef } from "react";
import { PostList } from "../Store/post-list-store";

function CreatePost() {
  const idEle = useRef();
  const titleEle = useRef();
  const tagsEle = useRef();
  const bodyEle = useRef();
  const reactionEle = useRef();
  const { addPost } = useContext(PostList);

  const handleSubmit = (e) => {
    e.preventDefault();
    const usersId = idEle.current.value;
    const postTitle = titleEle.current.value;
    const hashtag = tagsEle.current.value.split(" ");
    const bodyText = bodyEle.current.value;
    const allReaction = reactionEle.current.value;

    addPost(usersId, postTitle, bodyText, allReaction, hashtag);
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Enter Id
          </label>
          <input
            ref={idEle}
            type="text"
            className="form-control"
            id="id"
            placeholder="Enter Id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            ref={titleEle}
            type="text"
            className="form-control"
            id="title"
            placeholder="Type here"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post content
          </label>
          <textarea
            ref={bodyEle}
            rows={5}
            type="text"
            className="form-control"
            id="body"
            placeholder="Type here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Reactions
          </label>
          <input
            ref={reactionEle}
            type="text"
            className="form-control"
            id="reaction"
            placeholder="Any reactions"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            ref={tagsEle}
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter tags use space for separation"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;
