import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./swiper.css";

import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";
SwiperCore.use([EffectCoverflow, Navigation, Pagination]);
const Toys = () => {
  return (
    <>
      <div style={{ padding: "80px 0px" }}>
        <p className="watch-heading" variant="h5">
          website tamplete
        </p>
        <Swiper
          navigation={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h1>Banner</h1>
              <p>Home page</p>
              <img src="https://i.ibb.co/WPrHVKq/smart-1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h2>Hot products</h2>
              <p>Home page</p>
              <img src="https://i.ibb.co/9y9W0cX/snmae-2.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h2>Best selles</h2>
              <p>Home page</p>
              <img src="https://i.ibb.co/5vJVR61/smart-3.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h2>Clinet review section</h2>
              <p>Admin and normal user have differnet facilities</p>
              <img src="https://i.ibb.co/tJXX6zj/smarrt-4.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h2>Location of company</h2>
              <p></p>
              <img src="https://i.ibb.co/J5Nr27V/smart-5.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h2>Totall order section add and delete</h2>
              <p></p>
              <img src="https://i.ibb.co/WySnKJ0/smart-6.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h2>Login google and email</h2>
              <p></p>
              <img src="https://i.ibb.co/CBcX9RP/smart-7.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h2>Register</h2>
              <p>Google and emil two differnet catogory</p>
              <img src="https://i.ibb.co/q1jF7xm/smart-8.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* website details */}
      <div className="about-website row">
        <h1 style={{ textAlign: "center", padding: "10px 0px" }}>
          About this website
        </h1>
        <div className="col-lg-6 col-sm-12">
          <p>
            __ World one of the best secure Athentication firebase used this
            website
          </p>
          <p>__this website client can get extra secure buy ans payment</p>
          <p>__Admin can getr extra sume feture</p>
          <p> __user can add his review </p>
          <p>__Admin can make a admin to privilize a extra power</p>
        </div>
        <div className="col-lg-6 col-sm-12 sirver-code">
          <a target="_blank" href="https://baby-toys-6042d.web.app/">
            Live server
          </a>
          <a target="_blank" href="https://github.com/ROHULAMIN4/Baby_toys">
            Github
          </a>
          <a
            target="_blank"
            href="https://github.com/ROHULAMIN4/bay-toys-server"
          >
            Github server
          </a>
          <Link to="/">home page </Link>
        </div>
      </div>
    </>
  );
};

export default Toys;
