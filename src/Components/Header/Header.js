import { GiHamburger } from "react-icons/gi";
import { MdOutlineDeliveryDining } from "react-icons/md";
import burger from "../../images/burger-header.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <GiHamburger size={50} />
          <p> BURGER HOUSE</p>
        </div>
        <div className="nav-items">
          <div>
            <MdOutlineDeliveryDining size={30} />
            Express Delivery +1 234 567 890
          </div>
          <ul>
            <li>HOME</li>
            <li>MENU</li>
            <li>OUR STORY</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </nav>

      <div className="header-title">
        <div>
          <span>IT IS GOOD TIME FOR THE FREAT TASTE OF BURGERS</span>
          <h1>BURGER</h1>
          <h2>WEEK</h2>
        </div>
        <img src={burger} className="header-title-img" />
      </div>
    </header>
  );
};

export default Header;
