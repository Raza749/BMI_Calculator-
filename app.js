


// **************************Accessing the Elements*********************** 
const form = document.querySelector("form");
const error = document.querySelector("#error");
const uname = document.querySelector("#userName");
const height = document.querySelector("#heightInCm");
const weight = document.querySelector("#weightInKg");
const calculateBtn = document.querySelector(".calcBmi");
const resultsBox = document.querySelector(".result");
const userBox = document.querySelector(".user");
const reset = document.querySelector(".resetBtn");
const nameText = document.querySelector(".nameText");
const showBmi = document.querySelector(".showBmi");
const suggestion = document.querySelector(".suggestion");








// **************************Handling Events *********************** 
form.addEventListener("submit", stopDefaultBehavior);
calculateBtn.addEventListener('click', validateAndCalculate);
reset.addEventListener("click", resetResult);















// **************************Making the functions*********************** 



// Stop the default behavior of the form
function stopDefaultBehavior(event) {
    event.preventDefault();
}


// Validation and calculation function 
function validateAndCalculate(event) {
    if (uname.value === "" || height.value === "" || weight.value === "") {
        error.style.opacity = 1;
    } else {
        error.style.opacity = 0;
        showTheResultBox();
    }
};

// Show the result box 
function showTheResultBox() {
    resultsBox.style.visibility = "visible";
    userBox.sytype = "hidden";
    showResultsOnTheResultBox();
}

// Reset the results 
function resetResult() {
    resultsBox.style.visibility = "hidden";
    userBox.sytype = "visible";

    // Clear the input fields 
    uname.value = "";
    height.value = "";
    weight.value = "";
}

// Show the results on the result box
function showResultsOnTheResultBox() {
    nameText.innerText = uname.value;
    // let bmi = ((weight.value) / ((height.value * height.value)) * 10000).toFixed(2);
    let bmi = ((weight.value) / ((height.value / 100) * (height.value / 100))).toFixed(2);

    showBmi.innerText = `Your BMI is ${bmi}.`;

    giveSuggestionsToTheResultBox();

};

// Suggestions to user
function giveSuggestionsToTheResultBox(){
    
   
    let bmi = ((weight.value) / ((height.value / 100) * (height.value / 100))).toFixed(2);

    if (bmi < 18.5) {
        suggestion.innerText = `Your BMI is ${bmi}. You are underweight and should consider a balanced diet rich in nutrients.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        suggestion.innerText = `Your BMI is ${bmi} and you're in a normal, healthy weight range. Maintain a balanced diet and regular exercise.`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        suggestion.innerText = `Your BMI is ${bmi} and you're overweight. Consider seeking help from a healthcare professional for advice on weight management.`;
    } else if (bmi >= 30) {
        suggestion.innerText = `Your BMI is ${bmi} and your BMI indicates obesity. Consult with a healthcare provider for a suitable plan.`;
    } else {
        alert("Enter valid values.");
    }
    
}
