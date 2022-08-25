let cercle = new Cercle();

cercle.rayon = prompt("définir la valeur du rayon");

let surfaceA = cercle.surface();
let surfaceB = surfaceA.toFixed(2);

let perimetreA = cercle.perimetre();
let perimetreB = perimetreA.toFixed(2);

if(cercle.rayon >= 1){
    alert(`le cercle de rayon ${cercle.rayon} cm pour surface ${surfaceB} cm2. Son périmètre est de ${perimetreB} cm`);
}else{
    alert("Merci de definir une valeur");
}