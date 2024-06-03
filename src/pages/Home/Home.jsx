import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import MarqCom from "./MarqCom/MarqCom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <MarqCom></MarqCom>
      <div className="grid grid-cols-4 gap-6 mt-10">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2  space-y-10">
          {news.map((aNews) => (
            <NewsCard key={aNews._id} news={aNews}></NewsCard>
          ))}
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
