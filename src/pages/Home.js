import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Home() {
  let lat, long;
  if (navigator.geolocation) {
    // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(
      function (position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log(lat, long);
      },
      function (error) {
        console.error(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    );
  } else {
    alert("GPS를 지원하지 않습니다");
    return;
  }

  return (
    <div>
      <header>
        <div>
          <input placeholder="반려동물을 등록해 보세요."></input>
        </div>
        <div>
          <h3>오늘은 멍이요와 어디로 가실건가요.</h3>
          <div>
            <div className="callTaxi">
              <a href="/Calltaxi">
                <img alt="call taxi" src={require("../img/taxi.jpg")}></img>
              </a>
            </div>
            <div className="checkBook">
              <a href="/CheckBook">
                <img
                  alt="check book"
                  src={require("../img/calender.jpg")}
                ></img>
              </a>
            </div>
            <div className="banner">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 1000 }} // 추가
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <img
                    alt="이미지1"
                    className="banner-img"
                    src={require("../img/cat-horizental.jpg")}
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    alt="이미지2"
                    className="banner-img"
                    src={require("../img/cat-horizental.jpg")}
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    alt="이미지3"
                    className="banner-img"
                    src={require("../img/cat-horizental.jpg")}
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    alt="이미지4"
                    className="banner-img"
                    src={require("../img/cat-horizental.jpg")}
                  ></img>
                </SwiperSlide>
                ...
              </Swiper>
            </div>
          </div>
        </div>
      </header>
      <body>
        <div>
          <h3>멍이요 AI 추천</h3>
          <ql>
            <li className="ai-store">
              <h5>**와 비슷한 아이들이 좋아하는 스토어에요</h5>
              <div>
                <a href="/">
                  <img src={require("../img/cat-horizental.jpg")}></img>
                </a>
              </div>
            </li>
            <li className="ai-hospital">
              <h5>**와 비슷한 아이들이 좋아하는 병원이에요</h5>
              <div>
                <a href="/">
                  <img src={require("../img/cat-horizental.jpg")}></img>
                </a>
              </div>
            </li>
            <li className="ai-event-banner">
              <div className="banner">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, A11y]}
                  spaceBetween={50}
                  slidesPerView={2}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  autoplay={{ delay: 10 }} // 추가
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <img
                      alt="event1"
                      className="event-banner-img"
                      src={require("../img/cat-horizental.jpg")}
                    ></img>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="event1"
                      className="event-banner-img"
                      src={require("../img/cat-horizental.jpg")}
                    ></img>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="event1"
                      className="event-banner-img"
                      src={require("../img/cat-horizental.jpg")}
                    ></img>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="event1"
                      className="event-banner-img"
                      src={require("../img/cat-horizental.jpg")}
                    ></img>
                  </SwiperSlide>
                  ...
                </Swiper>
              </div>
            </li>
            <li className="ai-hairshop">
              <h5>**와 비슷한 아이들이 좋아하는 미용실이에요</h5>
              <div>
                <a href="/">
                  <img src={require("../img/cat-horizental.jpg")}></img>
                </a>
              </div>
            </li>
            <li className="ai-academy">
              <h5>**와 비슷한 아이들이 좋아하는 유치원이에요</h5>
              <div>
                <a href="/">
                  <img src={require("../img/cat-horizental.jpg")}></img>
                </a>
              </div>
            </li>
            <li className="ai-cafe">
              <h5>**와 비슷한 아이들이 좋아하는 카페에요</h5>
              <div>
                <a href="/">
                  <img src={require("../img/cat-horizental.jpg")}></img>
                </a>
              </div>
            </li>
          </ql>
        </div>
      </body>
    </div>
  );
}
export default Home;
