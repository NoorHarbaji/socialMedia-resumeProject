import React from "react";

export const classStyle = name => {
  if (name === "faceBook") {
    return <i className="fab fa-facebook-f icon" />;
  } else if (name === "twitter") {
    return <i className="fab fa-twitter icon" />;
  } else if (name === "linkdin") {
    return <i className="fab fa-linkedin-in icon" />;
  } else if (name === "github") {
    return <i className="fab fa-github icon" />;
  } else if (name === "instgram") {
    return <i className="fab fa-instagram icon" />;
  } else if (name === "skype") {
    return <i className="fab fa-skype icon" />;
  }
};
