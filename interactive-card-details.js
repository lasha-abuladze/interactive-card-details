`use strict`;



const submitBtn = document.querySelector(`#submit`);
const cardholderNameInput = document.querySelector(`#cardholder-name-input`);
const cardNumberInput = document.querySelector(`#card-number-input`);
const monthInput = document.querySelector(`#mm`);
const yearInput = document.querySelector(`#yy`);
const cvcInput = document.querySelector(`#cvc-input`);


const cardholderNameCard = document.querySelector(`.cardholder-name-on-card`)
const cardNumberCard = document.querySelector(`.card-number-on-card`);
const expdateCard = document.querySelector(`.expdate-on-card`);
const cvcvCard = document.querySelector(`.card-cvc`);

const inputsArray = Array.from(document.getElementsByClassName(`input`));
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


submitBtn.addEventListener(`click`, (e) => {
    e.preventDefault();

    if(inputsArray.some(el => el.value === ``)) {
        console.log(`hi`)
    } else {
        cardholderNameCard.textContent = `${cardholderNameInput.value}`;
        cardNumberCard.textContent = `${cardNumberInput.value}`;
    
        expdateCard.textContent = `${monthInput.value}/${yearInput.value}`
        cvcvCard.textContent = `${cvcInput.value}`
    }

})