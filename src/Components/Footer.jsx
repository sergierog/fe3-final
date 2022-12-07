import React from "react";
import DH from "../images/DH.png";
import Facebook from "../images/ico-facebook.png";
import Instagram from "../images/ico-instagram.png";
import Tiktok from "../images/ico-tiktok.png";
import Whatsapp from "../images/ico-whatsapp.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={DH} alt="DH-logo" />
      </div>
      <div className="icon">
        <img src={Facebook} alt="Facebook" className="icon" />
        <img src={Instagram} alt="Instagram" className="icon" />
        <img src={Tiktok} alt="Tiktok" className="icon" />
        <img src={Whatsapp} alt="Whatsapp" className="icon" />
      </div>

      {/* <div>
        <img src="../images/ico-facebook.png" alt="" />
      </div> */}
    </footer>
  );
};

export default Footer;
