import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./swiper.css";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Navigation, Pagination]);
const Toys = () => {
  return (
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
            <h1>Dr. Caudi</h1>
            <p>+123456789</p>
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "100%" }}>
            <h2>Dr. Alexa</h2>
            <p>+123456789</p>
            <img
              src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "100%" }}>
            <h2>Dr. Sara</h2>
            <p>+123456789</p>
            <img
              src="https://img.freepik.com/free-photo/pleased-young-female-Dr.-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?size=338&ext=jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "100%" }}>
            <h2>Dr. Taylor</h2>
            <p>+123456789</p>
            <img
              src="https://image.freepik.com/free-photo/portrait-smiling-male-Dr._171337-1532.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "100%" }}>
            <h2>Dr. Elisabeth</h2>
            <p>+123456789</p>
            <img
              src="https://image.freepik.com/free-photo/smiling-young-blonde-female-Dr.-wearing-medical-robe-stethoscope-around-neck-writing-clipboard-with-pen_409827-310.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Toys;
