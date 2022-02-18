import React from "react";

export default function Welcome(props) {
  return (
    <div className="welcome-wrapper">
      <div className="title">Quizzical</div>
      <div className="description">Some description if needed</div>
      <span
        className="start-button"
        onClick={() => {
          props.setShowQuiz(true);
        }}
      >
        Start quiz
      </span>
    </div>
  );
}
