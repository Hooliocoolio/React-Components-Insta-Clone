//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from './Post';
import './Posts.css';
import dummyData from '../../dummy-data';
// pass the data from App.js down as props then map through the data
const PostsPage = () => {
  // set up state for your data
  const [postData] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {postData.map(p => (
        <Post post={p} />
      ))}
    </div>
  );
};

export default PostsPage;
