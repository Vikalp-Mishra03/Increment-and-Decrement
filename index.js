const countValue = document.querySelector('#num');


// for increase the value
const increment = () => {
    // get the number 
    let value = parseInt(countValue.innerText);
    // udate
    value = value + 1;
    // set the value
    countValue.innerText = value;
};

// for decrease the value
const decrement = () => {
    // get the number
    let value = parseInt(countValue.innerText);
    // update 
    value = value - 1;
    // set the value
    countValue.innerText = value;
};