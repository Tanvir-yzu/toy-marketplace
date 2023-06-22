import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContex);
  const signOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{user ? <Link to="/alltoy">All Toys</Link> : " "}</li>
            <li>{user ? <Link to="/mytoy">My Toys</Link> : " "}</li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              {user ? (
                <Link onClick={signOut}>Log out</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className=" normal-case text-2xl md:text-4xl text-green-700 font-bold "
        >
          Toy Village
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{user ? <Link to="/alltoy">All Toys</Link> : " "}</li>
          <li>{user ? <Link to="/mytoy">My Toys</Link> : " "}</li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            {user ? (
              <Link onClick={signOut}>Log out</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={
                  user?.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                }
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <p className="justify-between">{user?.displayName}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
