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


// 4.2
function removeItem(array, text) {
    const indexOfItem = findArrayIndex(array, text)

        if(indexOfItem !== -1){  //para que pueda borrarse el 0 tambien
            array.splice(indexOfItem, 1);
        }

    return array;
}

console.log(removeItem(mainCharacters, 'Luke'));