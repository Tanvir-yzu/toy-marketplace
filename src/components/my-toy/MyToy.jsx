import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
import AddToy from "./AddToy";
import ShowToy from "./ShowToy";
import { AuthContex } from "../Provider/AuthProvider";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../spnner/LoadingSpinner";
import HelmetPage from "../helmet/HelmetPage";

const MyToy = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  const { user } = useContext(AuthContex);
  const [datas, setdatas] = useState([]);
  // console.log(user.email);

  // const options = {method: 'GET'};
  const url = `https://hunter-toy-tanvir2023.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setdatas(response));
  }, [url]);

  // fetch(`http://localhost:5000/bookings?email=${user?.email}`, options)
  //   .then(response => response.json())
  //   .then(response =>setdatas(response))

  function refreshPage() {
    window.location.reload(false);
  }
  const handleBookingConfirm = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hunter-toy-tanvir2023.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = datas.filter((cof) => cof._id !== id);
              setdatas(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
        <HelmetPage title='My Toy' />
      <Tabs>
        <TabList>
          <Tab>
            <button onClick={refreshPage}>My Toys</button>
          </Tab>
          <Tab>Add Toy</Tab>
        </TabList>

        <TabPanel>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {datas?.map((data) => (
                  <ShowToy
                    key={data._id}
                    data={data}
                    handleBookingConfirm={handleBookingConfirm}
                  ></ShowToy>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <AddToy></AddToy>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MyToy;
