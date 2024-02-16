const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];


// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Form Elements                               ||
// ! ||--------------------------------------------------------------------------------||

//modal
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileCloseModalButton = document.querySelector(
  "#profile-modal-close-button"
);
//form inputs
const profileHeadingInput = document.querySelector("#profile-heading-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
//page elements
const profileFormElement = profileEditModal.querySelector(".modal__form");
const profileHeading = document.querySelector(".profile__heading");
const profileDescription = document.querySelector(".profile__description");
const cardsList = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Functions                                   ||
// ! ||--------------------------------------------------------------------------------||

function closePopUp() {
  profileEditModal.classList.remove("modal__opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImageSrc = cardElement.querySelector(".card__image");

  cardTitle.textContent = cardData.name;
  cardImageSrc.src = cardData.link;
  cardImageSrc.alt = cardData.name;
  return cardElement;
}

// ! ||--------------------------------------------------------------------------------||
// ! ||                                 Event Handlers                                 ||
// ! ||--------------------------------------------------------------------------------||
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileHeading.textContent = profileHeadingInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp();
}

// ! ||--------------------------------------------------------------------------------||
// ! ||                                 Event Listeners                                ||
// ! ||--------------------------------------------------------------------------------||
profileEditButton.addEventListener("click", () => {
  profileHeadingInput.value = profileHeading.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal__opened");
});

profileCloseModalButton.addEventListener("click", closePopUp);
profileFormElement.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardsList.prepend(cardElement);
});
