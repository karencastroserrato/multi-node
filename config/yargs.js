const objetos = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola las tablas de multiplicar', objetos)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', objetos)
    .help()
    .argv;

module.exports = {
    argv,
}