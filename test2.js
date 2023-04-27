var checkbox = document.getElementById("showMoreInfo");
var additionalInfo = document.getElementById("additional-info");

//додаткова інформація 
checkbox.addEventListener("change", function() {
  if (this.checked) {
    additionalInfo.style.display = "block";
  } else {
    additionalInfo.style.display = "none";
  }
});

//заборона писати у полі для відповіді
var input = document.getElementById("resultname");
input.addEventListener("keypress", function(event) {
  event.preventDefault();
});


const resultInput = document.getElementById("resultname");

const aErrorMessage = document.getElementById("a-error-message");
const hErrorMessage = document.getElementById("h-error-message");

//валідація
function validate(inputField, errorMessage) {
    //var inputField = document.getElementById("aname");
    var value = inputField.value.trim();
    
    errorMessage.style.display = "none";
    inputField.style.borderColor = "black";

    if (value === "") {
      errorMessage.style.display = "block";
      resultInput.value = "";
      inputField.style.borderColor = "red";
      return false;
    }
    
    if (isNaN(value)) {
      errorMessage.style.display = "block";
      resultInput.value = "";
      inputField.style.borderColor = "red";
      return false;
    }
    
    if (Number(value) <= 0) {
        resultInput.value = "";
        errorMessage.style.display = "block";
        inputField.style.borderColor = "red";
      return false;
    }
  
    return true;
  }

  function validateWithModal(inputField) {
    //var inputField = document.getElementById("aname");
    var value = inputField.value.trim();
    
    if (value === "") {
      alert("Поле не може бути порожнім");
      resultInput.value = "";
      return false;
    }
    
    if (isNaN(value)) {
      alert("Введіть числове значення");
      resultInput.value = "";
      return false;
    }
    
    if (Number(value) <= 0) {
        resultInput.value = "";
      alert("Введене число має бути більше за 0");
      return false;
    }
  
    return true;
  }
  
  //знаходимо елементи форми за допомогою їх id
  const aInput = document.getElementById("aname");
  const hInput = document.getElementById("hname");
  
  var scale = window.outerWidth / document.documentElement.clientWidth;

  
  // функція для розрахунку площі ромба
  function calculateArea(event) {

    // забороняємо стандартну поведінку форми
    event.preventDefault();
    
    if(scale < 0.9){
      if (validateWithModal(aInput)  &&  validateWithModal(hInput) ) {
        const a = parseFloat(aInput.value);
        const h = parseFloat(hInput.value);
    
        const area = a * h;
    
        resultInput.value = area;
      }
    }else{
      if (validate(aInput, aErrorMessage)  &&  validate(hInput, hErrorMessage) ) {
        const a = parseFloat(aInput.value);
        const h = parseFloat(hInput.value);
    
        const area = a * h;
    
        resultInput.value = area;
      }
    }
  }
  
  
  // встановлюємо обробник події для кнопки "find area"
  const buttonFindArea = document.getElementById("buttonFindArea");
  buttonFindArea.addEventListener("click", calculateArea);
  

  // встановлюємо обробник події для кнопки "clean up"
  const buttonCleanUp = document.getElementById("buttonCleanUp");
  buttonCleanUp.addEventListener("click", function() {
    aInput.value = "";
    hInput.value = "";
    resultInput.value = "";
    aErrorMessage.style.display = "none";
    aInput.style.borderColor = "black";
    hErrorMessage.style.display = "none";
    hInput.style.borderColor = "black";
  });

  
  

  