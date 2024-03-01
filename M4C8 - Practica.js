const myList = ["velma", "scout", "jane", "john", "harry"];


//  Cree un bucle for en JS que imprima cada nombre de esta lista.
for (i = 0; i < myList.length; i++) {
    console.log(myList[i]);
}


//  Cree un bucle while que recorra la misma lista e imprima también los nombres. 
let i = 0;
while (i < myList.length) {
  console.log(myList[i]);
  i++;
}


//  Cree una función de flecha que devuelva "Hello World".
saludo = () => console.log('Hello World');