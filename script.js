'strict mode'
const cardName = document.getElementById('cardholder-name');
const frontCard = document.querySelector('.interactive__cardsection-imgbx');
const cardNumber =  document.getElementById('card-number');
const frontCardDetails = document.querySelector('.interactive__cardsection-details')
const backCardDetails = document.querySelector('.interactive__backcardsection-details')
const cardDateMnth= document.getElementById('month')
const cardDateYear= document.getElementById('year')
const cardCVC = document.getElementById('cvc')
const btn = document.querySelector('.btn')
const errorMessageDiv = document.querySelector('.errorMessageDiv')
const errorMessageDivForName = document.querySelector('.errorMessageCardName')
const errorMessageForMonth = document.querySelector('.errorMessageForMonth')
const errorMessageForCVC = document.querySelector('.errorMessageForCVC')
const form = document.querySelector('.interactive__cardsection_form')
const completedSection = document.querySelector('.completed-section') 

btn.addEventListener('click', function(e) {
e.preventDefault();
if(cardName.value.length !== 0 &&
    cardDateMnth.value.length !== 0  &&
    cardCVC.value.length !== 0 && 
    cardNumber.value.length !== 0) {
         form.classList.add('activeform');
        completedSection.classList.add('active');
}

if (cardNumber.value.match(/^[0-9a-zA-Z]+$/)) {
   const errorMessage = document.createElement('p');
   errorMessage.classList.add('WrongMessageParagraph');
   errorMessage.innerHTML = 'Wrong formats, numbers only'
   errorMessageDiv.appendChild(errorMessage)
} if  (cardName.value.length === 0){
    const errorMessageForCardName = document.createElement('p');
    errorMessageForCardName.classList.add('WrongMessageParagraph');
    errorMessageForCardName.innerHTML = "can't be blank, please fill in your name "
    errorMessageDivForName.appendChild(errorMessageForCardName)
} if  (cardDateMnth.value.length === 0){
    const errorMessageForCardDateMonth = document.createElement('p');
    errorMessageForCardDateMonth.classList.add('WrongMessageParagraph');
    errorMessageForCardDateMonth.innerHTML = "can't be blank "
    errorMessageForMonth.appendChild(errorMessageForCardDateMonth)
} if  (cardCVC.value.length === 0){
    const errorMessageForCardCVC = document.createElement('p');
    errorMessageForCardCVC.classList.add('errorMessageParagraphForCVC');
    errorMessageForCardCVC.innerHTML = "can't be blank"
    errorMessageForCVC.appendChild(errorMessageForCardCVC)
} });

cardName.addEventListener('keydown', function(e) {
    createElements()
    

    
})

cardNumber.addEventListener('keydown', function() {
    createElementForCardNumber()
}) 

cardCVC.addEventListener('keydown', function() {
    createElementForCVC();
})

cardDateMnth.addEventListener('keydown', function() {
    createElementforMnth();
})

cardDateYear.addEventListener('keydown', function() {
    createElementforYear();
})

function createElements () {
    // card name
    const frontCardName = document.createElement('p');
    frontCardName.classList.add('frontcardName');
    frontCardName.innerHTML = cardName.value;
    frontCardDetails.appendChild(frontCardName)
}

function createElementForCardNumber () {
    const frontCardNumber = document.createElement('p');
    frontCardNumber.classList.add('frontcardNum');
    frontCardNumber.innerHTML = cardNumber.value;
    frontCardDetails.appendChild(frontCardNumber)
   
}

function createElementforMnth () {
    const frontCardMnth = document.createElement('p');
    frontCardMnth.classList.add('frontcardMonth');
     frontCardMnth.innerHTML = cardDateMnth.value;
     frontCardDetails.appendChild(frontCardMnth)
   
}

function createElementforYear () {
    const frontCardYear = document.createElement('p');
    frontCardYear.classList.add('frontcardYear');
     frontCardYear.innerHTML = cardDateYear.value;
     frontCardDetails.appendChild(frontCardYear)
   
}

function createElementForCVC () {
    const backCardCVC = document.createElement('p');
    backCardCVC.classList.add('backcard-num');
    backCardCVC.innerHTML =   cardCVC.value;
    backCardDetails.appendChild(backCardCVC);
}






