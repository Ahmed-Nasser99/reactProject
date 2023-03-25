import { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Unknown from "./Unknown";

export default class App extends Component {
  render() {
    let router = createBrowserRouter([
      {
        path: "",
        element: <Layout></Layout>,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "portfolio",
            element: <Portfolio></Portfolio>,
          },
          {
            path: "about",
            element: <About></About>,
          },
          {
            path: "contact",
            element: <Contact></Contact>,
          },
          {
            path: "/*",
            element: <Unknown></Unknown>,
          },
        ],
      },
    ]);
    return <RouterProvider router={router} />;
  }
}
