console.log("on the road again");

// Declaration de variables
var a = 2;
var b = 3;
var somme = a+b;
console.log(somme);
console.log(a*b);

// Objet 
var client = { "prenom": "frederique", "lunettes": null, "type":3 };
console.log(client);
console.log(client.prenom);
console.log(client["prenom"]);

var prenom = client.prenom;
console.log(prenom);

// Structures de controles
if ( client.lunettes == true ) 
{
		console.log("ATTENTION LUNETTES !");
}
else if ( client.lunettes == false )
{
		console.log("pas de lunettes tout va bien ...");
}
else 
{
		console.log("inconnu");
}

// Switch / case
switch (client.type){
	case 0:
		console.log("ceci est un prospect");
		break;
	case 1: 
		console.log("ceci est un client");
		break;
	case 2: 
		console.log("ceci est un VIP");
		break;
	case 3:
		console.log("ceci est un ex-client");
		break;
}	

// Concaténation
console.log("a"+"b");

// Boucle While
var i=0;
while(i <= 10)
{
	console.log("j'en suis a " + i);
	i=i+1;
}

var j=0;
j++; // j=j+1
console.log(j);
console.log(j++);
console.log(++j);
console.log("==");
j--;
console.log(j);
console.log("j="+j);
console.log(j++);
console.log("j="+j);
j+=2; // j=j+2
console.log(j);
j-=5;
console.log(j);
j*=10;
console.log(j);

j=10;

do 
{
	console.log(j++);
} while(j < 10);

{
		console.log("a");
}

// Boucle for 
for (var i=0; i < 10; i++)
{
	console.log("i=" + i);
}

// Boucle for inversee
for (var i=10; i > 0; i--)
{
	console.log("i=" + i);
}

