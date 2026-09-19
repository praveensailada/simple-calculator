// Get the display
let display = document.getElementById("display");


// =========================
// ADD VALUE
// =========================

function appendValue(value) {

    // Add the value to the display
    display.value = display.value + value;
}


// =========================
// CLEAR
// =========================

function clearDisplay() {

    // Remove everything
    display.value = "";
}


// =========================
// DELETE LAST CHARACTER
// =========================

function deleteLast() {

    // Remove the last character
    display.value = display.value.slice(0, -1);
}


// =========================
// CALCULATE
// =========================

function calculate() {

    try {

        // Calculate the expression
        display.value = eval(display.value);

    } catch (error) {

        // Show error if expression is wrong
        display.value = "Error";
    }
}