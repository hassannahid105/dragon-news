import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
const NewsDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="card bg-base-100 shadow-xl border-2 border-green-300">
        <figure>
          <img src="" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {`comming: ${id}`}</h2>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
