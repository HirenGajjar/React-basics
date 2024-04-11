import React from "react";

function LoadingSpinner() {
  return (
    <>
      <center>
        <h1 className="welmsg">
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </h1>
      </center>
    </>
  );
}

export default LoadingSpinner;
