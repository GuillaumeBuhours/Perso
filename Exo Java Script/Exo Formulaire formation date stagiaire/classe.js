class Classe
{
    intitule;
    listStagiaire;
    dateDebut;
    dateFin;
    constructor (pIntitule = "",pDatedebut,pDatefin ){
        this.intitule = pIntitule;
        this.listStagiaire = [];
        this.dateDebut = pDatedebut;
        this.dateFin = pDatefin;
    }
    ajouterStagiaire(stagiaire){
        this.listStagiaire.push(stagiaire)
    }
}