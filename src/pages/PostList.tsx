import React from "react"
import Post from "../interfaces/Post"
import * as S from "../styles/PostList";

import posts from '../assets/posts.json';

const PostList = () => {
  return (
    <S.PostList>
        {posts && posts.map((post: Post) => (
          <S.Post
            key={post.id}
            id={post.id}
            className="usPost usBorder"
          >
            <span>{post.title}</span>
          </S.Post>
        ))}
    </S.PostList>
  )
}

export default PostList