import Card from "/components/Card.js";
import FormValidator from "/components/FormValidator.js";

const initialCards = [
  {
    name: "Angel's Landing",
    link: "https://images.unsplash.com/photo-1515601915049-08c8836c2204?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5nZWxzJTIwbGFuZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Mt Aoraki",
    link: "https://images.unsplash.com/photo-1672085806346-9401b58c5c32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG10JTIwYW9yYWtpfGVufDB8fDB8fHww",
  },
  {
    name: "Roy's Peak",
    link: "https://images.unsplash.com/photo-1496458590512-56d2688442b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm95J3MlMjBwZWFrfGVufDB8fDB8fHww",
  },
  {
    name: "Yellowstone",
    link: "https://images.unsplash.com/photo-1594073632422-ef9768f87fa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eWVsbG93c3RvbmUlMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Bryce Canyon",
    link: "https://images.unsplash.com/photo-1590090934699-29857c196de8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyeWNlJTIwY2FueW9uJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
  },
  {
    name: "Glacier National Park",
    link: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhY2llciUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Form Elements                               ||
// ! ||--------------------------------------------------------------------------------||

//edit profile modal
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileCloseModalButton = profileEditModal.querySelector(
  ".modal__close"
);
//add card modal
const addCardModal = document.querySelector("#add-card-modal");
const addCardAddButton = document.querySelector("#add-card-add-button");
const addCardCloseModalButton = addCardModal.querySelector(
  ".modal__close"
);
//image preview modal
const imagePreviewModal = document.querySelector("#image-preview-modal");
const imagePreviewCloseModalButton = imagePreviewModal.querySelector(
  ".modal__close_type_preview"
);

//edit profile form inputs
const profileHeadingInput = profileEditModal.querySelector(".modal__input_type_name");
const profileDescriptionInput = profileEditModal.querySelector(
  ".modal__input_type_description"
);
//add card form inputs
const addCardTitleInput = addCardModal.querySelector(".modal__input_type_title");
const addCardURLInput = addCardModal.querySelector(
  ".modal__input_type_url"
);
//modals
const modals = document.querySelectorAll(".modal");

//page elements
const profileFormElement = document.querySelector("#profile-edit-modal");
const cardFormElement = document.querySelector("#add-card-modal");

const profileHeading = document.querySelector(".profile__heading");
const profileDescription = document.querySelector(".profile__description");

const cardsList = document.querySelector(".cards__list");
const closeButtons = document.querySelectorAll(".modal__close");

const cardPreviewTitle = imagePreviewModal.querySelector(".preview-image__description");
const cardPreviewImage = imagePreviewModal.querySelector(".preview-image__image");

// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Functions                                   ||
// ! ||--------------------------------------------------------------------------------||

function closePopUp(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeByEscape);
}

function openPopUp(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closePopUp(openedModal);
  }
}

//FUNCTION TO ADD CARDS
function renderCard(cardData, wrapper) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  const cardElement = card.generateCard();
  cardsList.prepend(cardElement);
}

//RENDER INITIAL CARDS
initialCards.forEach((cardData) => {
  renderCard(cardData);
});

// ! ||--------------------------------------------------------------------------------||
// ! ||                                 Event Handlers                                 ||
// ! ||--------------------------------------------------------------------------------||
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileHeading.textContent = profileHeadingInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = addCardTitleInput.value;
  const link = addCardURLInput.value;
  renderCard({name, link});
  e.target.reset();
  cardFormValidator.toggleButtonState();
  closePopUp(addCardModal);
}

function handleImageClick(name, link) {
  cardPreviewTitle.textContent = name;
  cardPreviewImage.setAttribute("src", link);
  cardPreviewImage.setAttribute("alt", name);
  openPopUp(imagePreviewModal);
}

// ! ||--------------------------------------------------------------------------------||
// ! ||                                 Event Listeners                                ||
// ! ||--------------------------------------------------------------------------------||
profileEditButton.addEventListener("click", () => {
  profileHeadingInput.value = profileHeading.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopUp(profileEditModal);
});

addCardAddButton.addEventListener("click", () => {
  openPopUp(addCardModal);
});

modals.forEach((modal) => {
  modal.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("modal")) {
      closePopUp(modal);
    }
  });
});

profileFormElement.addEventListener("submit", handleProfileEditSubmit);
cardFormElement.addEventListener("submit", handleAddCardFormSubmit);

closeButtons.forEach((button) => {
  const modal = button.closest(".modal");
  button.addEventListener("click", () => closePopUp(modal));
});

const formValidationConfig = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
}

const editProfileFormValidator = new FormValidator(formValidationConfig, profileFormElement);
const cardFormValidator = new FormValidator(formValidationConfig, cardFormElement);

editProfileFormValidator.enableValidation();
cardFormValidator.enableValidation();