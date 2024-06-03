import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl border-2 border-green-300">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div>
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200)}{" "}
                <Link to={`/news/${_id}`} className="text-blue-400">
                  &nbsp; Read More....
                </Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
