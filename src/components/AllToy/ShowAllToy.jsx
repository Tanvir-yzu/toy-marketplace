/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ShowAllToy = ({ cart }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img className="h-56" src={cart?.url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Toy Name : {cart?.toyname}</h2>
        <h2 className="card-title">Sub-Catagory: {cart?.catagory}</h2>
        <h2 className="card-title">Sallar Name : {cart?.seller}</h2>
        <h2 className="card-title">Price : {cart?.price}</h2>
        <h2 className="card-title">Quantity : {cart?.quantity}</h2>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/details/${cart?._id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowAllToy;
