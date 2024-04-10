import React from "react";

function WelcomeMessage({ onGetPostClick }) {
  return (
    <center className="welmsg">
      <p>Nothing to show</p>
      <button
        type="button"
        className="btn btn-primary "
        onClick={onGetPostClick}
      >
        Refresh
      </button>
    </center>
  );
}

export default WelcomeMessage;
