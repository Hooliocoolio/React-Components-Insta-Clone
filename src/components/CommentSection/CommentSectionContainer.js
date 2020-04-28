// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  console.log("commentsProps", props.comments);

  const [comments] = useState(props.comments);
  return (
    <div>
      {comments.map((comment, index) => {
        return <Comment comment={comment} key={index} />;
      })}
      <CommentInput />
    </div>
  );
};
//Done


export default CommentSection;
