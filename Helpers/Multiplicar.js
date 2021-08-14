const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, listar, hasta) => {

    try {
           
        let salida = '', consola = '';

        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.magenta} ${i} ${'='.magenta} ${base*i}\n`;
        }

        if(listar == true){
            console.log(colors.rainbow('========================'));
            console.log(colors.cyan(`     Tabla del ${base}`));
            console.log(colors.rainbow('========================'));
            console.log(consola);
        }

        fs.writeFileSync(`./Salida/Tabla del ${base}.txt`, salida)
        return `Tabla del ${base}.txt`.brightCyan;
            
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    // crearArchivo: crearArchivo
    crearArchivo
}