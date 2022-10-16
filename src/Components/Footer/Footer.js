import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { TiLocation } from "react-icons/ti";
import { GiHamburger } from "react-icons/gi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <GiHamburger size={60} />
        <p> BURGER HOUSE</p>
      </div>
      <div className="footer-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          recusandae delectus corporis excepturi labore, laudantium maiores
          doloremque deserunt nihil enim amet incidunt cupiditate numquam quas?
        </p>
        <div>
          <p>
            <TiLocation size={30} />
            MAIN ROAD, BUILDING NAME, COUNTRY
          </p>
          <p>
            <HiMail size={25} />
            INFO@COMPANYNAME.COM
          </p>
        </div>
      </div>

      <div className="footer-connect">
        <p>
          <AiOutlineCopyright size={20} /> COMPANY NAME 2022. ALL RIGHTS
          RESERVED
        </p>
        <div>
          <span>
            <BsInstagram size={20} />
          </span>
          <span>
            <BsFacebook size={20} />
          </span>
          <span>
            <BsTwitter size={20} />
          </span>
          <span>
            <BsWhatsapp size={20} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
