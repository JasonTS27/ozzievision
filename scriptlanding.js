const button = document.getElementById('BUTT');
const declare = document.getElementById('declaration');
const twelveTo = document.getElementById('twelveto');
let Poland = 0;
let Ireland = 0;
let France = 0;
let Denmark = 0;
let Portugal = 0;
let Czechia = 0;
let Finland = 0;
let Croatia = 0;
let Australia = 0;
let Albania = 0;
let Iceland = 0;
let Sweden = 0;
let Armenia = 0;
let Austria = 0;
let Ukraine = 0;
let Germany = 0;
let Spain = 0;
let Switzerland = 0;
let Netherlands = 0;
let Estonia = 0;
let Belgium = 0;
let Greece = 0;
let Norway = 0;
let Latvia = 0;
let Italy = 0;
let Malta = 0;
let cunt = []
button.addEventListener("click", getPoints);
//ARRAY RESULTS GO HERE



// figure out a way to assign empty array to submitted value - based on array length (if > 1 assign to next instead etc)
let countries1 = ['Poland', 'Ireland', 'France', 'Denmark', 'Portugal', 'Czechia', 'Iceland', 'Croatia', 'Australia', 'Albania', 'Finland', '']
let countries2 = ['Belgium', 'France', 'Spain', 'Germany', 'Portugal', 'Czechia', 'Estonia', 'Austria', 'Australia', 'Sweden', 'Ukraine', '']
let countries3 = ['Poland', 'Ireland', 'France', 'Denmark', 'Spain', 'Switzerland', 'Croatia', 'Ukraine', 'Albania', 'Iceland', 'Germany', '']
let countries4 = ['Portugal', 'France', 'Austria', 'Denmark', 'Germany', 'Switzerland', 'Spain', 'Ukraine', 'Albania', 'Iceland', 'Sweden', '']
let countries5 = ['Denmark', 'France', 'Netherlands', 'Ireland', 'Estonia', 'Armenia', 'Poland', 'Switzerland', 'Albania', 'Czechia', 'Croatia', '']
let countries6 = ['Norway', 'Czechia', 'Sweden', 'Finland', 'Denmark', 'Belgium', 'Switzerland', 'Spain', 'Austria', 'Ukraine', 'Croatia', '']
let countries7 = []
let countries8 = []
let countries9 = []
let countries10 = []
let countries11 = []
let countries12 = []
let countries13 = []
let countries14 = []
let countries15 = []
let countries16 = []
let countries17 = []
let countries18 = []
let countries19 = []
let countries20 = []
let countries21 = []
let countries22 = []
let countries23 = []
let countries24 = []
let countries25 = []
//execute all commands
function getPoints () {
    if (countries1.length === 12) {cunt.push(countries1)}
    if (countries2.length === 12) {cunt.push(countries2)}
    if (countries3.length === 12) {cunt.push(countries3)}
    if (countries4.length === 12) {cunt.push(countries4)}
    if (countries5.length === 12) {cunt.push(countries5)}
    if (countries6.length === 12) {cunt.push(countries6)} 
    if (countries7.length === 12) {cunt.push(countries7)}
    if (countries8.length === 12) {cunt.push(countries8)}
    if (countries9.length === 12) {cunt.push(countries9)}
    if (countries10.length === 12) {cunt.push(countries10)}
    if (countries11.length === 12) {cunt.push(countries11)}
    if (countries12.length === 12) {cunt.push(countries12)}
    if (countries13.length === 12) {cunt.push(countries13)}
    if (countries14.length === 12) {cunt.push(countries14)
    if (countries15.length === 12) {cunt.push(countries15)}
    if (countries16.length === 12) {cunt.push(countries16)}
    if (countries17.length === 12) {cunt.push(countries17)}
    if (countries18.length === 12) {cunt.push(countries18)}
    if (countries19.length === 12) {cunt.push(countries19)}
    if (countries20.length === 12) {cunt.push(countries20)}
    if (countries21.length === 12) {cunt.push(countries21)}
    if (countries22.length === 12) {cunt.push(countries22)}
    if (countries23.length === 12) {cunt.push(countries23)}
    if (countries24.length === 12) {cunt.push(countries24)}
    if (countries25.length === 12) {cunt.push(countries25)}
    }
       
    let countries = cunt[0];
    console.log(cunt);
    for(let i = 0; i < cunt.length; i++) 
        {
    if (countries.indexOf('Poland') === 0) {Poland += 12;}
    else if (countries.indexOf('Poland') === 1) {Poland += 10;}
    else if (countries.indexOf('Poland') === 2) {Poland += 8;}
    else if (countries.indexOf('Poland') === 3) {Poland += 7;}
    else if (countries.indexOf('Poland') === 4) {Poland += 6;}
    else if (countries.indexOf('Poland') === 5) {Poland += 5;}
    else if (countries.indexOf('Poland') === 6) {Poland += 4;}
    else if (countries.indexOf('Poland') === 7) {Poland += 3;}
    else if (countries.indexOf('Poland') === 8) {Poland += 2;}
    else if (countries.indexOf('Poland') === 9) {Poland += 1;}
    if (countries.indexOf('Ireland') === 0) {Ireland += 12;}
    else if (countries.indexOf('Ireland') === 1) {Ireland += 10;}
    else if (countries.indexOf('Ireland') === 2) {Ireland += 8;}
    else if (countries.indexOf('Ireland') === 3) {Ireland += 7;}
    else if (countries.indexOf('Ireland') === 4) {Ireland += 6;}
    else if (countries.indexOf('Ireland') === 5) {Ireland += 5;}
    else if (countries.indexOf('Ireland') === 6) {Ireland += 4;}
    else if (countries.indexOf('Ireland') === 7) {Ireland += 3;}
    else if (countries.indexOf('Ireland') === 8) {Ireland += 2;}
    else if (countries.indexOf('Ireland') === 9) {Ireland += 1;}
    else {}
    if (countries.indexOf('France') === 0) {France += 12;}
    else if (countries.indexOf('France') === 1) {France += 10;}
    else if (countries.indexOf('France') === 2) {France += 8;}
    else if (countries.indexOf('France') === 3) {France += 7;}
    else if (countries.indexOf('France') === 4) {France += 6;}
    else if (countries.indexOf('France') === 5) {France += 5;}
    else if (countries.indexOf('France') === 6) {France += 4;}
    else if (countries.indexOf('France') === 7) {France += 3;}
    else if (countries.indexOf('France') === 8) {France += 2;}
    else if (countries.indexOf('France') === 9) {France += 1;}
    else {}
    if (countries.indexOf('Denmark') === 0) {Denmark += 12;}
    else if (countries.indexOf('Denmark') === 1) {Denmark += 10;}
    else if (countries.indexOf('Denmark') === 2) {Denmark += 8;}
    else if (countries.indexOf('Denmark') === 3) {Denmark += 7;}
    else if (countries.indexOf('Denmark') === 4) {Denmark += 6;}
    else if (countries.indexOf('Denmark') === 5) {Denmark += 5;}
    else if (countries.indexOf('Denmark') === 6) {Denmark += 4;}
    else if (countries.indexOf('Denmark') === 7) {Denmark += 3;}
    else if (countries.indexOf('Denmark') === 8) {Denmark += 2;}
    else if (countries.indexOf('Denmark') === 9) {Denmark += 1;}
    else {}
    if (countries.indexOf('Portugal') === 0) {Portugal += 12;}
    else if (countries.indexOf('Portugal') === 1) {Portugal += 10;}
    else if (countries.indexOf('Portugal') === 2) {Portugal += 8;}
    else if (countries.indexOf('Portugal') === 3) {Portugal += 7;}
    else if (countries.indexOf('Portugal') === 4) {Portugal += 6;}
    else if (countries.indexOf('Portugal') === 5) {Portugal += 5;}
    else if (countries.indexOf('Portugal') === 6) {Portugal += 4;}
    else if (countries.indexOf('Portugal') === 7) {Portugal += 3;}
    else if (countries.indexOf('Portugal') === 8) {Portugal += 2;}
    else if (countries.indexOf('Portugal') === 9) {Portugal += 1;}
    else {}
    if (countries.indexOf('Czechia') === 0) {Czechia += 12;}
    else if (countries.indexOf('Czechia') === 1) {Czechia += 10;}
    else if (countries.indexOf('Czechia') === 2) {Czechia += 8;}
    else if (countries.indexOf('Czechia') === 3) {Czechia += 7;}
    else if (countries.indexOf('Czechia') === 4) {Czechia += 6;}
    else if (countries.indexOf('Czechia') === 5) {Czechia += 5;}
    else if (countries.indexOf('Czechia') === 6) {Czechia += 4;}
    else if (countries.indexOf('Czechia') === 7) {Czechia += 3;}
    else if (countries.indexOf('Czechia') === 8) {Czechia += 2;}
    else if (countries.indexOf('Czechia') === 9) {Czechia += 1;}
    else {}
    if (countries.indexOf('Finland') === 0) {Finland += 12;}
    else if (countries.indexOf('Finland') === 1) {Finland += 10;}
    else if (countries.indexOf('Finland') === 2) {Finland += 8;}
    else if (countries.indexOf('Finland') === 3) {Finland += 7;}
    else if (countries.indexOf('Finland') === 4) {Finland += 6;}
    else if (countries.indexOf('Finland') === 5) {Finland += 5;}
    else if (countries.indexOf('Finland') === 6) {Finland += 4;}
    else if (countries.indexOf('Finland') === 7) {Finland += 3;}
    else if (countries.indexOf('Finland') === 8) {Finland += 2;}
    else if (countries.indexOf('Finland') === 9) {Finland += 1;}
    else {}
    if (countries.indexOf('Croatia') === 0) {Croatia += 12;}
    else if (countries.indexOf('Croatia') === 1) {Croatia += 10;}
    else if (countries.indexOf('Croatia') === 2) {Croatia += 8;}
    else if (countries.indexOf('Croatia') === 3) {Croatia += 7;}
    else if (countries.indexOf('Croatia') === 4) {Croatia += 6;}
    else if (countries.indexOf('Croatia') === 5) {Croatia += 5;}
    else if (countries.indexOf('Croatia') === 6) {Croatia += 4;}
    else if (countries.indexOf('Croatia') === 7) {Croatia += 3;}
    else if (countries.indexOf('Croatia') === 8) {Croatia += 2;}
    else if (countries.indexOf('Croatia') === 9) {Croatia += 1;}
    else {}
    if (countries.indexOf('Australia') === 0) {Australia += 12;}
    else if (countries.indexOf('Australia') === 1) {Australia += 10;}
    else if (countries.indexOf('Australia') === 2) {Australia += 8;}
    else if (countries.indexOf('Australia') === 3) {Australia += 7;}
    else if (countries.indexOf('Australia') === 4) {Australia += 6;}
    else if (countries.indexOf('Australia') === 5) {Australia += 5;}
    else if (countries.indexOf('Australia') === 6) {Australia += 4;}
    else if (countries.indexOf('Australia') === 7) {Australia += 3;}
    else if (countries.indexOf('Australia') === 8) {Australia += 2;}
    else if (countries.indexOf('Australia') === 9) {Australia += 1;}
    else {}
    if (countries.indexOf('Albania') === 0) {Albania += 12;}
    else if (countries.indexOf('Albania') === 1) {Albania += 10;}
    else if (countries.indexOf('Albania') === 2) {Albania += 8;}
    else if (countries.indexOf('Albania') === 3) {Albania += 7;}
    else if (countries.indexOf('Albania') === 4) {Albania += 6;}
    else if (countries.indexOf('Albania') === 5) {Albania += 5;}
    else if (countries.indexOf('Albania') === 6) {Albania += 4;}
    else if (countries.indexOf('Albania') === 7) {Albania += 3;}
    else if (countries.indexOf('Albania') === 8) {Albania += 2;}
    else if (countries.indexOf('Albania') === 9) {Albania += 1;}
    else {}
    if (countries.indexOf('Iceland') === 0) {Iceland += 12;}
    else if (countries.indexOf('Iceland') === 1) {Iceland += 10;}
    else if (countries.indexOf('Iceland') === 2) {Iceland += 8;}
    else if (countries.indexOf('Iceland') === 3) {Iceland += 7;}
    else if (countries.indexOf('Iceland') === 4) {Iceland += 6;}
    else if (countries.indexOf('Iceland') === 5) {Iceland += 5;}
    else if (countries.indexOf('Iceland') === 6) {Iceland += 4;}
    else if (countries.indexOf('Iceland') === 7) {Iceland += 3;}
    else if (countries.indexOf('Iceland') === 8) {Iceland += 2;}
    else if (countries.indexOf('Iceland') === 9) {Iceland += 1;}
    else {}
    if (countries.indexOf('Sweden') === 0) {Sweden += 12;}
    else if (countries.indexOf('Sweden') === 1) {Sweden += 10;}
    else if (countries.indexOf('Sweden') === 2) {Sweden += 8;}
    else if (countries.indexOf('Sweden') === 3) {Sweden += 7;}
    else if (countries.indexOf('Sweden') === 4) {Sweden += 6;}
    else if (countries.indexOf('Sweden') === 5) {Sweden += 5;}
    else if (countries.indexOf('Sweden') === 6) {Sweden += 4;}
    else if (countries.indexOf('Sweden') === 7) {Sweden += 3;}
    else if (countries.indexOf('Sweden') === 8) {Sweden += 2;}
    else if (countries.indexOf('Sweden') === 9) {Sweden += 1;}
    else {}
    if (countries.indexOf('Armenia') === 0) {Armenia += 12;}
    else if (countries.indexOf('Armenia') === 1) {Armenia += 10;}
    else if (countries.indexOf('Armenia') === 2) {Armenia += 8;}
    else if (countries.indexOf('Armenia') === 3) {Armenia += 7;}
    else if (countries.indexOf('Armenia') === 4) {Armenia += 6;}
    else if (countries.indexOf('Armenia') === 5) {Armenia += 5;}
    else if (countries.indexOf('Armenia') === 6) {Armenia += 4;}
    else if (countries.indexOf('Armenia') === 7) {Armenia += 3;}
    else if (countries.indexOf('Armenia') === 8) {Armenia += 2;}
    else if (countries.indexOf('Armenia') === 9) {Armenia += 1;}
    else {}
    if (countries.indexOf('Austria') === 0) {Austria += 12;}
    else if (countries.indexOf('Austria') === 1) {Austria += 10;}
    else if (countries.indexOf('Austria') === 2) {Austria += 8;}
    else if (countries.indexOf('Austria') === 3) {Austria += 7;}
    else if (countries.indexOf('Austria') === 4) {Austria += 6;}
    else if (countries.indexOf('Austria') === 5) {Austria += 5;}
    else if (countries.indexOf('Austria') === 6) {Austria += 4;}
    else if (countries.indexOf('Austria') === 7) {Austria += 3;}
    else if (countries.indexOf('Austria') === 8) {Austria += 2;}
    else if (countries.indexOf('Austria') === 9) {Austria += 1;}
    else {}
    if (countries.indexOf('Ukraine') === 0) {Ukraine += 12;}
    else if (countries.indexOf('Ukraine') === 1) {Ukraine += 10;}
    else if (countries.indexOf('Ukraine') === 2) {Ukraine += 8;}
    else if (countries.indexOf('Ukraine') === 3) {Ukraine += 7;}
    else if (countries.indexOf('Ukraine') === 4) {Ukraine += 6;}
    else if (countries.indexOf('Ukraine') === 5) {Ukraine += 5;}
    else if (countries.indexOf('Ukraine') === 6) {Ukraine += 4;}
    else if (countries.indexOf('Ukraine') === 7) {Ukraine += 3;}
    else if (countries.indexOf('Ukraine') === 8) {Ukraine += 2;}
    else if (countries.indexOf('Ukraine') === 9) {Ukraine += 1;}
    else {}
    if (countries.indexOf('Germany') === 0) {Germany += 12;}
    else if (countries.indexOf('Germany') === 1) {Germany += 10;}
    else if (countries.indexOf('Germany') === 2) {Germany += 8;}
    else if (countries.indexOf('Germany') === 3) {Germany += 7;}
    else if (countries.indexOf('Germany') === 4) {Germany += 6;}
    else if (countries.indexOf('Germany') === 5) {Germany += 5;}
    else if (countries.indexOf('Germany') === 6) {Germany += 4;}
    else if (countries.indexOf('Germany') === 7) {Germany += 3;}
    else if (countries.indexOf('Germany') === 8) {Germany += 2;}
    else if (countries.indexOf('Germany') === 9) {Germany += 1;}
    else {}
    if (countries.indexOf('Spain') === 0) {Spain += 12;}
    else if (countries.indexOf('Spain') === 1) {Spain += 10;}
    else if (countries.indexOf('Spain') === 2) {Spain += 8;}
    else if (countries.indexOf('Spain') === 3) {Spain += 7;}
    else if (countries.indexOf('Spain') === 4) {Spain += 6;}
    else if (countries.indexOf('Spain') === 5) {Spain += 5;}
    else if (countries.indexOf('Spain') === 6) {Spain += 4;}
    else if (countries.indexOf('Spain') === 7) {Spain += 3;}
    else if (countries.indexOf('Spain') === 8) {Spain += 2;}
    else if (countries.indexOf('Spain') === 9) {Spain += 1;}
    else {}
    if (countries.indexOf('Switzerland') === 0) {Switzerland += 12;}
    else if (countries.indexOf('Switzerland') === 1) {Switzerland += 10;}
    else if (countries.indexOf('Switzerland') === 2) {Switzerland += 8;}
    else if (countries.indexOf('Switzerland') === 3) {Switzerland += 7;}
    else if (countries.indexOf('Switzerland') === 4) {Switzerland += 6;}
    else if (countries.indexOf('Switzerland') === 5) {Switzerland += 5;}
    else if (countries.indexOf('Switzerland') === 6) {Switzerland += 4;}
    else if (countries.indexOf('Switzerland') === 7) {Switzerland += 3;}
    else if (countries.indexOf('Switzerland') === 8) {Switzerland += 2;}
    else if (countries.indexOf('Switzerland') === 9) {Switzerland += 1;}
    else {}
    if (countries.indexOf('Netherlands') === 0) {Netherlands += 12;}
    else if (countries.indexOf('Netherlands') === 1) {Netherlands += 10;}
    else if (countries.indexOf('Netherlands') === 2) {Netherlands += 8;}
    else if (countries.indexOf('Netherlands') === 3) {Netherlands += 7;}
    else if (countries.indexOf('Netherlands') === 4) {Netherlands += 6;}
    else if (countries.indexOf('Netherlands') === 5) {Netherlands += 5;}
    else if (countries.indexOf('Netherlands') === 6) {Netherlands += 4;}
    else if (countries.indexOf('Netherlands') === 7) {Netherlands += 3;}
    else if (countries.indexOf('Netherlands') === 8) {Netherlands += 2;}
    else if (countries.indexOf('Netherlands') === 9) {Netherlands += 1;}
    else {}
    if (countries.indexOf('Estonia') === 0) {Estonia += 12;}
    else if (countries.indexOf('Estonia') === 1) {Estonia += 10;}
    else if (countries.indexOf('Estonia') === 2) {Estonia += 8;}
    else if (countries.indexOf('Estonia') === 3) {Estonia += 7;}
    else if (countries.indexOf('Estonia') === 4) {Estonia += 6;}
    else if (countries.indexOf('Estonia') === 5) {Estonia += 5;}
    else if (countries.indexOf('Estonia') === 6) {Estonia += 4;}
    else if (countries.indexOf('Estonia') === 7) {Estonia += 3;}
    else if (countries.indexOf('Estonia') === 8) {Estonia += 2;}
    else if (countries.indexOf('Estonia') === 9) {Estonia += 1;}
    else {}
    if (countries.indexOf('Belgium') === 0) {Belgium += 12;}
    else if (countries.indexOf('Belgium') === 1) {Belgium += 10;}
    else if (countries.indexOf('Belgium') === 2) {Belgium += 8;}
    else if (countries.indexOf('Belgium') === 3) {Belgium += 7;}
    else if (countries.indexOf('Belgium') === 4) {Belgium += 6;}
    else if (countries.indexOf('Belgium') === 5) {Belgium += 5;}
    else if (countries.indexOf('Belgium') === 6) {Belgium += 4;}
    else if (countries.indexOf('Belgium') === 7) {Belgium += 3;}
    else if (countries.indexOf('Belgium') === 8) {Belgium += 2;}
    else if (countries.indexOf('Belgium') === 9) {Belgium += 1;}
    else {}
    if (countries.indexOf('Greece') === 0) {Greece += 12;}
    else if (countries.indexOf('Greece') === 1) {Greece += 10;}
    else if (countries.indexOf('Greece') === 2) {Greece += 8;}
    else if (countries.indexOf('Greece') === 3) {Greece += 7;}
    else if (countries.indexOf('Greece') === 4) {Greece += 6;}
    else if (countries.indexOf('Greece') === 5) {Greece += 5;}
    else if (countries.indexOf('Greece') === 6) {Greece += 4;}
    else if (countries.indexOf('Greece') === 7) {Greece += 3;}
    else if (countries.indexOf('Greece') === 8) {Greece += 2;}
    else if (countries.indexOf('Greece') === 9) {Greece += 1;}
    else {}
    if (countries.indexOf('Norway') === 0) {Norway += 12;}
    else if (countries.indexOf('Norway') === 1) {Norway += 10;}
    else if (countries.indexOf('Norway') === 2) {Norway += 8;}
    else if (countries.indexOf('Norway') === 3) {Norway += 7;}
    else if (countries.indexOf('Norway') === 4) {Norway += 6;}
    else if (countries.indexOf('Norway') === 5) {Norway += 5;}
    else if (countries.indexOf('Norway') === 6) {Norway += 4;}
    else if (countries.indexOf('Norway') === 7) {Norway += 3;}
    else if (countries.indexOf('Norway') === 8) {Norway += 2;}
    else if (countries.indexOf('Norway') === 9) {Norway += 1;}
    else {}
    if (countries.indexOf('Latvia') === 0) {Latvia += 12;}
    else if (countries.indexOf('Latvia') === 1) {Latvia += 10;}
    else if (countries.indexOf('Latvia') === 2) {Latvia += 8;}
    else if (countries.indexOf('Latvia') === 3) {Latvia += 7;}
    else if (countries.indexOf('Latvia') === 4) {Latvia += 6;}
    else if (countries.indexOf('Latvia') === 5) {Latvia += 5;}
    else if (countries.indexOf('Latvia') === 6) {Latvia += 4;}
    else if (countries.indexOf('Latvia') === 7) {Latvia += 3;}
    else if (countries.indexOf('Latvia') === 8) {Latvia += 2;}
    else if (countries.indexOf('Latvia') === 9) {Latvia += 1;}
    else {}
    if (countries.indexOf('Italy') === 0) {Italy += 12;}
    else if (countries.indexOf('Italy') === 1) {Italy += 10;}
    else if (countries.indexOf('Italy') === 2) {Italy += 8;}
    else if (countries.indexOf('Italy') === 3) {Italy += 7;}
    else if (countries.indexOf('Italy') === 4) {Italy += 6;}
    else if (countries.indexOf('Italy') === 5) {Italy += 5;}
    else if (countries.indexOf('Italy') === 6) {Italy += 4;}
    else if (countries.indexOf('Italy') === 7) {Italy += 3;}
    else if (countries.indexOf('Italy') === 8) {Italy += 2;}
    else if (countries.indexOf('Italy') === 9) {Italy += 1;}
    else {}
    if (countries.indexOf('Malta') === 0) {Malta += 12;}
    else if (countries.indexOf('Malta') === 1) {Malta += 10;}
    else if (countries.indexOf('Malta') === 2) {Malta += 8;}
    else if (countries.indexOf('Malta') === 3) {Malta += 7;}
    else if (countries.indexOf('Malta') === 4) {Malta += 6;}
    else if (countries.indexOf('Malta') === 5) {Malta += 5;}
    else if (countries.indexOf('Malta') === 6) {Malta += 4;}
    else if (countries.indexOf('Malta') === 7) {Malta += 3;}
    else if (countries.indexOf('Malta') === 8) {Malta += 2;}
    else if (countries.indexOf('Malta') === 9) {Malta += 1;}
    else {}
    console.log(Poland, Ireland, France, Denmark, Portugal, Czechia, Finland, Croatia, Australia, Albania, Iceland, Sweden, Armenia, Austria, Ukraine, Germany, Spain, Switzerland, Netherlands, Estonia, Belgium, Greece, Norway, Latvia, Italy, Malta);
    button.style.display = "none";
    /*let order = [Poland, Ireland, France, Denmark, Portugal, Czechia, Finland, Croatia, Australia, Albania, Iceland, Sweden, Armenia, Austria, Ukraine, Germany, Spain, Switzerland, Netherlands, Estonia, Belgium, Greece, Norway, Latvia, Italy, Malta];
    console.log(order);*/
    
    declare.innerText = 
    `Televote Scores:
    \n Latvia = ${Latvia}
    \n Ukraine = ${Ukraine}
    \n Croatia = ${Croatia}
    \n Poland = ${Poland}
    \n Ireland = ${Ireland}
    \n Armenia = ${Armenia}
    \n Australia = ${Australia}
    \n Italy = ${Italy}
    \n Iceland = ${Iceland}
    \n Portugal = ${Portugal}
    \n Belgium = ${Belgium}
    \n Czechia = ${Czechia}
    \n Denmark = ${Denmark}
    \n Germany = ${Germany}
    \n Greece = ${Greece}
    \n Switzerland = ${Switzerland} 
    \n Estonia = ${Estonia}
    \n Norway = ${Norway}
    \n Spain = ${Spain}
    \n Albania = ${Albania} 
    \n France = ${France}
    \n Malta = ${Malta}
    \n Finland = ${Finland}
    \n Netherlands = ${Netherlands}
    \n Austria = ${Austria} 
    \n Sweden = ${Sweden}`;
    
    countries = cunt[i + 1];}
}