let myCountryText = document.getElementById('myCountryText');
 let yourCountry = document.getElementById('your-country');
 const checkbox = document.getElementById('check');
 const form = document.getElementById('form');
 const intro = document.getElementById('myContainer');
 let userCountry;
 
 yourCountry.addEventListener("change", newCountry)
 function newCountry () {
  checkbox.checked = false;
 userCountry = yourCountry.value;      
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
     let countries = [country12, country10, country8, country7, country6, country5, country4, country3, country2, country1];
     const duplicates = countries.filter((item, index) => countries.indexOf(item) !== index);
     if (userCountry === undefined) {
         alert("Please select your country.");
         countries = [];
         checkbox.checked = false;
         console.log("country not selected");
     }
     if (duplicates.length !== 0) {
         alert("You cannot select the same country twice.");}
     else if (duplicates.length !== 0) {
         alert("Please assign all your points. You cannot select the same country twice.");
         countries = [];
         checkbox.checked = false; 
         console.log("duplicates"); 
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
 
     else if (checkbox.checked) {
         console.log("good to go");
         console.log(countries);
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
      if (countries[0] === "Poland") {
        thank.innerText = "Thanks for Voting! \nYou're simply divine!";
     }
     else if (countries[0] === "Czechia") {
        thank.innerText = "Kiss Kiss Thanks for Voting!";
     }
     else if (countries[0] === "Ireland") {
        thank.innerText = "You wish Laika never died too, huh? \nThanks for voting!";
     }
     else if (countries[0] === "Sweden") {
        thank.innerText = "Yski Kaksi Kolme \nThanks for Voting!";
     }
     else if (countries[0] === "Portugal") {
        thank.innerText = "Thanks for Voting! \nMake yourself at home!";
     }
     else if (countries[0] === "Denmark") {
        thank.innerText = "!gnitoV rof sknahT";
     }
     else if (countries[0] === "France") {
        thank.innerText = "Thanks for Voting Maman!";
     }
     else if (countries[0] === "Ukraine") {
        thank.innerText = "Thanks for voting! \nLet's 'pray' they do well!";
     }
     else if (countries[0] === "Switzerland") {
        thank.innerText = "Thanks for Voting! \nBon Voyage!";
     }
     else if (countries[0] === "Iceland") {
        thank.innerText = "Aye Aye Cap'n! \nThanks for Voting!";
     }
     else if (countries[0] === "Croatia") {
        thank.innerText = "Thanks for voting! \nWe promise our cakes are safe!";
     }
     else if (countries[0] === "Austria") {
        thank.innerText = "Hit those high notes! \nThanks for voting!";
     }
     else if (countries[0] === "Greece") {
        thank.innerText = "The stars align! \nThanks for Voting!";
     }
     else if (countries[0] === "Armenia") {
        thank.innerText = "Thanks for Voting! \nLet's Hope you survive tonight!";
     }
     else if (countries[0] === "Latvia") {
        thank.innerText = "Were you away with the Fairies? \nThanks for Voting!";
     }
     else if (countries[0] === "Norway") {
        thank.innerText = "My Knight in Shining Armour! \nThanks for Voting!";
     }
     else if (countries[0] === "Malta") {
        thank.innerText = "Thanks for Voting! \nGo Serve C*nt!";
     }
     else if (countries[0] === "Italy") {
        thank.innerText = "Thanks for Voting! \nHave Strength, it's nearly over!";
     }
     else if (countries[0] === "Estonia") {
        thank.innerText = "Mi Amore! \nThanks for Voting! \nEnjoy the Party Por Favore!";
     }
     else if (countries[0] === "Finland") {
        thank.innerText = "Safe Search is on. \nComment Cannot be Displayed.";
     }
     else if (countries[0] === "Australia") {
        thank.innerText = "Th-th Thanks, \nTh-th Thanks for Voting!";
     }
     else if (countries[0] === "Albania") {
        thank.innerText = "Thanks for Voting! \nYou are on Fire!";
     }
     else if (countries[0] === "Germany") {
        thank.innerText = "Thanks for Voting! \nHope you have a ball!";
     }
     else if (countries[0] === "Spain") {
        thank.innerText = "Thanks for Voting Diva!";
     }
     else if (countries[0] === "Netherlands") {
        thank.innerText = "C'est La Vie, \nThanks for Voting!";
     }
     else if (countries[0] === "Belgium") {
        thank.innerText = "Thanks for voting! \nShine Bright!";
     }
    }
      form.style.display = "none";
      intro.style.display = "none";
      thank.style.display = "block";
     }
     else {}
 }
