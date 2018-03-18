const users = [];

function Utilisateur(nom, prenom, age){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.bonjour = function() {
        return "bonjour" + this.nom + " " + this.prenom;
    };
    this.ligneTableau = function () {
        return "<tr><td>" + this.nom + "</td><td>" + this.prenom + "</td><td>" + this.age + "</td></tr>";
    }
}

function UserManager() {
    this.users = [];
    this.ajoute = function(user) {
        this.users.push(user);
    }
    this.dessine = function (tab){
        tab.innerHTML = "";
        for (let index = 0; index < this.users.length; index++) {
            const element = this.users[index];
            tab.innerHTML += element.ligneTableau();
        }
    }
}

const userManager = new UserManager();

document.querySelector("#addUserBtn").onclick = function (){
    const user = new Utilisateur(document.querySelector("#nom").value, document.querySelector("#prenom").value, document.querySelector("#age").value)
    userManager.ajoute(user);
    userManager.dessine(document.querySelector("#tabData"));
}