 const checkbox = document.getElementById('check');
 const form = document.getElementById('form');
 const intro = document.getElementById('myContainer');
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
 let myCountryText = document.getElementById('myCountryText');
 let yourCountry = document.getElementById('your-country');
 let userCountry;
yourCountry.addEventListener("change", newCountry);
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
 
function newCountry () {
    checkbox.checked = false;
    userCountry = yourCountry.value;      
 }
 
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
     let countries = [country12, country10, country8, country7, country6, country5, country4, country3, country2, country1];
     if (userCountry === undefined) {
        alert("Please select your country.");
        countries = [];
        checkbox.checked = false;
       return;
    }
    for (const country of countries) {
        if (country === "") {
        alert("Please assign all of your points.");
        countries = [];
        checkbox.checked = false; 
        console.log("empty"); 
       return;
     }}
     const duplicates = countries.filter((item, index) => countries.indexOf(item) !== index);
     if (duplicates.length !== 0) {
        alert("You cannot select the same country twice.");
        countries = [];
        checkbox.checked = false; 
       return;
     }
     else {
        countries.push(userCountry);
     }
     const match = countries.filter((item, index) => countries.indexOf(item) !== index);
     if (match.length !== 0) {
         alert("You cannot select your own country.");
         countries = [];
         checkbox.checked = false; 
        return;
     }}

function uncheck () {
   checkbox.checked = false;
 }
