const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

function categoriesFinder(movies) {   //voy a explicarlo un poco, por que me lié escribiendolo, y no he encontrado otra manera de hacerlo mas simple.

    let categorie = []; //primer array donde voy a almacenar todos los "categories"
    let finder = "";    //variable que voy a usar para usar luego en el segundo bucle
    

    for (let movie of movies) {
        if (finder !== movie.categories){    
            finder = movie.categories;
            categorie.push(finder);   //paso las "categories" al otro array
        }
    }

    let categories = []; // array final donde voy a guardar las categorías sin que se repitan

    for (let i = 0;i < categorie.length; i++) {    // segundo bucle para verificar cuales hay repetidas y pasarlas a "categories"
        for (let j = 0;j < categorie[i].length; j++){ // para poder verificar las dos categorias que hay en cada pelicula
            const genre = categorie[i][j];           // variable constante donde voy a guardar cada linea de categoría
            if (!categories.includes(genre)) {       
                categories.push(genre);
            }
        }
    }
    return categories;
}

console.log(categoriesFinder(movies));