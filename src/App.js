import React from "react";
import "./styles.css";
import SocialMedia from "./components/SocialMedia";
import { socailList } from "./components/SocialMedia/SocailList";

export default function App() {
  return <SocialMedia socailList={socailList} />;
}
