
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Carosel = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div data-aos="fade-right" className="carousel w-full mt-11">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://cdn.shopify.com/s/files/1/0355/9715/6489/files/slideshow-2_62edaf3f-3d57-4d7b-b177-0af39b7a0914_1920x.jpg?v=1614319543"
          className="w-full rounded-xl"
        />
        <div  className="absolute rounded-xl flex items-center h-full left-0 top-0 ">
          <div className="text-green-700 space-y-7 pl-16 w-full">
            <h2 className="text-3xl font-bold">
              NEW ARRIVAL
            </h2>
            <h3  className="text-6xl font-bold">
                TOY <br />
                VILLAGE
            </h3>
            <p>
             WE ADD NEW ITEM INTO THE STOCK
            </p>
            
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-transparent ">
            ❮
          </a>
          <a href="#slide2" className="btn bg-transparent btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://cdn.shopify.com/s/files/1/0355/9715/6489/files/slideshow-1_987cf174-ec63-46e7-9d68-0e27e8c3ced2_1920x.jpg?v=1614319543"
          className="w-full rounded-xl"
        />
        <div  className="absolute rounded-xl flex items-center h-full left-0 top-0 ">
          <div className="text-violet-900 space-y-7 pl-16 w-full">
            <h2 className="text-3xl font-bold">
              NEW ARRIVAL
            </h2>
            <h3 className="text-6xl font-bold">
               EDUCATIONAL <br />TOYS
            </h3>
            <p className="text-green-700">
             WE ADD NEW ITEM INTO THE STOCK
            </p>
            
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn bg-transparent btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn bg-transparent btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
