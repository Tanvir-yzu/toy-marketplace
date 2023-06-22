import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Blog from "./components/pages/Blog.jsx";
import Login from "./components/pages/Login.jsx";
import SignUp from "./components/pages/SignUp.jsx";
import AuthProvider from "./components/Provider/AuthProvider.jsx";
import MyToy from "./components/my-toy/MyToy.jsx";
import Error from "./components/error/Error.jsx";
import EditPage from "./components/my-toy/EditPage.jsx";
import Alltoy from "./components/AllToy/alltoy.jsx";
import ToyDetails from "./components/AllToy/ToyDetails.jsx";
import PrivetRouter from "./components/PrivetRoute/PrivetRouter.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/signUp',
        element : <SignUp></SignUp>
      },
      {
        path : '/details/:id',
        element :<PrivetRouter><ToyDetails></ToyDetails></PrivetRouter> ,
        loader: ({params}) => fetch (`https://hunter-toy-tanvir2023.vercel.app/alldata/${params.id}`)
      },
      {
        path : '/mytoy',
        element : <PrivetRouter><MyToy></MyToy></PrivetRouter>
      },
      {
        path : '/edit/:id',
        element : <EditPage></EditPage>,
        loader: ({params}) => fetch (`https://hunter-toy-tanvir2023.vercel.app/alldata/${params.id}`)
      },
      {
        path : '/alltoy',
        element : <PrivetRouter><Alltoy></Alltoy></PrivetRouter> ,
        loader : () => fetch("https://hunter-toy-tanvir2023.vercel.app/allData")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
     <AuthProvider> <RouterProvider router={router} /></AuthProvider>
    </React.StrictMode>
  </div>
);
