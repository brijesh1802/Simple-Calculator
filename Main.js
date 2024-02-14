const display = document.getElementById("display");

function append(input){
    display.value += input;
}

// clear the screen
function clearDisplay(){
    display.value = '';
}

// delete one character from the right of the cursor
function backspace(){
    display.value = display.value.slice(0, -1);
}

// evaluate the expression and round off to 4 digits
function calculate(){
    try{
        let result = eval(display.value);
        display.value = roundToFourDigits(result);
    } catch(e){
        display.value = 'Error';
    }
}

// only decimal point is allowed
function decimal(){
    if(display.value.includes('.')){
        return;
    }
    display.value += '.';
}

// helper function to round off to 4 digits
function roundToFourDigits(number) {
    return Math.round(number * 10000) / 10000;
}
