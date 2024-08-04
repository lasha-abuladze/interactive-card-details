`use strict`;



const submitBtn = document.querySelector(`#submit`);
const cardholderNameInput = document.querySelector(`#cardholder-name-input`);
const cardNumberInput = document.querySelector(`#card-number-input`);
const monthInput = document.querySelector(`#mm`);
const yearInput = document.querySelector(`#yy`);
const cvcInput = document.querySelector(`#cvc-input`);


const beforeConfirme = document.querySelector(`.before-confirme`)
const afterConfirm = document.querySelector(`.after-confirme`)



const cardholderNameCard = document.querySelector(`.cardholder-name-on-card`)
const cardNumberCard = document.querySelector(`.card-number-on-card`);
const expdateCard = document.querySelector(`.expdate-on-card`);
const cvcvCard = document.querySelector(`.card-cvc`);

const inputsArray = Array.from(document.getElementsByClassName(`input`));
const errorTextArray = Array.from(document.getElementsByClassName(`error-text`));


const arrMonthes = [ `01`, `02`, `03`, `04`, `05`, `06`, `07`, `08`, `09`, `10`, `11`, `12`]


console.log(inputsArray)



cardNumberInput.addEventListener(`input`, () => {
    //remove none-digit characters
    let rawValue = cardNumberInput.value.replace(/\D/g, '');

    // Format with spaces every 4 characters
    let formattedValue = rawValue.replace(/(.{4})/g, '$1 ');
    
    // Set the formatted value back to the input
    cardNumberInput.value = formattedValue.trim();

    // Optional: Set the caret position correctly
    let caretPosition = formattedValue.length;
    cardNumberInput.setSelectionRange(caretPosition, caretPosition);

})

monthInput.addEventListener(`input`, () => {
    let rawValue = monthInput.value.replace(/\D/g, '');
    monthInput.value = rawValue.trim();
})



yearInput.addEventListener(`input`, () => {
    let rawValue = yearInput.value.replace(/\D/g, '');
    yearInput.value = rawValue.trim();
})

cvcInput.addEventListener(`input`, () => {
    let rawValue = cvcInput.value.replace(/\D/g, '');
    cvcInput.value = rawValue.trim();
});




/// this function checkes if input is filled

const fillInput = function(inputArr) {
    inputArr.forEach((el, i) => {
        if(el.value === ``) {
            errorTextArray[i].classList.add(`visible`)
            el.classList.add(`error-border`)
        } else {
            errorTextArray[i]?.classList.remove(`visible`)
            el.classList.remove(`error-border`)   
            
            
            // checkInputLeangth(cardNumberInput)

        }
    })
}




//// this function checks if input has required number of letters

const checkInputLeangth = function(input) {

    const indexOfElement = inputsArray.findIndex((el, i) => {
       if( el.id === `${input.id}`) {
        return i
       }
    })

    if(input.value.length < input.maxLength) {
        input.classList.add(`error-border`)
        errorTextArray[indexOfElement].classList.add(`visible`)
    } else {
        input.classList.remove(`error-border`)
        errorTextArray[indexOfElement].classList.remove(`visible`)
       
    }
}



///  this function checkes if month input is filled correctly

const checkMonthInp = function(month) {
    const x = arrMonthes.some(el => {
        return month.value === el
    })

    const indexOfElement = inputsArray.findIndex((el, i) => {
        if( el.id === `${month.id}`) {
         return i
        }
     }) 

    if(x !== true) {
        month.classList.add(`error-border`)
        errorTextArray[indexOfElement].classList.add(`visible`)
    } else {
        month.classList.remove(`error-border`)
        errorTextArray[indexOfElement].classList.remove(`visible`)
    }
}







submitBtn.addEventListener(`click`, (e) => {

    e.preventDefault();
    
    fillInput(inputsArray);

    checkInputLeangth(cardNumberInput);
    checkInputLeangth(cvcInput);
    checkInputLeangth(yearInput);
    checkInputLeangth(monthInput);

    checkMonthInp(monthInput)



    if(inputsArray.some(el => el.classList.contains(`error-border`))) {

    } else {
        cardholderNameCard.textContent = `${(cardholderNameInput.value).toUpperCase()}`;
        cardNumberCard.textContent = `${cardNumberInput.value}`;
    
        expdateCard.textContent = `${monthInput.value}/${yearInput.value}`
        cvcvCard.textContent = `${cvcInput.value}`

        inputsArray.forEach(el => el.value = ``)

        afterConfirm.classList.remove(`display-none`);
        beforeConfirme.classList.add(`display-none`);
    }

})