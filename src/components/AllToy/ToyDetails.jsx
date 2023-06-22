import React from "react";
import { useLoaderData } from "react-router-dom";
import HelmetPage from "../helmet/HelmetPage";

const ToyDetails = () => {
  const data = useLoaderData([]);
  return (
    <div>
      <HelmetPage title='Toy Details' />
      
      <div className="hero min-h-screen bg-base-200">
   
        <div className="hero-content flex-col lg:flex-row">
          <img src={data?.url} className="md:max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="md:text-3xl font-bold">Toy Name : {data?.toyname}</h1>
            <h1>Saller Name : {data?.seller}</h1>
            <h2>Quantity : {data?.quantity}</h2>
            <h3>Sun-catagory : {data?.catagory}</h3>
            <h2>Price : {data?.price} $</h2>
            <p>Rating : {data?.rating}</p>
            <p>Detail : {data?.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
