/* DOMcelementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her
var redFigureElement = document.getElementById("redFigure");

if (redFigureElement) {

    console.log(redFigureElement);
} 
//////

 var yellowFigureElement = document.getElementById("yellowFigure");

 if (yellowFigureElement) {

     console.log(yellowFigureElement);
 } 
/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/


// din kode her
var redFigureElement = document.getElementById("redFigure");

if (redFigureElement) {
    redFigureElement.style.backgroundColor = "red";
}
//////
var yellowFigureElement = document.getElementById("yellowFigure");

if (yellowFigureElement) {
    yellowFigureElement.style.backgroundColor = "yellow";
}

/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/


// din kode her
{/* <div id="opgaveTwo"></div>
<h2>Opgave 2.1 løsning</h2>
<p>Jeg har løst opgaven</p> */}

// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her
var purpleFiguresElements = document.getElementsByClassName("purpleFigures");

console.log(purpleFiguresElements);

/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// din kode her
var purpleFiguresElements = document.getElementsByClassName("purpleFigures");
var purpleFiguresArray = Array.from(purpleFiguresElements);
purpleFiguresArray.map(function(element) {
    element.style.backgroundColor = "red";
});
/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/


// din kode her
var purpleFiguresElements = document.getElementsByClassName("purpleFigures");

var purpleFiguresArray = Array.from(purpleFiguresElements);
purpleFiguresArray.map(function(element) {
    element.style.backgroundColor = "red";

    //h3-elementet
    var h3Element = element.children[0];
    if (h3Element.tagName === "H3") {
        h3Element.innerHTML = "RED";
    }
});


/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


// din kode her
 var opgaveFourContainer = document.getElementById("tiger");

var titleElement = document.createElement("h2");
titleElement.innerHTML = myData.title;
opgaveFourContainer.appendChild(titleElement);


var contentElement = document.createElement("p");
contentElement.innerHTML = myData.content;
opgaveFourContainer.appendChild(domElement);


var linkElement = document.createElement("a");
linkElement.href = myData.link.url;
linkElement.innerHTML = myData.link.text;
opgaveFourContainer.appendChild(linkElement);


var headerElement = document.createElement("h3");
headerElement.innerHTML = "hard"; 
opgaveFourContainer.appendChild(headerElement);


var indexLinkElement = document.createElement("a");
indexLinkElement.href = "index.html";
indexLinkElement.innerHTML = "Go to Index";
opgaveFourContainer.appendChild(indexLinkElement);


