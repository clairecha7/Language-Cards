import "./Header.css";
import logo from "./react.svg";

const Header = () => {
  return (
    <div className="logo">
      <img className="react-logo" src={logo} alt="react-logo" width="270px" />
    </div>
  );
};

export default Header;
