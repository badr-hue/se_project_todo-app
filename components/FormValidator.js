class FormValidator {
  constructor(settings, formElement) {
   // this._formSelector = settings._formSelector;
    this._inputSelector = settings.inputSelector;
    this._formSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formElement;
    
  }
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) { 
        this._showInputError(inputElement, inputElement.validationMessage);
    } else {
        this._hideInputError(inputElement);
    } 
  }
  _setEventListeners() {
     const inputList = Array.from(
    this._formElement.querySelectorAll(this._inputSelector),
  );
  const buttonElement = this._formElement.querySelector(
    this._submitButtonSelector,
  );

  toggleButtonState(inputList, buttonElement, settings);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._checkInputValidity(this._formElement, inputElement, this._settings);
      toggleButtonState(inputList, buttonElement, this._settings);
    });
  });
  }


  enableValidation() {
  //  const formElement = document.querySelector(this._formSelector);
  this._formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  this._setEventListeners();
}

}

export default FormValidator;