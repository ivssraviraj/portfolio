import React, { useState } from "react";


export default function LikeButton() {
    // Read a txt file and import cuurent like count
    const [numberOfLikes, setNumberOfLikes] = useState(300); // replace 300 with current like count variable
    const handleClick = () => {
        setNumberOfLikes(numberOfLikes + 1);
        // write file with new like count
    }
    return (
        <div>
            <button onClick={() => {  handleClick() }}>Like</button>
            <p style={{color: "white"}}>Count: {numberOfLikes}</p>
        </div>
    )
}