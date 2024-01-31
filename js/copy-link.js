document.getElementById("share-img").addEventListener("click", function() {
  const currentUrl = window.location.href;

  const textArea = document.createElement("textarea");
  textArea.value = currentUrl;
  document.body.appendChild(textArea);
  textArea.select();
  
  document.execCommand('copy');

  document.body.removeChild(textArea);

  alert("URL이 복사되었습니다.");
});