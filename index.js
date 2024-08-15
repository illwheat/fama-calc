const display = document.getElementById("display");


function ToDisplay(input) {
    if (/^[0-9+\-*/.]+$/.test(input)) {
        display.value += input;
    }
}

function ClearDisplay(){
    display.value = "";
}

function Calculate() {
    try {
        let result = math.evaluate(display.value);
        if (!isFinite(result)) {
            display.value = "Overflow!";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error!";
    }
}

function PlusMinus(){
    if (display.value != null && display.value != 0) {
        display.value = math.evaluate(display.value*-1);
    }
    else {
        display.value = "Error!"
    }
}

function PowerToTwo() {
    let base = parseFloat(display.value);
    if (!isNaN(base)) {
        let result = Math.pow(base, 2);
        display.value = result;
    } else {
        display.value = "Error!";
    }
}
