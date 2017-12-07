// Définir une variable voitureFelix
// qui a pour proprietes : 
// - marque
// - model
// - motorisation
// - etat (arret, avance, recul)
// et qui a methodes
// - getDescription() 
// qui renvoie marque+model+motorization+etat
// - avancer() : afficher "la voiture avance"
// apres: qui passe l'etat a avance
// - arreter() : afficher "la voiture arrete"
// - reculer() : afficher "la voiture recule"

let voitureFelix = {
    marque: "",
    model: "",
    motorisation : "",
    etat: "",
    etats: []
};

voitureFelix.marque = "Audi";
voitureFelix.model = "X";
voitureFelix.motorisation = "Y";

voitureFelix.getDescription = function (){
    return this.marque + " " 
                    + this.model + " "
                    + this.motorisation + " "
                    + this.etat;
}

voitureFelix.avancer = function() {
    //console.log("voiture avance");
    this.etat = "avance";
    return this.getDescription();
}
voitureFelix.arreter = function() {
    //console.log("voiture arrete");
    this.etat = "arreter";
    return this.getDescription();
}
voitureFelix.reculer = function() {
    //console.log("voiture recule");
    this.etat = "reculer";
    return this.getDescription();
}

voitureFelix.avancer();
console.log(voitureFelix.getDescription());

console.log("V2");

// V2 
let voitureFelix2 = {
    marque: "",
    model: "",
    motorisation : "",
    etat: 0,
    etats: [ "arret", "avance" , "recule"]
};

voitureFelix2.marque = "Audi";
voitureFelix2.model = "X";
voitureFelix2.motorisation = "Y";

voitureFelix2.getDescription = function (){
    return this.marque + " " 
                    + this.model + " "
                    + this.motorisation + " "
                    + this.etats[this.etat];
}

voitureFelix2.avancer = function() {
    this.etat = 1;
    return this.getDescription();
}
voitureFelix2.arreter = function() {
    this.etat = 0;
    return this.getDescription();
}
voitureFelix2.reculer = function() {
    this.etat = 2;
    return this.getDescription();
}

voitureFelix2.changeEtat = function(etat) {
    this.etat = etat;
};

console.log(voitureFelix2.getDescription());

voitureFelix2.changeEtat(1);
console.log(voitureFelix2.getDescription());
// avec 0 = arret, 1 = avance, 2 = recul

voitureFelix2.avancer();
console.log(voitureFelix2.getDescription());
voitureFelix2.reculer();
console.log(voitureFelix2.getDescription());
voitureFelix2.arreter();
console.log(voitureFelix2.getDescription());
