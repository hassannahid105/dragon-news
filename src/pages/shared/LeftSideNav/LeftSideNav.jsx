import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import moment from "moment";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">All Category</h2>
      <div className="flex flex-col gap-4">
        {categories.map((categorie) => (
          <NavLink
            key={categorie.id}
            className="block bg-gray-200 p-2 rounded-sm"
            to={`/categorie/${categorie.id}`}
          >
            {categorie.name}
          </NavLink>
        ))}
      </div>
      <div className="mt-12">
        <img src={img1} alt="" />
        <h3 className="font-semibold capitalize mt-2">
          Bayern slams Authorities over Delay to club world cup
        </h3>
        <div className="flex items-center justify-between p-3">
          <p>Sport</p>
          <p>{moment().format("MMMM Do YYYY")}</p>
        </div>
      </div>
      <div className="mt-12">
        <img src={img2} alt="" />
        <h3 className="font-semibold capitalize mt-2">
          Bayern slams Authorities over Delay to club world cup
        </h3>
        <div className="flex items-center justify-between p-3">
          <p>Sport</p>
          <p>{moment().format("MMMM Do YYYY")}</p>
        </div>
      </div>
      <div className="mt-12">
        <img src={img3} alt="" />
        <h3 className="font-semibold capitalize mt-2">
          Bayern slams Authorities over Delay to club world cup
        </h3>
        <div className="flex items-center justify-between p-3">
          <p>Sport</p>
          <p>{moment().format("MMMM Do YYYY")}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
