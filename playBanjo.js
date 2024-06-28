// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

//Español
// Crea una función que responda a la pregunta "¿Tocas el banjo?".
// Si tu nombre empieza por la letra "R" o "r" minúscula, ¡estás tocando el banjo!
// La función toma un nombre como único argumento y devuelve una de las siguientes cadenas:
// nombre + " toca el banjo" 
// nombre + " no toca el banjo"
// Los nombres dados son siempre cadenas válidas.

let names = ['Adam','Paul','Ringo','bravo','rolf'] //declaramos la variable junto con los nombres a evaluar

//solucion con map y lowercase
function whoPlaysbanjo(names) {
    return names.map(name => {
      if (name[0].toLowerCase() === 'r') {
        return name + ' plays banjo';
      } else {
        return name + ' does not play banjo';
      }
    });
  }
  let results = whoPlaysbanjo(names);
  console.log(results);

