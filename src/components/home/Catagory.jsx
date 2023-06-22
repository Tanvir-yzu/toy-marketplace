import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PageCategory from "./PageCategory";


const Catagory = () => {
    const [jobs, setJob] = useState([]);
  const [activeTab, setActiveTab] = useState("car");
  useEffect(() => {
    fetch(`https://hunter-toy-tanvir2023.vercel.app/ByCategory/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setJob(result);
      });
  }, [activeTab]);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <Tabs>
      <TabList >
        <Tab  onClick={() => handleTabClick("car")}>Car Category</Tab>
        <Tab  onClick={() => handleTabClick("Dol")}>Dol Category</Tab>
        <Tab  onClick={() => handleTabClick("toy")}>Toy Category</Tab>
      </TabList>

      <TabPanel>
       
      <div className="md:flex gap-9" >
      {
        jobs?.map(job=> <PageCategory key={job?._id} job={job}></PageCategory>)
       }
      </div>
      </TabPanel>
      <TabPanel>
      <div className="md:flex gap-9" >
      {
        jobs?.map(job=> <PageCategory key={job?._id} job={job}></PageCategory>)
       }
      </div>
      </TabPanel>
      <TabPanel>
      <div className="md:flex gap-9" >
      {
        jobs?.map(job=> <PageCategory key={job?._id} job={job}></PageCategory>)
       }
      </div>
      </TabPanel>
    </Tabs>
  );
};

export default Catagory;
