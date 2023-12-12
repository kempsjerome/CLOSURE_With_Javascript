/* Définition de la fonction greeting qui prend un paramètre "greet"
function greeting(greet) {
    // La fonction interne prend un paramètre "name" et affiche la salutation complète
    return function(name) {
        console.log(`${greet} ${name}`);
    };
}

// Appel de la fonction greeting avec l'argument "Hi" et assignation du résultat à la variable greetingSon
let greetingSon = greeting("Hi");

// Appel de la fonction interne de greetingSon avec un argument "John"
greetingSon("kemps"); // Cela affichera "Hi John" dans la console
*/


/*const countNumber = function () {
    let count = 0;
    return function () {
        count++;
        console.log(`${count} number`);
    };
};

// Créer une instance de la fonction retournée
let counter = countNumber();

// Appeler la fonction retournée plusieurs fois
counter();
counter();
counter();
*/

var createFunction = function () {
    var arayy = [];

    // La boucle crée trois fonctions et les ajoute au tableau arayy
    for (let i = 0; i < 3; i++) {
        // Chaque fonction utilise une fonction fléchée qui affiche la valeur actuelle de i
        arayy.push(() => console.log(i));
    }

    // Retourne le tableau contenant les trois fonctions
    return arayy;
}

// Appelle la fonction createFunction et stocke le tableau de fonctions retourné dans la variable arr
let arr = createFunction();

// Appelle la première fonction du tableau (indice 0)
arr[0](); // Affichera la valeur de i lors de la dernière itération de la boucle (dans ce cas, 3)
arr[1](); // Affichera également 3, car i est partagé entre toutes les fonctions dans le tableau
arr[2](); // De même, affichera 3
/*
L'important à noter ici est que les fonctions ajoutées au tableau 
capturent la variable i, mais elles partagent toutes la même référence
 à la même variable i. Par conséquent, lorsque vous appelez ces fonctions
  après la fin de la boucle, elles utiliseront la valeur finale de i 
  (qui est 3 dans ce cas). Cela peut causer une surprise
   si vous vous attendez à ce que chaque fonction imprime une valeur différente de i.

*/

