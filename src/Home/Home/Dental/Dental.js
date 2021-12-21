import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./Dental.css";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
SwiperCore.use([EffectCoverflow, Navigation, Pagination]);
const Dental = () => {
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
              <h1>Dental banner</h1>
              <p>navigation</p>
              <img src="https://i.ibb.co/7zN4rKv/dental1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h2>Navigation benner</h2>
              <p>banner 2</p>
              <img src="https://i.ibb.co/tqqhCj9/dental.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h2>Service name</h2>
              <p>Service page</p>
              <img src="https://i.ibb.co/CtgSsd3/dental4.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h2>Booking service</h2>
              <p>Where you can booking for your teeth service</p>
              <img src="https://i.ibb.co/vHLMkG6/dental2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ height: "100%" }}>
              <h2>Best service</h2>
              <p>Contact number here</p>
              <img src="https://i.ibb.co/LNHWD40/denatl3.png" alt="" />
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
            _Used technology:react-boostrap,firebase,heroku,mongodb,node
            express,html,css,react js etc
          </p>
          <p>__Admin can getr extra sume feture</p>
          <p>Any user can can provide his service review </p>
        </div>
        <div className="col-lg-6 col-sm-12 sirver-code">
          <a target="_blank" href="https://dental-helathcare.web.app/home">
            Live server
          </a>
          <a target="_blank" href="https://github.com/ROHULAMIN4/Jerin-Dental">
            Github
          </a>

          <Link to="/">home page </Link>
        </div>
      </div>
    </>
  );
};

export default Dental;
