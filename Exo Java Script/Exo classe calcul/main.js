let addition = document.getElementById('add');
addition.addEventListener('click', afficheraddition);

let add;
let resultat = document.getElementById('resultat');

//------------Addition--------------------

function afficheraddition(){
let chiffreA = document.getElementById('chiffre1');
let ChiffreB = document.getElementById('chiffre2');
add = new Calcul(chiffreA.value, ChiffreB.value);
resultat.innerText = add.addition();



console.log(chiffreA.value, ChiffreB.value);
console.log(resultat);
}

//------------Multiplication------------------------

let multiplication = document.getElementById('multiple');
multiplication.addEventListener('click', affichermultiplication);

function affichermultiplication(){
    let chiffreA = document.getElementById('chiffre1');
    let ChiffreB = document.getElementById('chiffre2');
    add = new Calcul(chiffreA.value, ChiffreB.value);
    resultat.innerText = add.multiplication();
    
    
    
    console.log(chiffreA.value, ChiffreB.value);
    console.log(resultat);
}