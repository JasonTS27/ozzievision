let myCountryText = document.getElementById('myCountryText');
let yourCountry = document.getElementById('your-country');
const checkbox = document.getElementById('check');
const form = document.getElementById('form');
const intro = document.getElementById('myContainer');
let userCountry;
let countries;

yourCountry.addEventListener("change", newCountry)
function newCountry () {
 checkbox.checked = false;
userCountry = yourCountry.value;      
 /* `Your Country is: ${userCountry}.`;
 const userCountry = yourCountry.value;
    myCountry.textContent =`Your Country is: ${userCountry}.`;
    */
}

const dd1 = document.getElementById('dd1');
const dd2 = document.getElementById('dd2');
const dd3 = document.getElementById('dd3');
const dd4 = document.getElementById('dd4');
const dd5 = document.getElementById('dd5');
const dd6 = document.getElementById('dd6');
const dd7 = document.getElementById('dd7');
const dd8 = document.getElementById('dd8');
const dd9 = document.getElementById('dd9');
const dd10 = document.getElementById('dd10');
const vote = document.getElementById('bttn');
checkbox.addEventListener("click", createArray);
function createArray() {
    const country12 = dd1.value;
    const country10 = dd2.value;
    const country8 = dd3.value;
    const country7 = dd4.value;
    const country6 = dd5.value;
    const country5 = dd6.value;
    const country4 = dd7.value;
    const country3 = dd8.value;
    const country2 = dd9.value;
    const country1 = dd10.value;
    countries = [country12, country10, country8, country7, country6, country5, country4, country3, country2, country1];
    const duplicates = countries.filter((item, index) => countries.indexOf(item) !== index);
    if (userCountry === undefined) {
        alert("Please select your country.");
        countries = [];
        checkbox.checked = false;
        console.log("country not selected")
    }
    if (duplicates.length !== 0) {
        alert("You cannot select the same country twice.");
        countries = [];
        checkbox.checked = false; 
        console.log("duplicates"); 
    } 
    else {
        countries.push(userCountry);
    }
    const match = countries.filter((item, index) => countries.indexOf(item) !== index);
    if (match.length !== 0) {
        alert("You cannot select your own country.");
        countries = [];
        checkbox.checked = false; 
        console.log("matched");
    }
    else {
        countries.push("");
    }
    const empty = countries.filter((item, index) => countries.indexOf(item) !== index);
    if (empty.length !== 0) {
            alert("Please assign all of your points.");
            countries = [];
            checkbox.checked = false; 
            console.log("empty");
    }
    else if (checkbox.checked) {
        //change to submit form
        console.log("good to go");
        //document.getElementById("form").submit();  
}        
    else {
        countries = [];
        checkbox.checked = false; 
        console.log("no check");
    }
}
dd1.addEventListener("change", uncheck);
dd2.addEventListener("change", uncheck);
dd3.addEventListener("change", uncheck);
dd4.addEventListener("change", uncheck);
dd5.addEventListener("change", uncheck);
dd6.addEventListener("change", uncheck);
dd7.addEventListener("change", uncheck);
dd8.addEventListener("change", uncheck);
dd9.addEventListener("change", uncheck);
dd10.addEventListener("change", uncheck);
function uncheck () {
    checkbox.checked = false;
}

vote.addEventListener("click", done);

function done() {
    if (checkbox.checked)
    {
     console.log(countries);
     $.ajax({
        url: "https://fabform.io/f/uzSauBx",
        type: "POST",
        data: {myArray : countries}
    });   
     form.style.display = "none";
     intro.style.display = "none";
     thank.style.display = "block";
    }
    else {}
}
