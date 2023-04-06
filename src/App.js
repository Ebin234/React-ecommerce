import React from "react";
import './App.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import store from "./utils/store";
import {Provider} from "react-redux";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Cart from "./Components/Cart";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: [<Header key={1}/>,<Body key={2}/>,<Footer key={3}/>]
    },
    {
      path:'/cart',
      element: [<Header key={1}/>,<Cart key={2}/>,<Footer key={3}/>]
    },
    {
      path:'/signup',
      element: <SignUp />
    },
    {
      path:'/login',
      element: <Login />
    }
  ])
  return (
    <div className="App">
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;
