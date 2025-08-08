function findArrayIndex(array, text) {
    for(let i=0; i < array.length; i++){
        if (text === array[i]){
            return i;
        } 
    }
    return "That character is not in the array";
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, 'Anakin'));

