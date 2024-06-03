import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format("MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
