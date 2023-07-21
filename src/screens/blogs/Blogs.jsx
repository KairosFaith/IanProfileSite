import React from "react";
import classNames from "classnames/bind";
import styles from "./Blogs.scss";
import "../scss/GlobalStyles.scss";
import Cover from "../../assets/cover.png";
import CustomButton from "../../shared/CustomButton";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player"

const Blogs = () => {
  const cx = classNames.bind(styles);

  const navigate = useNavigate();

  return (
    <div className={cx("music-container")}>
      <div className={cx("music-desc")}>I also enjoy creating music for game projects and hobbies. <br/> <br/>Check out my music on SoundCloud!</div>
      <div className={cx("music")}>
      <ReactPlayer
      width="24.5rem"
      height="24.5rem"
        url="https://soundcloud.com/detamine"
      /></div>

    </div>
  );
};

export default Blogs;
