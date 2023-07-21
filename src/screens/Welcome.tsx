import * as React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./scss/Welcome.scss";
import "../screens/scss/GlobalStyles.scss";
import LinkedIn from "../assets/linkedin.png";
import SoundCloud from "../assets/soundcloud.png";
import Github from "../assets/github.png";
import Ian from "../assets/ian.png";
import IanHuman from "../assets/ian-human.png";
import { TypeAnimation } from "react-type-animation";
import UserAvatar from "react-user-avatar";

const Welcome = () => {
  const navigate = useNavigate();
  const cx = classNames.bind(styles);

  const renderTekkie = () => {
    return (
      <div className={cx("category")}>
        <TypeAnimation
          sequence={[
            "Lecturer at Mages Institute",
            2000,
            "Senior Drum Educator at MyDrumSchool",
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          speed={20}
          style={{ fontSize: "1.5em", display: "inline-block" }}
        />
      </div>
    );
  };

  const renderDesc = () => {
    return (
      <div className={cx("category-desc")}>
        I do what I do so that I can help others to succeed too! <br />
        Hello, my name is Ian. Growing up in school, I had struggles <br />
        learning and communicating with others. Although I <br />
        performed well in some subjects, I had difficulties with others.
        <br /> As a result, It took me a long while to find and hone my skill
        set. <br />
        You can see below that my education/career path was not as smooth <br />
        sailing as most would have it. <br /> <br />
        But at each step of my journey, I had mentors who believed in me <br />
        despite my mistakes and shortcomings, giving me the chance <br /> to
        persevere and eventually succeed. Because of my experience, <br /> I
        believe that anyone with passion and perseverance can fulfil <br />
        their potential if you could give them the proper guidance and <br />{" "}
        encouragement. That is why I have taken up teaching in all my <br />{" "}
        areas of expertise.
        <br />
      </div>
    );
  };

  const renderAvatar = () => {
    return (
      <div className={cx("category")}>
        <UserAvatar size="200" name="Ian Ngoh" src={IanHuman} />
      </div>
    );
  };

  const renderLinks = () => {
    return (
      <div className={cx("category-links")}>
        <a
          href="https://www.linkedin.com/in/rogue-producer/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={cx("category-links-img")}
            src={LinkedIn}
            alt="LinkedIn"
          ></img>
        </a>

        <a
          href="https://github.com/KairosFaith
"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ width: "5.625rem", height: "5.625rem", marginTop: "-0.1875rem" }}
            className={cx("category-links-img")}
            src={Github}
            alt="Github"
          ></img>
        </a>

        <a
          href="https://soundcloud.com/detamine"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ marginTop: "0.1875rem" }}
            className={cx("category-links-img")}
            src={SoundCloud}
            alt="SoundCloud"
          ></img>
        </a>
      </div>
    );
  };

  return (
    <div data-testid="welcome-container" className={cx("container")}>
      <div className={cx("welcome-text")}>IAN NGOH</div>
      {renderAvatar()}
      {renderTekkie()}
      {renderDesc()}
      {renderLinks()}
    </div>
  );
};

export default Welcome;
