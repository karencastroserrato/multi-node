/* Required */

const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');
const { rejects } = require('assert');
const { create } = require('domain');
const { argv } = require('process');

let listarTabla = (base, limite = 10) => {
    console.log('========================'.green);
    console.log('==Tabla de multiplicar=='.green);
    console.log('========================'.green);
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El dato ${base} ingresado no es un numero`)
            return;
        }

        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;

        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base} hasta el ${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`La tabla del ${base} hasta el ${limite}.txt`.red);

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}