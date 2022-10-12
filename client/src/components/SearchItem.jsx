import React from "react";
import { Link } from "react-router-dom";
import "../style/searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.img} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <span className="siPrice">${item.Price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/details/${item.id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;