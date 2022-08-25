class Cercle
{
    rayon;
    constructor(rayon) {
        this.rayon = rayon;
    }
    surface(){
        return ((this.rayon * this.rayon) *Math.PI);
    }
    perimetre(){
        return ((this.rayon * 2) *Math.PI);
    }
}