const speakerButtons = document.querySelectorAll(".speaker-toggle");

speakerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const abstractId = button.getAttribute("aria-controls");
    const abstractPanel = document.getElementById(abstractId);
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    abstractPanel.hidden = isOpen;
  });
});

const registrationButton = document.querySelector(".registration-button");
const modal = document.getElementById("registration-modal");
const registrationFrame = document.getElementById("registration-frame");
const registrationPlaceholder = document.getElementById("registration-placeholder");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");
let lastFocusedElement = null;

function openRegistrationModal() {
  const registrationUrl = registrationButton.dataset.registrationUrl.trim();

  lastFocusedElement = document.activeElement;
  modal.hidden = false;
  document.body.classList.add("modal-open");

  if (registrationUrl) {
    registrationFrame.src = registrationUrl;
    registrationFrame.hidden = false;
    registrationPlaceholder.hidden = true;
  } else {
    registrationFrame.removeAttribute("src");
    registrationFrame.hidden = true;
    registrationPlaceholder.hidden = false;
  }

  const closeButton = modal.querySelector(".modal-close");
  closeButton.focus();
}

function closeRegistrationModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  registrationFrame.removeAttribute("src");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

if (registrationButton) {
  registrationButton.addEventListener("click", openRegistrationModal);
}

closeModalButtons.forEach((button) => {
  button.addEventListener("click", closeRegistrationModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeRegistrationModal();
  }
});
