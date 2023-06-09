// Array original
let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];

// Nuevo elemento a agregar
let nuevoElemento = 'The Coding Dead';

// Agregar el nuevo elemento al final del array usando push()
seriesPending.push(nuevoElemento);

// Verificar el nuevo contenido del array
console.log(seriesPending);

// Iterar a través de la matriz usando un bucle for
for (let i = 0; i < seriesPending.length; i++) {
    // Obtener el elemento en el índice actual
    let elemento = seriesPending[i];

    // Imprimir el índice y el elemento utilizando console.log()
    console.log('Índice:', i, 'Elemento:', elemento);

    // Verificar si el elemento es "Boolean 99"
    if (elemento === 'Boolean 99') {
        console.log('¡Lo encontré!');
    }
}

// Declarar e inicializar una variable seriesWatching con una matriz vacía
let seriesWatching = [];

// Eliminar el primer elemento de seriesPending y agregarlo al final de seriesWatching
seriesWatching.push(seriesPending.shift());

// Imprimir la longitud de ambas matrices
console.log('Longitud de seriesPending:', seriesPending.length);
console.log('Longitud de seriesWatching:', seriesWatching.length);

// Bucle que se ejecuta 4 veces
for (let i = 0; i < 4; i++) {
    // Eliminar el primer elemento de seriesPending y agregarlo a seriesWatching
    seriesWatching.push(seriesPending.shift());
}

// Imprimir la longitud de ambas matrices después del bucle
console.log('Longitud de seriesPending después del bucle:', seriesPending.length);
console.log('Longitud de seriesWatching después del bucle:', seriesWatching.length);

// Usar el método .splice() para eliminar todos los elementos de seriesWatching
seriesWatching.splice(0, seriesWatching.length);

// Imprimir la longitud de seriesWatching después de eliminar los elementos
console.log('Longitud de seriesWatching después de eliminar los elementos:', seriesWatching.length);