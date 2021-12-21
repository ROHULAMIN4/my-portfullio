import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./Tour.css";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
SwiperCore.use([EffectCoverflow, Navigation, Pagination]);
const Toys = () => {
  return (
    <>
      <div style={{ padding: "80px 0px" }}>
        <p sx={{ fontWeight: "bold", color: "#1BCBB9", mb: 8 }} variant="h5">
          Our Doctors
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
              <p>top banner 1</p>
              <img src="https://i.ibb.co/dKsyttV/tour1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h2>Navigaion</h2>
              <p>header section</p>
              <img src="https://i.ibb.co/9THRnjd/happytour.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h2>some tour place</h2>
              <p></p>
              <img src="https://i.ibb.co/sRLwQRS/tour2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h2>Refrsh</h2>
              <p>+</p>
              <img src="https://i.ibb.co/XjY4PR9/images-1.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h2>Top destinaton</h2>
              <p>+123456789</p>
              <img src="https://i.ibb.co/B4nn7Pc/tour5.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="about-website row">
        <h1 style={{ textAlign: "center", padding: "10px 0px" }}>
          About this website
        </h1>
        <div className="col-lg-6 col-sm-12">
          <p>
            __ World one of the best secure Athentication firebase used this
            website
          </p>
          <p>
            _Used technology:react-boostrap, MUI, firebase,heroku,mongodb,node
            express,html,css,react js etc
          </p>
          <p>__Admin can getr extra sume feture</p>
          <p>in this website You can booking any tour place easyly. </p>
          <p>
            __If you are a turish lover this website is so helpful for you an
            person add a tour vacasionoffer in this website people are easyly
            know to follow the website screen
          </p>
          <p>
            __many touris sport many tour pic and place also know for this
            website as a result u can decided to where place you want to tour
            first
          </p>
        </div>
        <div className="col-lg-6 col-sm-12 sirver-code">
          <a target="_blank" href="https://world-tour-agency.web.app/home">
            Live server
          </a>
          <a target="_blank" href="https://github.com/ROHULAMIN4/Happy-Tour">
            Github
          </a>
          <a
            target="_blank"
            href="https://github.com/ROHULAMIN4/happy-tour-server"
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
