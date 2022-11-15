
let charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");
let btn = document.getElementById("btn");

let char = 0;

// Total Count & Remaining Count. 

const updateCounter = () => {
    userChar = charVal.value.length;

    totalCount.innerText = userChar;

    remainingCount.innerText = 150 - userChar;
};

charVal.addEventListener("keyup", () => updateCounter());

// Copy Code 

const copyText = () => {
    charVal.select();
    charVal.setSelectionRange(0, 99999); //mobile
    navigator.clipboard.writeText(charVal.value); // important

    // Some My Logics For Text Copied Functionality..!

    // btn.innerText = "Text Copied";

    btn = alert("Text Copied");

};

// I Try To Set InnerText Of Main Button...
// if (charVal.setSelectionRange(0 <= 99999)) {
//     btn.innerText = "Okay!";
// } else {
//     btn.innerText = "Copied To Clipboard"
// };