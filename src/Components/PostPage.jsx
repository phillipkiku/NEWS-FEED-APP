import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function PostPage() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  async function fetchPost() {
    let apiUrl = `https://dummyjson.com/posts/${id}`;
    let response = await fetch(apiUrl);
    let postsData = await response.json();
    setPost(postsData);
    console.log(postsData);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <h1>Loading .....</h1>
      )}
    </div>
  );
}
export default PostPage;
