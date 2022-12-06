var a = 20;
var b = 10;
var sum = a + b;

console.log (sum)


var voornaam = "Casper "; // wijzig dit in jouw eigen voornaam
var achternaam = "Otto"; // wijzig dit in jouw eigen achternaam

const volledigeNaam = voornaam + achternaam; // plak hier de 3 bovenstaande variabelen aan elkaar, met spaties

var geboortedag = "15 "; // je geboortedag
var geboortemaand = "April "; // je geboortemaand
var geboortejaar = "2005"; // je geboortejaar

const geboorteDatum = geboortedag + geboortemaand + geboortejaar;

var huidig_jaartal = "2022"// het huidige jaar;
var leeftijd = huidig_jaartal -= geboortejaar; // bereken hier jouw leeftijd op basis van de eerder ingevulde geboortegegevens.
var dag_van_het_jaar = 0; // bereken hier hoeveelste dag van dit kalenderjaar het is

var straat = "Catharinadaal "; // je straat;
var huisnummer = "69"; // je huisnummer;
var woonplaats = "Ede"; // je woonplaats;
var woonachtig_in_utrecht = "Nee"; // check hier dmv een boolean of jouw woonplaats gelijk is aan "Utrecht"

const adress = straat + huisnummer + ("<br>") + woonplaats;

var aantal_studenten_in_deze_klas = 23;
var kosten_van_frikandelbroodje = 1.76;
var totale_lunchkosten = aantal_studenten_in_deze_klas *= kosten_van_frikandelbroodje *= 2; // bereken hier het totaalbedrag als iedere student 2 frikandelbroodjes zou kopen

let element = document.createElement('div');
element.innerHTML += volledigeNaam + ("<br>");
document.getElementById("voorPlusAchternaam").appendChild(element);

let element1 = document.createElement('div');
element.innerHTML += geboorteDatum + ("<br>");
document.getElementById("geboorteDatum").appendChild(element1);

let element2 = document.createElement('div');
element.innerHTML += ("<br>") + adress;
document.getElementById("geboorteDatum").appendChild(element2);



// document.body.innerHTML += "Casper";
// document.body.innerHTML += "<br>";
// document.body.innerHTML += "Otto";
// document.body.innerHTML += "<br>";
// document.body.innerHTML += "Casper Otto";
// document.body.innerHTML += "<br>";
// document.body.innerHTML += "15";
// document.body.innerHTML += "<br>";
// document.body.innerHTML += "april";
// document.body.innerHTML += "<br>";
// document.body.innerHTML += "2005";
// document.body.innerHTML += "<br>";
// document.body.innerHTML += "2022";
// document.body.innerHTML += "<br>";
// document.body.innerHTML += "17";
// document.body.innerHTML += "<br>";
// document.body.innerHTML += "dinsdag";
// document.body.innerHTML += "<br>";
// document.body.innerHTML += "Catharinadaal";
// document.body.innerHTML += "<br>";
// document.body.innerHTML += "69";
// document.body.innerHTML += "<br>";
// document.body.innerHTML += "Ede";
// document.body.innerHTML += "<br>";
// document.body.innerHTML += "nee";
// document.body.innerHTML += "<br>";
// document.body.innerHTML += "28";


