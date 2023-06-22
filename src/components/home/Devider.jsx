import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Devider = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="flex w-full my-8">
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="grid  flex-grow card bg-base-300 rounded-box place-items-center">
          <img src="https://cdn.shopify.com/s/files/1/0355/9715/6489/files/banner-1_a6dba7b2-f47e-4529-b79b-f3334938b08f_1920x1920.png?v=1614319543" alt="" />
        </div>
        <div className="divider divider-horizontal"></div>
        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="grid flex-grow card bg-base-300 rounded-box place-items-center">
          <img src="https://cdn.shopify.com/s/files/1/0355/9715/6489/files/banner-2_e41a7417-f864-4e11-b016-83a29eddd8a3_1920x1920.png?v=1614319543" alt="" />
        </div>
      </div>
    );
};

export default Devider;