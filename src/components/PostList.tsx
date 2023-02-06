import React from "react"
import "./PostList.css";

import Post from "../interfaces/Post"

const PostList = ({ posts }: any) => {
  return (
    <div className="usPostList usBorder">
      {posts.map((post: Post) => (
        <div
          key={post.id}
          id={post.id}
          className="usPost usBorder"
        >
          <span>{post.title}</span>
        </div>
      ))}
    </div>
  )
}

export default PostList