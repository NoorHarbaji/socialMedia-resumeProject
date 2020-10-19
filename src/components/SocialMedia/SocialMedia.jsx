import React from "react";
import "./style.css";
import { classStyle } from "./SocialListFun";

const SocialMedia = ({ socailList }) => {
  const socailMediaList = socailList.map((item) => (
    <li key={item.name}>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        {classStyle(item.name)}
      </a>
    </li>
  ));
  return <ul>{socailMediaList}</ul>;
};

export default SocialMedia;
