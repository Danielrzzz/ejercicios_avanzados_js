const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, first_text, second_text) {   //voy a explicar el código por que me lié mucho haciéndolo

    let firstIndex = array.indexOf(first_text);   //guardo el index de la primera y segunda palabra
    let secondIndex = array.indexOf(second_text);

    if(firstIndex !== -1 && secondIndex !== -1) { // si el index es mayor que -1 en los dos (confirmar que existan)
        let firstValue = array[firstIndex];     // creo dos variables para guardar el valor de los valores, guiandome por el index guardado antes
        let secondValue = array[secondIndex];
        array.splice(firstIndex, 1, secondValue);  //uso splice para cambiar de lugar a cada uno por el otro
        array.splice(secondIndex, 1, firstValue);
    }
    return array;
}

console.log(swap(fantasticFour, "Mr. Fantástico", "La cosa"));