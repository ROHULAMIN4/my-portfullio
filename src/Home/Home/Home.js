import React from "react";
import Navbar from "../Navbar/Navbar";
import Navigaition from "../Navigation/Navigaition";
import Banner from "./banner/Banner";
import ContactForm, { ContactUs } from "./ContactForm/ContactForm";
import Description from "./Description/Description";
import Myproject from "./MyProject/Myproject";

import Skill from "./Skill/Skill";
import Test from "./Test/Test";

const Home = () => {
  return (
    <div>
      <Navigaition></Navigaition>
      <Banner></Banner>
      <Navbar></Navbar>
      <Description></Description>
      <Myproject></Myproject>
      {/* <Skill></Skill> */}
      <Test></Test>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
