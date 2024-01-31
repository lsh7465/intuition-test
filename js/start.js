// main -> qna
const mainPage = document.querySelector(".main-page");
const questionPage = document.querySelector(".question-page");
const stepNumber = document.querySelector(".step-number");
const resultPage = document.querySelector(".result-page");
const endPoint = 10;
const loadingPage = document.querySelector(".loading-page");
const resetButton = document.querySelector("#reset-button");
const countDown = document.querySelector(".count-down");

// 다시하기
resetButton.addEventListener("click", function () {
  window.location.reload();
});

// 로딩페이지
const loadingImg = document.getElementById("loading-img");
const images = [
  "asset/img/loading01.png",
  "asset/img/loading02.png",
  "asset/img/loading03.png",
  "asset/img/loading04.png",
  "asset/img/loading05.png",
  "asset/img/loading06.png",
];

let imgIndex = 0;
let intervalId;

function goLoading() {
  questionPage.style.webkitAnimation = "fadeOut 1s";
  questionPage.style.animation = "fadeOut 1s";
  setTimeout(() => {
    loadingPage.style.webkitAnimation = "fadeIn 1s";
    loadingPage.style.animation = "fadeIn 1s";
    setTimeout(() => {
      //questionPage 없애고 로딩페이지 스타일 가로 중앙 정렬
      questionPage.style.display = "none";
      loadingPage.style.display = "flex";
      loadingPage.style.justifyContent = "center";
      startImg();
    }, 100);
  });
  setTimeout(() => {
    stopImg();
    goResult();
  }, 3000);
}

// 버튼 클릭 시 호출되는 함수
function clearNextTimeout() {
  // 기존에 설정된 타임아웃 초기화
  clearTimeout(nextTimeout);
}

// 로딩페이지) 이미지 로딩 후 멈추기
function startImg() {
  intervalId = setInterval(() => {
    loadingImg.src = images[imgIndex];
    imgIndex = (imgIndex + 1) % images.length;
  }, 600);
}
function stopImg() {
  clearInterval(intervalId);
}



let totalScore = 0;
// 버튼 클릭 시 호출되는 함수
const answerBtn = document.querySelector(".answer-buttons");
function addAnswer(answerText, qIdx) {
  const answer = document.createElement("button");
  answer.classList.add("answerList");
  answerBtn.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function () {
    const children = document.querySelectorAll(".answerList");
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;
      children[i].style.display = "none"; //버튼 사라짐
    }
    clearNextTimeout();

    totalScore +=
      qnaList[qIdx].a.find((a) => a.answer === answerText).score * 10;

    if (qIdx + 1 === endPoint) {
      // 로딩 페이지로 이동
      startImg();
      goLoading();
    } else {
      // 다음 질문 페이지로 이동
      goNext(++qIdx);
    }
  });
}

// 질문페이지
const imageUrls = [
  "images/01egg.png",
  "images/02japan.png",
  "images/03hourse.png",
  "images/04brazil.png",
  "images/05candle.png",
  "images/06brand_logo.png",
  "images/07Gyeongju.png",
  "images/08watch.png",
  "images/09woman.png",
  "images/10spelling.png",
];
let currentIndex = 0;
const imgBox = document.querySelector(".img-box");

let step = 0;
let nextTimeout;
let countdownInterval;

// 카운트다운 시작
function startCountdown(seconds, callback) {
  countDown.innerHTML = seconds;
  countdownInterval = setInterval(function () {
    seconds--;
    countDown.innerHTML = seconds;
    if (seconds <= 0) {
      clearInterval(countdownInterval);
      callback(); // 카운트후 콜백
    }
  }, 1000);
}

function goNext(qIdx) {
  const qnaText = document.querySelector("#question-text");
  qnaText.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }
  if (currentIndex < imageUrls.length) {
    const currentImageUrl = imageUrls[currentIndex];
    const imgElement = document.createElement("img");
    imgElement.src = currentImageUrl;
    imgElement.alt = `Image ${currentIndex + 1}`;

    imgBox.innerHTML = ""; //페이지 넘길떄 이미지 비워주기
    imgBox.appendChild(imgElement);

    currentIndex++;
  }
  step += 1;
  stepNumber.innerHTML = step + " / 10";

  const progressBar = document.querySelector(".progressBar");
  progressBar.style.width = (100 / endPoint) * (qIdx + 1) + "%";


  clearInterval(countdownInterval);
  startCountdown(3, function () {
    if (qIdx + 1 === endPoint) {
      // 마지막 질문페이지면 로딩페이지로
      startImg();
      goLoading();
    } else {
      answerBtn.innerHTML = "";
      goNext(++qIdx);
    }
  });

  // 이전에 설정된 타임아웃이 있다면 초기화
  clearNextTimeout();
  // 현재 질문이 마지막인지 확인
  if (qIdx + 1 === endPoint) {
    // 3초 뒤에 로딩 페이지로 이동
    nextTimeout = setTimeout(() => {
      goLoading();
    }, 3000);
  } else {
    // 3초 뒤에 다음 페이지로 이동
    nextTimeout = setTimeout(() => {
      answerBtn.innerHTML = "";
      goNext(++qIdx);
    }, 3000);
  }
}

// main 시작
function begin() {
  mainPage.style.webkitAnimation = "fadeOut 1s";
  mainPage.style.animation = "fadeOut 1s";
  setTimeout(() => {
    questionPage.style.webkitAnimation = "fadeIn 1s";
    questionPage.style.animation = "fadeIn 1s";
    setTimeout(() => {
      mainPage.style.display = "none";
      questionPage.style.display = "block";
    }, 100);

    let qIdx = 0;
    goNext(qIdx);
  }, 100);
}

// qna
const qnaList = [
  {
    q: "사진 속 계란은 날계란일까요? 삶은 계란일까요?",
    a: [
      { answer: "날계란", score: 0 },
      { answer: "삶은계란", score: 1 },
    ],
  },
  {
    q: "다음 일본어는 무슨 뜻일까요?",
    a: [
      { answer: "풀", score: 1 },
      { answer: "벌레", score: 0 },
    ],
  },
  {
    q: "세 장의 사진 중 두 장은 여성의 머리사진이고, 나머지 한장은 말의 털 사진입니다. 말의 털 사진은 몇 번일까요?",
    a: [
      { answer: "1번", score: 0 },
      { answer: "2번", score: 0 },
      { answer: "3번", score: 1 },
    ],
  },
  {
    q: "사진 속 장소는 어느나라 일까요?",
    a: [
      { answer: "브라질", score: 1 },
      { answer: "호주", score: 0 },
      { answer: "중국", score: 0 },
    ],
  },
  {
    q: "다음 촛불의 색깔은 무슨 색일까요?",
    a: [
      { answer: "빨간색", score: 1 },
      { answer: "보라색", score: 0 },
      { answer: "초록색", score: 0 },
    ],
  },
  {
    q: "다음 브랜드 로고 중 맞는것은 어느 쪽인가요?",
    a: [
      { answer: "왼쪽", score: 0 },
      { answer: "오른쪽", score: 1 },
    ],
  },
  {
    q: "사진 속 장소는 우리나라의 어디일까요?",
    a: [
      { answer: "화성", score: 0 },
      { answer: "경주", score: 1 },
      { answer: "광주", score: 0 },
    ],
  },
  {
    q: "다음 두 시계 중 어느 것이 잘못 만든 시계인가요?",
    a: [
      { answer: "1번", score: 1 },
      { answer: "2번", score: 0 },
    ],
  },
  {
    q: "사진 속 여성의 얼굴에 이상한 점이 있나요?",
    a: [
      { answer: "O", score: 1 },
      { answer: "X", score: 0 },
    ],
  },
  {
    q: "다음 단어의 맞는 맞춤법은 어떤 것 일까요?",
    a: [
      { answer: "빈털털이", score: 0 },
      { answer: "빈털터리", score: 1 },
    ],
  },
];

const resultScore = document.getElementById("result-score");
const resultText = document.getElementById("result-text");
const resultImg = document.getElementById("result-img");
const resultImgArr = [
  "images/result0.png",
  "images/result1.png",
  "images/result2.png",
  "images/result3.png",
  "images/result4.png",
  "images/result5.png",
  "images/result6.png",
  "images/result7.png",
  "images/result8.png",
  "images/result9.png",
  "images/result10.png",
];

// 결과창으로
function goResult() {
  resultScore.innerHTML = `${totalScore}점`;
  switch (totalScore) {
    case 0:
      resultText.innerHTML = "일부러 선택을 안하셨나요?🤔";
      break;
    case 10:
      resultText.innerHTML = "올바른 점수가 아닌 것 같은데요?😢";
      break;
    case 20:
      resultText.innerHTML = "다시 테스트를 해봐야 할 것 같아요.🤔";
      break;
    case 30:
      resultText.innerHTML = "한번 더 해보세요! 응원합니다!🫡";
      break;
    case 40:
      resultText.innerHTML = "괜찮아요~ 그럴 수 있어요!🤗";
      break;
    case 50:
      resultText.innerHTML = "일반인 수준이니 안심하셔도 됩니다.🤓";
      break;
    case 60:
      resultText.innerHTML = "그래도 절반 이상 맞았으니 상위권!😎";
      break;
    case 70:
      resultText.innerHTML = "오..촉이 좋은 편이시군요!👍";
      break;
    case 80:
      resultText.innerHTML = "와..평소 촉이 좋다고 느끼시나요?🤩";
      break;
    case 90:
      resultText.innerHTML = "와..혹시 미래를 보실 줄 아시나요?🥳";
      break;
    case 100:
      resultText.innerHTML = "👑당신은 초능력자입니다!👑";
      break;
  }
  resultImg.src = resultImgArr[totalScore / 10];

  loadingPage.style.webkitAnimation = "fadeOut 1s";
  loadingPage.style.animation = "fadeOut 1s";
  setTimeout(() => {
    resultPage.style.webkitAnimation = "fadeIn 1s";
    resultPage.style.animation = "fadeIn 1s";
    setTimeout(() => {
      loadingPage.style.display = "none";
      resultPage.style.display = "block";
    }, 300);
  });
}
