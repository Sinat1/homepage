const avatar = document.querySelector(".contact-info__avatar");
const backdrop = document.querySelector(".js-easter-backdrop");
const closeBtn = document.querySelector(".js-easter-close");

function openModal() {
  backdrop.classList.add("is-open");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  backdrop.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
}

avatar.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    closeModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
