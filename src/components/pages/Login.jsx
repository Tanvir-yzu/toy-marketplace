import React, { useContext, useEffect, useState } from "react";
import GoogleLogin from "./GoogleLogin";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContex } from "../Provider/AuthProvider";
import HelmetPage from "../helmet/HelmetPage";

const Login = () => {
  const { loginUser } = useContext(AuthContex);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError(null);

    loginUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        form.reset();
        toast.success("Successfully Login!");

        setTimeout(() => {
          if (from) {
            navigate(from);
          } else {
            navigate("/");
          }
        }, 1000);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
  return (
    <div
      className="relative min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover rounded-lg  "
      style={{
        backgroundImage: `url("https://img.freepik.com/free-psd/maternity-baby-shower-background_23-2150237221.jpg?size=626&ext=jpg&ga=GA1.2.833240838.1684436305&semt=ais")`,
      }}
    >
      <HelmetPage title='Login Page' />
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="mt-2 items-center z-10">
        <form
          onSubmit={handleLogin}
          data-aos="flip-left"
          className="p-14 bg-white max-w-sm mx-auto rounded-xl shadow-xl overflow-hidden space-y-10"
        >
          <h2 className="text-4xl font-bold text-center text-indigo-600">
            Login
          </h2>
          <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
            <input
              type="email"
              name="email"
              placeholder="email "
              required
              className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent"
            />
          </div>
          <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent"
            />
          </div>
          <div className="block mt-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="ml-2 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></input>
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>
          <div className="flex items-center  justify-end mt-4">
            <a
              className="underline text-sm text-gray-600 hover:text-gray-900"
              href="#"
            >
              Forgot Password?
            </a>
            <input
              className="px-6 py-2 ml-4 font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-indigo-700 rounded-full text-white bg-indigo-600"
              type="submit"
              value="Log in"
            />
          </div>
          <div className="text-center mt-6">
            <p className="mt-4 text-sm">
              Dont have an account?
              <Link className="underline cursor-pointer" to="/SignUp">
                Sign up
              </Link>
            </p>
          </div>
          {error && <p className="text-center text-error mb-2">{error}</p>}
          <div className="divider">OR</div>

          <GoogleLogin />
        </form>
      </div>
    </div>
  );
};

export default Login;
