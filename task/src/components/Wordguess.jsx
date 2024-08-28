import React from "react";

//Display the word that the user must guess
function WordGuess(props) {
  let guessWordEasy = props.guessWordEasy;
  return (
    <div>
      {guessWordEasy.map((element, index) => {
        if (element.status === 0) {
          return <span key={index}> _ </span>;
        }
        return <span key={index}>{element.letter}</span>;
      })}
    </div>
  );
}

export default WordGuess;
