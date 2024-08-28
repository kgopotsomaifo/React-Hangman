import React, { useState } from "react";

function Help() {
  // Set the state for help to be displayed or not
  const [helpState, setHelpState] = useState(false);

  // Message with the rules and close button to update state
  const displayHelpToUser = (
    <div>
      <p>
        <u>
          {" "}
          <strong>Game play:</strong>{" "}
        </u>
      </p>
      <ul>
        <ol>The CPU generates a word or phrase.</ol>
        <br></br>
        <ol>
          NB: FOR WORDS OR PHRASES WITH DASHES: The CPU draws the equivalent
          dashes letters in the word.
        </ol>
        <br></br>
        <ol>
          The player has to guess one letter at a time.(inclusive of dashes)
        </ol>
        <br></br>
        <ol>
          If the player suggests a letter that occurs in the word, the CPU fills
          in the blanks with that letter in the right places.
        </ol>
        <br></br>
        <ol>Too many incorrect guesses results in a loss.</ol>
      </ul>
      <p>
        <u> Objective </u>
      </p>
      <ul>
        <ol>Guess the word or phrase before your man gets hung!</ol>
      </ul>
      <br />
      <button
        onClick={() => {
          setHelpState(false);
        }}
      >
        Close
      </button>
    </div>
  );

  // Button to colck if user needs help - display state true
  const doNotDisplayHelp = (
    <div>
      <button
        onClick={() => {
          setHelpState(true);
        }}
      >
        Help
      </button>
    </div>
  );

  // Return true or false based on state
  return <div>{helpState ? displayHelpToUser : doNotDisplayHelp}</div>;
}

export default Help;
