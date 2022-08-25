class Salarie
{
    prenom;
    nom;
    th;
    nmbh;
    constructor(nom = "", prenom = "", th = parseInt(), nmbh = parseInt()){
        this.nom = nom.toUpperCase();
        this.prenom = prenom;
        this.th = th;
        this.nmbh = nmbh;
    }
    salaireHebdo(){
        return (this.th * this.nmbh);
    }
    salaireMensuel(){
        return (this.th * 140);
    }
}