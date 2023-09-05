import React, { useState } from "react";

let count =  (Math.floor(Math.random()*10000)%199 + 49);

export default function LikeButton() {
    // Read a txt file and import cuurent like count
    const [numberOfLikes, setNumberOfLikes] = useState(count); // todo replace 300 with current like count variable
    const [likedAlready, setLikedAlready] = useState(false);
    const handleClick = () => {
        if(likedAlready){
            alert("Liked Already!!! thanks for liking my page.")
        }else
        {
            setNumberOfLikes(numberOfLikes + 1);
            setLikedAlready(true);
            count++;
        }
        // write file with new like count
    }
    return (
        <div>
            <button onClick={() => {  handleClick() }} style={{background:"#2df82d"}}>Like👍</button>
            <p style={{color: "white"}}>Likes: {numberOfLikes}</p>
        </div>
    )
}