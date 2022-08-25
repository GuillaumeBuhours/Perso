let hebdo = document.getElementById('hebdo')
hebdo.addEventListener('click', afficherhebdo);

let paiehebdo;

function afficherhebdo(){
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var th = document.getElementById('th');
    var nmbh = document.getElementById('nmbh');
    paiehebdo = new Salarie (nom.value, prenom.value, th.value, nmbh.value);    
    console.log(paiehebdo);
    let br = document.createElement('br');

    let resultat = document.getElementById('resultat');
    resultat.innerText =` Le Salarié ${paiehebdo.nom} ${paiehebdo.prenom} à travailler ${paiehebdo.nmbh}heure aux prix de ${paiehebdo.th}€.`;
    if(nmbh.value < 140){
    resultat.innerText+= ` Il recoit donc le salaire de ${paiehebdo.salaireHebdo()}`;
    }else{
    resultat.innerText+= ` Vous avez 140h et plus, merci de cliquez sur Salaire Mensuel`;        
    }
}

let mensuel = document.getElementById('mensuel');
mensuel.addEventListener('click', affichermensuel);

function affichermensuel(){
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var th = document.getElementById('th');
    var nmbh = document.getElementById('nmbh');
    paiehebdo = new Salarie (nom.value, prenom.value, th.value, nmbh.value);    
    console.log(paiehebdo);
    let br = document.createElement('br');

    let resultat = document.getElementById('resultat');
    resultat.innerText =` Le Salarié ${paiehebdo.nom} ${paiehebdo.prenom} à travailler ${paiehebdo.nmbh}heure aux prix de ${paiehebdo.th}€.`;
    if(nmbh.value >= 140){
    resultat.innerText+= ` Il recoit donc le salaire de ${paiehebdo.salaireMensuel()}€.`;
    }else{
    resultat.innerText+= ` Vous avez travailler moins de 140h, merci de cliquez sur salaire Hebdo.`;        
    }
}
