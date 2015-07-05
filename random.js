// ESTE FICHERO ES EL FICHERO RANDOM.JS DEL PROYECTO
// https://github.com/jquemada/random DEL PROFESOR
// NO VOY A MODIFICARLO, VOY A AÑADIR UN FICHERO README.md
// Y UN FICHERO LICENSE.md TAL Y COMO INDICA EL EJERCICIO
// TRAS ESTO, LOS SUBIRÉ AL PROYECTO MI_RANDOM DE GITHUB

// Math.random() devuelve número aleatorio entre 0 y 1.
var numero = Math.random();

var str =' MAYOR que 0,5';

if (numero <= 0.5){
  str = ' MENOR que 0,5';
}

console.log('\n' + numero + str + '\n');
