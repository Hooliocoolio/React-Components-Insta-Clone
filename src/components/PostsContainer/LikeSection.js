// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import likeFunc from './Post';

const LikeSection = props => {
  console.log(props);
  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} />
          <i className="far fa-heart" onClick={likeFunc} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
          <i className="far fa-comment" />

        </div>
      </div>
      <p className="like-number">

        {props.likes} likes</p>
    </div>
  )
};

// const LikeSection = (props) => {
//   console.log(props.likes)
//   const [props, setLikes] = useState(props.likes)

//   const incrementLikes = () => {
//     const setLikes = () => {
//       console.log(likes + 1);
//     }
//   }
//   return (
//     <div>
//       <div
//         className="like-section"
//         key="likes-icons-container"
//       >
//         <div className="like-section-wrapper">
//           <FontAwesomeIcon icon={faHeart} />
//           <i onClick={incrementLikes} className="far fa-heart" />
//         </div>
//         <div className="like-section-wrapper">
//       
//         </div>
//       </div>
//       <p className="like-number"> {likes} likes</p>
//     </div>
//   )
// };


export default LikeSection;