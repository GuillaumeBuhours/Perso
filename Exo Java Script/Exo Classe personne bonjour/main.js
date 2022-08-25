let nom = prompt('Merci de définir votre nom');
let prenom = prompt('Merci de définir votre prénom')

let personne = new Personne(nom, prenom);

alert(personne.salutation());
console.log(personne);