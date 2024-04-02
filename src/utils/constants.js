export const initialCards = [
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

export const selectors = {
  cardSection: ".cards__list",
  cardTemplate: "#card-template",
  cardPopup: "#add-card-modal",
  cardImagePopup: "#image-preview-modal",
  cardImage: ".preview-image__image",
  cardDescription: ".preview-image__description",
  cardAddButton: "#add-card-add-button",
  popupForm: ".modal__form",
  popupInput: ".modal__input",
  closeButton: ".modal__close",
  profilePopup: "#profile-edit-modal",
  profileEditButton: "#profile-edit-button",
  profileName: ".modal__input_type_name",
  profileDescription: ".modal__input_type_description",
  profileHeadingElement: ".profile__heading",
  profileDescriptionElement: ".profile__description",
}

export const formValidationConfig = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
}