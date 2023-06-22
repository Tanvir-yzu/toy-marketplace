/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const PageCategory = ({ job }) => {
  return (
    <div
      data-aos="fade-right"
      className="card w-96 bg-base-100 shadow-xl my-5 "
    >
      <figure>
        <img className="h-56" src={job?.url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Toy Name : {job?.toyname}</h2>
        <h2 className="card-title">Sub-Catagory: {job?.catagory}</h2>
        <h2 className="card-title">Sallar Name : {job?.seller}</h2>
        <h2 className="card-title">Price : {job?.price}</h2>
        <h2 className="card-title">Quantity : {job?.quantity}</h2>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/details/${job?._id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageCategory;
