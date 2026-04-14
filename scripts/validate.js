// TODO: DELETE THIS FILE
// All functionality from validate.js has been refactored into components/FormValidator.js
// Before submitting the project, delete the entire scripts/ directory

// DELETED: showInputError() - moved to FormValidator._showInputError()
const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElementId = `#${inputElement.id}-error`;
  const errorElement = formElement.querySelector(errorElementId);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};

// DELETED: hideInputError() - moved to FormValidator._hideInputError()
const hideInputError = (formElement, inputElement, settings) => {
  const errorElementId = `#${inputElement.id}-error`;
  const errorElement = formElement.querySelector(errorElementId);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = "";
};

// DELETED: checkInputValidity() - moved to FormValidator._checkInputValidity()
const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings,
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};
// DELETED: hasInvalidInput() - moved to FormValidator._hasInvalidInput()

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
// DELETED: toggleButtonState() - moved to FormValidator._toggleButtonState()

const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
// DELETED: setEventListeners() - moved to FormValidator._setEventListeners()
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector),
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector,
  );

  toggleButtonState(inputList, buttonElement, settings);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
// DELETED: enableValidation() - moved to FormValidator.enableValidation()
const enableValidation = (settings) => {
  const formElement = document.querySelector(settings.formSelector);
  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  setEventListeners(formElement, settings);
};

// DELETED: This line - replaced with new FormValidator instance in pages/index.js  setEventListeners(formElement, settings);
};

enableValidation(validationConfig);
