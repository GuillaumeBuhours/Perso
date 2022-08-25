class Rectangle
{
    longueur;
    largeur;
    constructor(longueur, largeur){
        this.largeur = largeur;
        this.longueur = longueur;
    }
    surface(){
        return (this.largeur * this.longueur);  
    }
    perimetre(){
        return ((this.largeur *2) + (this.longueur * 2))
    }
}