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
var cartesCol = []

while (cartesCol.length<28)
cartesCol.push(cartesRestantes.splice(Math.floor(Math.random()*cartesRestantes.length),1)[0])

// sélection des colonnes (éléments fixes)
let colonne1= document.querySelector("#colonne1");
let colonne2= document.querySelector("#colonne2");
let colonne3= document.querySelector("#colonne3");
let colonne4= document.querySelector("#colonne4");
let colonne5= document.querySelector("#colonne5");
let colonne6= document.querySelector("#colonne6");
let colonne7= document.querySelector("#colonne7");


/* Paramètres de la fonction d'affichage des cartes: 
    * (numCol) le numéro de colonne, 
    * (indIn) indice(inclu) de début du tableau des cartes cartesCol, 
*/
affichageGen(1, 27)
affichageGen(2, 0)
affichageGen(3, 2)
affichageGen(4, 5)
affichageGen(5, 9)
affichageGen(6, 14)
affichageGen(7, 20)

// fonction qui génère l'affichage des cartes dans les div
function affichageGen(numCol, indIn){
    var numC = numCol+1 // nombre de cartes à créer: numéro de la colonne +1
    var indEx= numCol+indIn // indEx=28 (indice de fin qui de parcours du tableau cartesCol)

    var numCol= document.querySelector(`#colonne${numCol}`);
        for(var c=1; c<numC; c++){
            for(var a=indIn; a<indEx; a++){
                var c = document.createElement("div")
                c.classList.add(`${cartesCol[a]}`)
                c.classList.add("element_mv")
                c.setAttribute("draggable","true")
                numCol.append(c)
            }
        }
}

// Selection des éléments glissants pour le drop and drag
let element_mv = document.querySelectorAll(".element_mv")
// Selection des éléments fixes pour le drop and drag
let element_fx = document.querySelectorAll(".element_fx")


// état initial: item glissant
let draggedItem = null
// Première boucle sur les éléments glissants (les cartes, qui sont des div créées par la fonction affichageGen)
for (let i=0; i<element_mv.length; i++){
    const elmv = element_mv[i]
//l'utilisateur commence à déplacer un élément
    elmv.addEventListener('dragstart', function (){

        draggedItem = elmv

        //! très important: ajouter le setTimeOut permet à l'élément glissant de disparaitre de son élément fixe durant l'événement de drag. Petit bidouillage connu et répendu qui permet de corriger d'éventuels bugs constatés sous Chrome
        setTimeout(() => {
            //quand l'élément mouvant est en déplacement, il quitte sa div, et seul un ectoplasme de sa forme (légèrement visible à l'oeil nu) persiste lors de son déplacement. Et c'est lorsqu'il sera relâché (au 'drop' qu'il redeviendra visible.
            elmv.style.display='none'

        }, 0);
    })
//une opération de déplacement se termine
    elmv.addEventListener('dragend', function(){
        setTimeout(() => {
            draggedItem.style.display = 'block'
            elmv.classList.add("rotate-scale-up-diag-2")
            draggedItem =null
        }, 0);
 
    })
// on boucle sur les éléments fixes (zone de dépôt)
    for (let j=0; j< element_fx.length; j++){
        const elfx = element_fx[j]

        //un élément en cours de déplacement est en cours de SURVOL d'une zone de dépôt valide
        elfx.addEventListener('dragover', function (e){
            elfx.classList.add("color-change-5x")
            e.preventDefault()
        })
        //un élément en cours de déplacement ARRIVE sur une zone de dépôt valide
        elfx.addEventListener('dragenter', function(e){
            e.preventDefault()
            this.style.backgroundColor='rgba(0, 0, 0, 0.2)'
        })

        //un élément en cours de déplacement QUITTE une zone de dépôt valide.
        elfx.addEventListener('dragleave', function(e){
            this.style.backgroundColor='rgba(0, 0, 0, 0)'
            elfx.classList.remove("color-change-5x")
        })
        //un élément est DEPOSE sur une zone de dépôt valide
        elfx.addEventListener('drop', function(e){
    
            this.append(draggedItem)
            this.style.backgroundColor='rgba(0, 0, 0, 0)'
            elfx.classList.remove("color-change-5x")

        })

    }
}

