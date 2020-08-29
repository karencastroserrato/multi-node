const argv = require('./config/yargs').argv;
const colors = require('colors');
const { error } = require("console");
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    default:
        console.log('No existe este comando en new feature');
}

//const yargs = require("yargs");
//const { command } = require("yargs");

//let base = '8';

/* let argv2 = process.argv;
console.log('Limite', argv.limite, 'Base', argv.base); */

/* let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base); */

/* crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));  */