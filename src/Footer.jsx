import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const f = () => {
  return (
    <div className="footer">
      <span>Copyright &copy; 2022 AMAZON-CLONE. All rights reserved</span>
      <ul className="social__links">
        <li className="social__logo">
          <LinkedInIcon />
        </li>
        <li className="social__logo">
          <FacebookIcon />
        </li>
        <li className="social__logo">
          <InstagramIcon />
        </li>
      </ul>
    </div>
  );
};

export default f;
