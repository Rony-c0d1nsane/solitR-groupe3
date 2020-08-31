let colonne1= document.querySelector("#colonne1");
let colonne2= document.querySelector("#colonne2");
let colonne3= document.querySelector("#colonne3");
let colonne4= document.querySelector("#colonne4");
let colonne5= document.querySelector("#colonne5");
let colonne6= document.querySelector("#colonne6");
let colonne7= document.querySelector("#colonne7");


//h = heart ♥ d = diamond ♦ c = clubs ♣ s = spike ♤
var couleur = ['h','c','d','s']
var rang = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
var deck = [];

for (var couleurMlg=0; couleurMlg<4; couleurMlg++){
    for (var rangMlg=0; rangMlg<13; rangMlg++){
    deck.push(couleur[couleurMlg]+rang[rangMlg]);
}
}
//dupliquer le tableau de deck
var cartesRestantes = deck.slice(0);
var cartesDesPiles = []

while (cartesDesPiles.length<28)
cartesDesPiles.push(cartesRestantes.splice(Math.floor(Math.random()*cartesRestantes.length),1)[0])

console.log(cartesDesPiles)

var c = document.createElement("p")
c.innerHTML="<div class="+`${cartesDesPiles[27]}`+"></div>"
colonne1.append(c)

function deuxiemeCol(){
    for(var c=1; c<3; c++){
        for(var a=0; a<2; a++){
            var c = document.createElement("p")
            c.innerHTML="<div class="+`${cartesDesPiles[a]}`+"></div>"
            colonne2.append(c)
        }
    }
}


function troisiemeCol(){
    for(var c=1; c<4; c++){

        for(var a=2; a<5; a++){ 
            var c = document.createElement("p")
            c.innerHTML="<div class="+`${cartesDesPiles[a]}`+"></div>"
            colonne3.append(c)
        }
    }
}

function quatriemeCol(){
    for(var c=1; c<5; c++){

        for(var a=5; a<9; a++){ 
            var c = document.createElement("p")
            c.innerHTML="<div class="+`${cartesDesPiles[a]}`+"></div>"
            colonne4.append(c)
        }
    }
}

function cinquiemeCol(){
    for(var c=1; c<6; c++){ //nombre d'element à créer

        for(var a=9; a<14; a++){ //indice tableau
            var c = document.createElement("p")
            c.innerHTML="<div class="+`${cartesDesPiles[a]}`+"></div>"
            colonne5.append(c)
        }
    }
}

function sixiemeCol(){
    for(var c=1; c<7; c++){ 

        for(var a=14; a<20; a++){ 
            var c = document.createElement("p")
            c.innerHTML="<div class="+`${cartesDesPiles[a]}`+"></div>"
            colonne6.append(c)
        }
    }
}

function septiemeCol(){
for(var c=1; c<8; c++){

    for(var a=20; a<27; a++){
        var c = document.createElement("p")
        c.innerHTML="<div class="+`${cartesDesPiles[a]}`+"></div>"
        colonne7.append(c)
    }
}
}


deuxiemeCol();
troisiemeCol()
quatriemeCol();
cinquiemeCol()
sixiemeCol();
septiemeCol();







