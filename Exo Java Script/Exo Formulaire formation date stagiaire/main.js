let stagiaireA = new Stagiaire ("Martin", "Vincent");

console.log(stagiaireA.salutation());
console.log(stagiaireA);

//------------------------------------------------
var creer = document.getElementById('creer');
creer.addEventListener('click', creerStage);

var afficher = document.querySelector('.afficher');
afficher.addEventListener('click', afficherStage);

var stage;

console.log(afficher);
console.log(creer);

function creerStage() {
    var formation = document.getElementById("formation");
    var dateDebut = document.getElementById("debut");
    var dateFin = document.getElementById("fin");
    stage = new Classe (formation.value,dateDebut.value,dateFin.value);
    console.log(formation,dateDebut,dateFin);
    console.log(stage);

    document.body.appendChild(stagiaireFormulaitreNom);
    document.body.appendChild(stagiaireFormulaitrePrenom);
    document.body.appendChild(stagiaireFormalairebutadd);
    document.body.appendChild(select);
}


var stagiaireFormulaitreNom = document.createElement('input');
stagiaireFormulaitreNom.placeholder = 'Nom Stagiaire';
var stagiaireFormulaitrePrenom = document.createElement('input');
stagiaireFormulaitrePrenom.placeholder = 'Prenom Stagiaire';
var stagiaireFormalairebutadd = document.createElement('button')
stagiaireFormalairebutadd.innerText = "Ajouter Stagiaire";

var select = document.createElement('select');

stagiaireFormalairebutadd.addEventListener("click", ajoutStagiaire);

function ajoutStagiaire() {
    let stagiaireForm = new Stagiaire (stagiaireFormulaitreNom.value, stagiaireFormulaitrePrenom.value);
    stage.listStagiaire.push(stagiaireForm);

    var selectOption = document.createElement('option');
    selectOption.innerText = stagiaireFormulaitreNom.value;

    select.appendChild(selectOption);
}




//-------------------------------------------------------------------------
function afficherStage() {
    var affichage = document.getElementById('affichage');
    affichage.innerHTML =`La formation ${stage.intitule} commencera le ${stage.dateDebut} et finira le ${stage.dateFin}`;
}

