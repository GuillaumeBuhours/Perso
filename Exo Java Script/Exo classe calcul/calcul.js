class Calcul
{
    chiffreA;
    chiffreB;
    constructor(chiffreA, chiffreB){
        this.chiffreA = parseInt(chiffreA);
        this.chiffreB = parseInt(chiffreB);
    }
    addition(){
        return this.chiffreA + this.chiffreB;
    }
    multiplication(){
        return this.chiffreA * this.chiffreB;
    }
}