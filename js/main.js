
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

    
    if ((emailInput.value) === '' || (validateEmail(emailInput.value) === false)) {
        e.preventDefault();
        invalidItem(emailInput);
        // emailInput.nextElementSibling.style.display = 'block';
        // emailInput.style.backgroundImage = 'url(images/icon-error.svg)';
        // emailInput.style.borderColor = 'var(--color-red)';
        emailInput.style.color = 'var(--color-red)';
    } else {
        emailInput.nextElementSibling.style.display = 'none';
        emailInput.style.backgroundImage = 'none';
        emailInput.style.borderColor = 'var(--color-grayish-blue)';
        emailInput.style.color = '#000';
        dataArr.push(emailInput);
    }

    
    // Loop through inputs to validate
    for (let i = 0; i < inputArr.length; i++) {
        
        if (inputArr[i].value === '') {
            e.preventDefault();
            inputArr[i].nextElementSibling.style.display = 'block';
            inputArr[i].style.backgroundImage = 'url(images/icon-error.svg)';
            inputArr[i].style.borderColor = 'var(--color-red)';
        } else if (inputArr[i].value !== '') {
            inputArr[i].nextElementSibling.style.display = 'none';
            inputArr[i].style.backgroundImage = 'none';
            inputArr[i].style.borderColor = 'var(--color-grayish-blue)';
            dataArr.push(inputArr[i]);
        }    
    }

    console.log(dataArr);
    if (dataArr.length === 4) {
        alert('Thank You! Your information has been submitted.');
    }
});

function invalidItem(input) {
    input.nextElementSibling.style.display = 'block';
    input.style.backgroundImage = 'url(images/icon-error.svg)';
    input.style.borderColor = 'var(--color-red)';
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


