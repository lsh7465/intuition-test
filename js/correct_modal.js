
const closeModal = document.getElementById("close-modal");
const modalBg = document.getElementById("correct-modal-bg");
const modal = document.getElementById("correct-modal");
const openModalBtn = document.getElementById("check-correct");
const windowHeight = window.pageYOffset


console.log("현재 브라우저 창의 높이:", windowHeight);

openModalBtn.addEventListener("click", () => {
  modalBg.style.display = "block";
  modal.style.display = "block";
  window.scrollTo(0, 900);
  document.body.style.overflow = "hidden";
});

closeModal.addEventListener("click", () => {
  modalBg.style.display = "none";
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

modalBg.addEventListener("click", () => {
  modalBg.style.display = "none";
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});