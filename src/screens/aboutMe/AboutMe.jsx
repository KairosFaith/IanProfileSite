import React from "react";
import classNames from "classnames/bind";
import styles from "./AboutMe.scss";
import "../scss/GlobalStyles.scss";
import Darkest from "../../assets/darkest.png";
import Proto from "../../assets/proto.png";
import CustomButton from "../../shared/CustomButton";
import { useNavigate } from "react-router-dom";
import Cover from "../../assets/chinatown.gif";

const AboutMe = () => {
  const cx = classNames.bind(styles);

  const navigate = useNavigate();

  return (
    <div className={cx("container")}>
      <div className={cx("title-games")}>Chinatown Detective Agency</div>
      <img
        style={{ marginTop: "1.25rem", width: "31.25rem", height: "18.75rem" }}
        src={Cover}
        alt="Company Logo"
      ></img>

      <div className={cx("games-desc")}>
        Description: Chinatown Detective Agency is a cybernoir point and click
        adventure <br />
        blending stunning retro design with innovative mechanics. Play as Amira
        Darma, <br />
        an ex-cop who has just opened her own detective agency. Choose your
        clients, <br />
        travel around the world and solve dangerous cases using real world
        research.
        <br />
        <br />
        Developed By: General Interactive Co.
        <br />
        <br />
      </div>
      <a
        href="https://store.steampowered.com/app/1172190/Chinatown_Detective_Agency/"
        target="_blank"
        rel="noreferrer"
      >
        <CustomButton
          className="ian-btn"
          content="Available on Steam"
        ></CustomButton>
      </a>

      <div className={cx("title-games")}>Darkest Deliverance</div>
      <img
        style={{ marginTop: "1.25rem", width: "31.25rem", height: "18.75rem" }}
        src={Darkest}
        alt="Company Logo"
      ></img>

      <div className={cx("games-desc")}>
        Description: Rookies Awards 2021 Finalist
        <br />
        A mad king gone rogue has thrown a kingdom into strife. Once the most
        popular profession,
        <br /> Monster Hunters, have become a rarity. Play as one of three
        characters to pick up that mantle, <br />
        fight through hordes of foul demons, and take down the mad king!
        <br />
        <br />
        Developed By: MAGES Institute of Excellence
        <br />
        <br />
      </div>
      <a
        href="https://magesinstitute.itch.io/darkest-deliverance"
        target="_blank"
        rel="noreferrer"
      >
        <CustomButton
          className="ian-btn"
          content="Available on Itch Io"
        ></CustomButton>
      </a>


      <div className={cx("title-games")}>ProtoArrival</div>
      <img
        style={{ marginTop: "1.25rem", width: "31.25rem", height: "18.75rem" }}
        src={Proto}
        alt="Company Logo"
      ></img>

      <div className={cx("games-desc")}>
        Description: Warped here, teleported there. You find yourself assisting pioneers from an <br />
        advanced civilization.  Help them fix the teleporter before the world fragments into warped 
        <br />dust.  

Explore exotic historical places, and come up with solutions to crises.
        <br />
        <br />
        Developed By: MAGES Institute of Excellence
        <br />
        <br />
      </div>
      <a
        href="https://magesinstitute.itch.io/protoarrival"
        target="_blank"
        rel="noreferrer"
      >
        <CustomButton
          className="ian-btn"
          content="Available on Itch Io"
        ></CustomButton>
      </a>

    </div>
  );
};

export default AboutMe;
