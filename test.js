// css에서 display:none 시켜서 가로중앙정렬 못한거 js에서 화면 보이게하고 가로중앙정렬
// let imgIndex = 0;

// function goLoading() {
//   questionPage.style.webkitAnimation = "fadeOut 1s";
//   questionPage.style.animation = "fadeOut 1s";
//   setTimeout(() => {
//     loadingPage.style.webkitAnimation = "fadeIn 1s";
//     loadingPage.style.animation = "fadeIn 1s";
//     setTimeout(() => {
//       questionPage.style.display = "none";
//       loadingPage.style.display = "block";
//     }, 200);
//     setInterval(() => {
//       loadingImg.src = images[imgIndex];
//       imgIndex = (imgIndex + 1) % images.length;
//       loadingPage.style.display = "flex"; // 이미지를 보이게 함
//       loadingPage.style.justifyContent = "center"; // 가로 중앙 정렬
//     }, 200);
//   });
//   setTimeout(() => {
//     goResult();
//   }, 3000);
// }

////////////자동페이지전환될때 시간 밀리는거(빨라지는거) 해결
// let nextTimeout;

// function goNext(qIdx) {
//   if (qIdx + 1 === endPoint) {
//     goLoading();
//   }
//   const qnaText = document.querySelector("#question-text");
//   qnaText.innerHTML = qnaList[qIdx].q;
//   for (let i in qnaList[qIdx].a) {
//     addAnswer(qnaList[qIdx].a[i].answer, qIdx);
//   }

//   if (currentIndex < imageUrls.length) {
//     const currentImageUrl = imageUrls[currentIndex];
//     const imgElement = document.createElement("img");
//     imgElement.src = currentImageUrl;
//     imgElement.alt = `Image ${currentIndex + 1}`;

//     imgBox.innerHTML = ""; //페이지 넘길떄 이미지 비워주기
//     imgBox.appendChild(imgElement);

//     currentIndex++;
//   }

//   step += 1;
//   stepNumber.innerHTML = step + " / 10";

//   const progressBar = document.querySelector(".progressBar");
//   progressBar.style.width = (100 / endPoint) * (qIdx + 1) + "%";

//   // 5초 후에 goNext 함수 호출
//   nextTimeout = setTimeout(() => {
//     goNext(++qIdx);
//   }, 5000);
// }

// function goLoading() {
//   // 기존에 설정된 타임아웃 초기화
//   clearTimeout(nextTimeout);

//   questionPage.style.webkitAnimation = "fadeOut 1s";
//   questionPage.style.animation = "fadeOut 1s";
//   setTimeout(() => {
//     loadingPage.style.webkitAnimation = "fadeIn 1s";
//     loadingPage.style.animation = "fadeIn 1s";
//     setTimeout(() => {
//       //questionPage 없애고 로딩페이지 스타일 가로 중앙 정렬
//       questionPage.style.display = "none";
//       loadingPage.style.display = "flex";
//       loadingPage.style.justifyContent = "center";
//       startImg();
//     }, 200);
//   });

//   setTimeout(() => {
//     stopImg();
//     goResult();
//   }, 3000);
// }

// // 버튼 클릭 시 호출되는 함수
// function clearNextTimeout() {
//   // 기존에 설정된 타임아웃 초기화
//   clearTimeout(nextTimeout);
// }

// answer.addEventListener("click", function () {
//   const children = document.querySelectorAll(".answerList");
//   for (let i = 0; i < children.length; i++) {
//     children[i].disabled = true;
//     children[i].style.display = "none"; //버튼 사라짐
//   }

//   // 기존에 설정된 타임아웃 초기화
//   clearNextTimeout();

//   goNext(++qIdx);
// });

/////// 01마지막 질문에서 바로 로딩페이지로 넘어가는거 해결
// // goNext 함수 수정
// function goNext(qIdx) {
//   const qnaText = document.querySelector("#question-text");
//   qnaText.innerHTML = qnaList[qIdx].q;

//   for (let i in qnaList[qIdx].a) {
//     addAnswer(qnaList[qIdx].a[i].answer, qIdx);
//   }

//   if (currentIndex < imageUrls.length) {
//     const currentImageUrl = imageUrls[currentIndex];
//     const imgElement = document.createElement("img");
//     imgElement.src = currentImageUrl;
//     imgElement.alt = `Image ${currentIndex + 1}`;

//     imgBox.innerHTML = ""; // 페이지 넘길 때 이미지 비워주기
//     imgBox.appendChild(imgElement);

//     currentIndex++;
//   }

//   step += 1;
//   stepNumber.innerHTML = step + " / 10";

//   const progressBar = document.querySelector(".progressBar");
//   progressBar.style.width = (100 / endPoint) * (qIdx + 1) + "%";

//   // 이전에 설정된 타임아웃이 있다면 초기화
//   clearNextTimeout();

//   // 현재 질문이 마지막인지 확인
//   if (qIdx + 1 === endPoint) {
//     // 5초 뒤에 로딩 페이지로 이동
//     nextTimeout = setTimeout(() => {
//       goLoading();
//     }, 5000);
//   } else {
//     // 5초 뒤에 다음 페이지로 이동
//     nextTimeout = setTimeout(() => {
//       answerBtn.innerHTML = "";
//       goNext(++qIdx);
//     }, 5000);
//   }
// }

///////02마지막 질문에서 바로 로딩페이지로 넘어가는거 해결은 했지만
//  마지막 문제에서 5초기다리면 로딩페이지로 잘 넘어가지고
//  버튼 클릭 시 로딩 페이지로 아예 안넘어가짐 - 해결
// // 버튼 클릭 시 호출되는 함수
// function addAnswer(answerText, qIdx) {
//   const answer = document.createElement("button");
//   answer.classList.add("answerList");
//   answerBtn.appendChild(answer);
//   answer.innerHTML = answerText;

//   answer.addEventListener("click", function () {
//     const children = document.querySelectorAll(".answerList");
//     for (let i = 0; i < children.length; i++) {
//       children[i].disabled = true;
//       children[i].style.display = "none"; // 버튼 사라짐
//     }
//     clearNextTimeout();

//     if (qIdx + 1 === endPoint) {
//       // 로딩 페이지로 이동
//       startImg();
//       goLoading();
//     } else {
//       // 다음 질문 페이지로 이동
//       goNext(++qIdx);
//     }
//   });
// }





// function goResult() {
//   resultScore.innerHTML = `${totalScore}점`;

//   switch (totalScore) {
//     case 10:
//       resultText.innerHTML = "올바른 점수가 아닌 것 같은데요?😢";
//       break;
//     case 20:
//       resultText.innerHTML = "다시 테스트를 해봐야 할 것 같아요.🤔";
//       break;
//     case 30:
//       resultText.innerHTML = "한번 더 해보세요! 응원합니다!🫡";
//       break;
//     case 100:
//       resultText.innerHTML = "👑당신은 초능력자입니다!👑";
//       break;
//   }
//   resultImg.src = resultImgArr[(totalScore / 10) - 1]; // Adjust the index

//   loadingPage.style.webkitAnimation = "fadeOut 1s";
//   loadingPage.style.animation = "fadeOut 1s";
//   setTimeout(() => {
//     resultPage.style.webkitAnimation = "fadeIn 1s";
//     resultPage.style.animation = "fadeIn 1s";
//     setTimeout(() => {
//       loadingPage.style.display = "none";
//       resultPage.style.display = "block";
//     }, 300);
//   });


// }

// ...

// let countdownInterval;

// // Function to start countdown
// function startCountdown(seconds, callback) {
//   countDown.innerHTML = seconds;
//   countdownInterval = setInterval(function () {
//     seconds--;
//     countDown.innerHTML = seconds;
//     if (seconds <= 0) {
//       clearInterval(countdownInterval);
//       callback(); // Execute the callback function after countdown
//     }
//   }, 1000);
// }

// function goNext(qIdx) {
//   const qnaText = document.querySelector("#question-text");
//   qnaText.innerHTML = qnaList[qIdx].q;

//   // Clear previous answer buttons
//   answerBtn.innerHTML = "";

//   // Add new answer buttons for the current question
//   for (let i in qnaList[qIdx].a) {
//     addAnswer(qnaList[qIdx].a[i].answer, qIdx);
//   }

//   // Display the current image
//   if (currentIndex < imageUrls.length) {
//     const currentImageUrl = imageUrls[currentIndex];
//     const imgElement = document.createElement("img");
//     imgElement.src = currentImageUrl;
//     imgElement.alt = `Image ${currentIndex + 1}`;

//     imgBox.innerHTML = ""; // Clear previous image
//     imgBox.appendChild(imgElement);

//     currentIndex++;
//   }

//   // Update step number
//   step += 1;
//   stepNumber.innerHTML = step + " / " + endPoint;

//   // Update progress bar
//   const progressBar = document.querySelector(".progressBar");
//   progressBar.style.width = (100 / endPoint) * step + "%";

//   // Reset countdown
//   clearInterval(countdownInterval);

//   // 카운트 다운
//   startCountdown(3, function () {
//     if (qIdx + 1 === endPoint) {
//       // If it's the last question, go to the loading page
//       startImg();
//       goLoading();
//     } else {
//       // Otherwise, continue with the logic for the next question/page
//       goNext(++qIdx);
//     }
//   });
// }

// // ...

// // main 시작
// function begin() {
//   mainPage.style.webkitAnimation = "fadeOut 1s";
//   mainPage.style.animation = "fadeOut 1s";
//   setTimeout(() => {
//     questionPage.style.webkitAnimation = "fadeIn 1s";
//     questionPage.style.animation = "fadeIn 1s";
//     setTimeout(() => {
//       mainPage.style.display = "none";
//       questionPage.style.display = "block";
//     }, 100);

//     let qIdx = 0;
//     goNext(qIdx);
//   }, 100);
// }

// // ...
