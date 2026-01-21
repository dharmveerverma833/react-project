import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


function LikeButton() {
   const [liked, setLiked] = useState(false);
   const [count, setCount] = useState(0);
let togleLiked = () =>{
    setLiked(!liked);
    setCount(count+1);

}

    
  return (<>
  <div>
     <h2>count = {count}</h2>
      <h1 onClick={togleLiked}>
        {/* {liked.toString()} */}
        {liked ? (<CiHeart  />):(<FaHeart  />)
        }
        </h1> 
    </div>
  </>)
};

export default LikeButton;


