import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowAllToy from "./ShowAllToy";
import HelmetPage from "../helmet/HelmetPage";

const Alltoy = () => {
  const data = useLoaderData([]);

  const searchData = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchId = form.search.value;
    console.log(searchId);
  };
  return (
    <div>
      <HelmetPage title='All Toy'  />
      <form onSubmit={searchData}>
        <div className="mb-3 text-center">
          <div className="relative mb-4 text-center justify-center md:ml-56 ml-36 flex w-1/2 flex-wrap items-stretch">
            <input
              type="search"
              name="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />

            <button
              className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="submit"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>

      <div className="grid md:grid-cols-3 grid-cols-1 justify-center items-center md:ml-20  gap-8">
        {data?.map((cart) => (
          <ShowAllToy key={cart._id} cart={cart}></ShowAllToy>
        ))}
      </div>
      <div className="btn-group w-44 grid grid-cols-2 ml-36 md:ml-96 my-7">
        <button className="btn btn-outline mx-2">Previous page</button>
        <button className="btn btn-outline">Next</button>
      </div>
    </div>
  );
};

export default Alltoy;
