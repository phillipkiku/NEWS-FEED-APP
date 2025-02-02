import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState(null);

  async function fetchPosts() {
    let apiUrl = "https://dummyjson.com/posts";
    let response = await fetch(apiUrl);
    let postsData = await response.json();
    setPosts(postsData.posts);
    console.log(postsData);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Lists of Posts</h1>
      <ul>
        {posts ? (
          posts.map((post) => (
            <li>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </div>
  );
}

export default Posts;
