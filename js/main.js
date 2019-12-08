function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (e) => {

    let inputFields = document.getElementsByTagName('input');
    let inputArr = [];
    let dataArr = [];
    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].hasAttribute('placeholder')) {
            inputArr.push(inputFields[i]);
        }
    }

    for (let i = 0; i < inputArr.length; i++) {
        
        if (inputArr[i].value === '') {
            e.preventDefault();
            inputArr[i].nextElementSibling.style.display = 'block';
            inputArr[i].style.backgroundImage = 'url(images/icon-error.svg)';
            inputArr[i].style.borderColor = 'var(--color-red)';
        } else if ((inputArr[i] !== '') && (inputArr[i].hasAttribute('type', 'email'))) {
            if (validateEmail(inputArr[i].value) === false) {
                console.log('FALSE');
                e.preventDefault();
                inputArr[i].nextElementSibling.style.display = 'block';
                inputArr[i].style.backgroundImage = 'url(images/icon-error.svg)';
                inputArr[i].style.borderColor = 'var(--color-red)';
                inputArr[i].style.color = 'var(--color-red)';
            } else {
                inputArr[i].nextElementSibling.style.display = 'none';
                inputArr[i].style.backgroundImage = 'none';
                inputArr[i].style.borderColor = 'var(--color-grayish-blue)';
                dataArr.push(inputArr[i]);
            }
        } else if (inputArr[i].value !== '') {
            inputArr[i].nextElementSibling.style.display = 'none';
            inputArr[i].style.backgroundImage = 'none';
            inputArr[i].style.borderColor = 'var(--color-grayish-blue)';
            dataArr.push(inputArr[i]);
        }
    }

    console.log(dataArr);
});



