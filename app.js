const argv = require('./Config/Yargs');
const {crearArchivo} = require('./Helpers/Multiplicar');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado exitosamente!!'))
    .catch(error => console.log(error));