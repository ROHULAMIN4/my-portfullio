import React from "react";
import Navigaition from "../Navigation/Navigaition";
import Banner from "./banner/Banner";
import ContactForm, { ContactUs } from "./ContactForm/ContactForm";
import Description from "./Description/Description";
import Myproject from "./MyProject/Myproject";

const Home = () => {
  return (
    <div>
      <Navigaition></Navigaition>
      <Banner></Banner>
      <Description></Description>
      <Myproject></Myproject>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
