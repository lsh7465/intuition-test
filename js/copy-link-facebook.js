document.getElementById("facebook-img").addEventListener("click", function() {
  // 현재 페이지의 주소를 가져오기
  const currentUrl = window.location.href;

  // 페이스북 공유 링크 생성
  const facebookLink = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(currentUrl);

  // 텍스트 영역을 만들어서 값을 할당하고 선택
  const textArea = document.createElement("textarea");
  textArea.value = facebookLink;
  document.body.appendChild(textArea);
  textArea.select();
  
  // 클립보드에 복사
  document.execCommand('copy');

  // 생성한 텍스트 영역 제거
  document.body.removeChild(textArea);

  alert("Facebook 링크가 복사되었습니다.");
});