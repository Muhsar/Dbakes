import React from "react";
import Footer from "./Footer";
import Contact from "./Contact";
import App from "./App";
import Menu from "./Menu";
import Services from "./Services";
import About from "./About";
import Home from "./Home";
import Helmet from "react-helmet"
export default function Landing2() {
  return (
    <>
<div className="font-sans antialiased text-gray-100 bg-gray-800">
      <main className="bg-gray-800">
        {/* <Home /> */}
        <About />
        {/* <Services /> */}
        {/* <Menu /> */}
        {/* <App /> */}
      {/* <Footer /> */}
        {/* <Contact /> */}
      </main>
</div>
    </>
  );
}
