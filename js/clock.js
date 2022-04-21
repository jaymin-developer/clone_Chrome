const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
// 몇 초마다 함수 실행
// setInterval(함수, 시간)

// const date = new Date()
// date.getDate() 일자
// date.getDay() 요일
// date.getFullYear() 연도
// date.getHours() 시간
// date.getMinutes() 분
// date.getSeconds() 초

// string에 사용하는 .padStart(길이, "넣을 문자")
