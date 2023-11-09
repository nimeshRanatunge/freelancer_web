import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import newRequest from "../../utils/newRequest";

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [`${item.userId}`],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
    // dont use {} in queryFn, it will not working
    //${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
  });
  //console.log(data);
  //console.log(item.shortTitle);
  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <h2 className="item_title">{item.shortTitle}</h2>
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong"
          ) : (
            <div className="user">
              <img src={data.img || "/img/man.png"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              LKR {item.price}
              <sup>.00</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
    
  );
};

export default GigCard;
