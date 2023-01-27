import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Software Developer",
          "Likes to solve problems",
          "Ping me if you have any...lol",
          "Likes to explore things",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
      }}
    />
  );
}

export default Type;
