import React, { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { PostList } from "../Store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card post-card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}{" "}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <TiDeleteOutline />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
          <div className="alert alert-danger reactions" role="alert">
            Total Reactions :- {post.reactions}
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
