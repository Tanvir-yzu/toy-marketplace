/* eslint-disable react/prop-types */
import React from "react";
import { Helmet } from "react-helmet";

const HelmetPage = ({title}) => {
  return (
    <Helmet>
      
      <title>{title}</title>
      
    </Helmet>
  );
};

export default HelmetPage;
