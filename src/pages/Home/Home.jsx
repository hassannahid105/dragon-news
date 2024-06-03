import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import MarqCom from "./MarqCom/MarqCom";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <MarqCom></MarqCom>
      <div className="grid grid-cols-4 gap-6 mt-10">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border">
          <p>comming</p>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
