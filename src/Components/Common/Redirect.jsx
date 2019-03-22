import React, { useEffect } from "react";

export default ({ url }) => {
  useEffect(() => {
    if (url) {
      console.log(`Redirecting to ${url}...`);
      setTimeout(() => {
        alert(`Perform Redirect: ${url}`);
      }, 3000);
    }
  });

  return (
    <div className="container text-center">
      <div className="fa-3x">
        <i className="fas fa-spinner fa-pulse" />
      </div>
      <div>
        Oops, looks like something went wrong. Give us a minute to fix it.
      </div>
      {url ? null : (
        <div>
          We couldnt determine where you came from.{" "}
          <a href="javascript:window.history.back()">Go Back</a>
        </div>
      )}
    </div>
  );
};
