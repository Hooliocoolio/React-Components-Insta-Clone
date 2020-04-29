// pass the data from App.js down as props then map through the data
//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from '../../dummy-data';

const PostsPage = () => {
  const [state] = useState(dummyData)
  console.log(state)
  return (
    <div className="posts-container-wrapper">

      {/* map through data here to return a Post and pass data as props to Post */}
      {state.map(post => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default PostsPage;










