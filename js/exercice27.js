// Message au format JSON
// Javascript Object Notation
var message = '{"nom":"felix"}';

console.log(message);
console.log(message.nom); // indéfini

var utilisateur = JSON.parse(message);
console.log(utilisateur);
console.log(utilisateur.nom);

utilisateur.age = 32;
console.log(utilisateur); // Format JS

var messageAEnvoyer = JSON.stringify(utilisateur);
console.log(messageAEnvoyer); // Format String (JSON)