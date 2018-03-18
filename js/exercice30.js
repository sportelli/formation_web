function Utilisateur(nom, prenom, age){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.ville = "nice";
    this.presenteToi = function() {
        return this.nom + " " + this.prenom 
            + " (" + this.ville + ")";
    };
}

const felix = new Utilisateur("sportelli", "felix" , 32);
const aurelie = new Utilisateur("sportelli", "aurelie" , 31);

console.log(felix.age);
console.log(aurelie.age);
console.log(felix.ville);
console.log(felix.presenteToi());

/*
felix.disMonNom = function(){
    return this.nom.toUpperCase();
}

console.log(felix.disMonNom());
console.log(aurelie.disMonNom());
*/

Utilisateur.prototype.disMonNom = function(){
    return "JE SUIS " + this.nom.toUpperCase();
};

console.log(felix.disMonNom());
console.log(aurelie.disMonNom());

Utilisateur.prototype.pays = "France";

console.log(felix.pays);
console.log(aurelie.pays);