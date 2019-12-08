
// Get submit button
let submitButton = document.getElementById('submit-button');

// Event listener for submit button
submitButton.addEventListener('click', (e) => {

    // Selects inputs that have not-email class
    let inputArr = document.querySelectorAll('[class=not-email]');
    // Selects email input -- seperate for validation purposes
    let emailInput = document.getElementById('email');
    // Array to hold inputs that are valid -- also used to check if all inputs are valid
    let dataArr = [];

    // Validates email
    if ((emailInput.value) === '' || (validateEmail(emailInput.value) === false)) {
        e.preventDefault();
        invalidInput(emailInput);
        emailInput.style.color = 'var(--color-red)';
    } else {
        validInput(emailInput);
        dataArr.push(emailInput);
    }

    // Loop through inputs to validate
    for (let i = 0; i < inputArr.length; i++) {
        
        if (inputArr[i].value === '') {
            e.preventDefault();
            invalidInput(inputArr[i]);
        } else if (inputArr[i].value !== '') {
            validInput(inputArr[i]);
            dataArr.push(inputArr[i]);
        }    
    }

    console.log(dataArr);

    // If dataArr length is equal to total amount of inputs form is submitted and alert is triggered
    if (dataArr.length === 4) {
        let firstName = document.querySelector('[name=firstname]').value;
        alert(`Thank You ${firstName}! Your information has been submitted.`);
    }
});

// function to add styles to input if invalid
function invalidInput(input) {
    input.nextElementSibling.style.display = 'block';
    input.style.backgroundImage = 'url(images/icon-error.svg)';
    input.style.borderColor = 'var(--color-red)';
}

// function to add styles to input if valid
function validInput(input) {
    input.nextElementSibling.style.display = 'none';
    input.style.backgroundImage = 'none';
    input.style.borderColor = 'var(--color-grayish-blue)';
}

// function to check for valid email format
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


