import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useWatchLocation from "../hooks/userCurrentPosition";

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
                <img src={require("../img/taxi.jpg")}></img>
              </a>
            </div>
            <div className="checkBook">
              <a href="/CheckBook">
                <img src={require("../img/calender.jpg")}></img>
              </a>
            </div>
            <div>
              <div className="mainBanner"></div>
              <botton className="leftArrow"></botton>
              <botton className="rightArrow"></botton>
              <a href="https://www.mungeyo.co.kr">
                <img src={require("../img/cat-horizental.jpg")}></img>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Home;
