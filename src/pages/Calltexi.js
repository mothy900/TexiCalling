import React from "react";
import CheckBook from "./CheckBook";

function Calltaxi() {
  return (
    <>
      <header>
        <div>예약하기</div>
        <div className="start-to-goal">
          <div>경유지</div>
          <div className="start-to-goal adr-start">
            <div>출발지</div>
            <div>
              <input placeholder="주소를 입력하세요"></input>
            </div>
          </div>
          <button> 화살표</button>
          <div className="start-to-goal adr-goal">
            <div>도착지</div>
            <div>
              <input placeholder="주소를 입력하세요"></input>
            </div>
          </div>
          <div className="scehdule-choice">
            <h5>원하시는 예약 일시를 선택해 주세요</h5>
            <button className="scehdule-button">선택하기</button>
          </div>
          <div className="petInformation">
            <h5>탑승할 펫을 선택하세요.</h5>
            <input type="checkbox" value={"루이"}></input>루이
            <input type="checkbox"></input>기타
            <h5>보호자님 같이 가실 건가요?</h5>
            <input
              type="radio"
              id="alone"
              name="accompany"
              value={"alone"}
            ></input>
            <label for="huey">혼자 가기 (반려동물만 탑승)</label>
            <input
              type="radio"
              id="guardian"
              name="accompany"
              value={"guardian"}
            ></input>
            <label for="huey">함께 가기 (반려동물과 동승)</label>
            <button>-</button>
            <input placeholder="1명"></input>
            <button>+</button>
            <h5>탑승시 짐이 있나요? </h5>
            <h6>차량배차 시 필요한 정보입니다!</h6>
          </div>
        </div>
      </header>
    </>
  );
}

export default Calltaxi;
