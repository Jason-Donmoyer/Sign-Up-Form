

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
            inputArr[i].style.borderColor = 'var(--color-red)';
        } else if (inputArr[i].value !== '') {
            inputArr[i].nextElementSibling.style.display = 'none';
            inputArr[i].style.borderColor = 'var(--color-grayish-blue)';
            dataArr.push(inputArr[i]);
        }
    }

    console.log(dataArr);
});

