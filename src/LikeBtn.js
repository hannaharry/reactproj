import React, { useState } from 'react';
import "./App.css";

function LikeBtn() {
   const [likes, setLikes] = useState(0);
   const [liked, setLiked] = useState(false);

   return (
	<button className={`like-btn ${liked ? 'liked' : ''}`} 
	onClick={() => {setLikes(likes + 1); setLiked(true);}}>
         {likes} Likes
      </button>
   );
}
export default LikeBtn;



