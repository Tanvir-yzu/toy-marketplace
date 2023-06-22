import React from "react";
import Carosel from "./Carosel";
import Devider from "./Devider";
import GaralyHome from "./GaralyHome";
import Catagory from "./Catagory";
import HelmetPage from "../helmet/HelmetPage";


const Home = () => {
  return (
    <div>
      <HelmetPage title="Home Page" />
      <div>
        <Carosel></Carosel>
      </div>
      <Devider></Devider>
      <div>
        <GaralyHome/>
      </div>
      <div>
        <Catagory></Catagory>
      </div>
      <div className="grid  md:grid-cols-3 justify-center gap-8 my-6">
        <div className="text-white bg-cyan-500  flex justify-center gap-10 p-9 rounded-lg border-spacing-1">
          <img src="https://i.ibb.co/2dKsxLQ/truck.png" alt="" />
          <h1>
            <span className="text-2xl font-semibold">FREE SHIPPING </span>
            <br /> Lorem ipsum dolor sit amet <br /> consecte pulvinar
          </h1>
        </div>
        <div className="text-white bg-orange-500  flex justify-center gap-10 p-9 rounded-lg border-spacing-1">
          <img
            src="https://i.ibb.co/64pj3P4/roket.webp" alt=""
          />
          <h1>
            <span className="text-2xl font-semibold">EXPRESS SHIPPING </span>
            <br /> Lorem ipsum dolor sit amet <br /> consecte pulvinar
          </h1>
        </div>
        <div className="text-white bg-emerald-500 flex justify-center gap-10 p-9 rounded-lg border-spacing-1">
          <img
            src="https://i.ibb.co/NnDg4Z5/shild.webp" alt=""
          />
          <h1>
            <span className="text-2xl font-semibold">PAYMENT SECURED </span>
            <br /> Lorem ipsum dolor sit amet <br /> consecte pulvinar
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
