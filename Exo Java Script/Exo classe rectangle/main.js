let rectangle = new Rectangle();

rectangle.largeur = prompt("définir la largeur");
rectangle.longueur = prompt("définir la longueur");

alert(`Votre surface est de ${rectangle.surface()} m² et votre périmètre est de ${rectangle.perimetre()} m`);