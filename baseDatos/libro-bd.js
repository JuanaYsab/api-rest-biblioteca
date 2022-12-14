const conexion = require('./../baseDatos/conexion');

async function insert(libro) {
    try {
        await conexion.execute('INSERT INTO libro(id, titulo, idautor, paginas) VALUES(?, ?, ?, ?)', [libro.id, libro.titulo, libro.idautor, libro.paginas]);
    } catch (err) {
        console.log('Error al insertar libro', err);
        throw err;
    }
}

async function select() {
    try {
        const [registro, campos] = await conexion.execute('SELECT * FROM vista_libro');
        return registro;
    } catch (err) {
        console.log('Error al consultar libro', err);
        throw err;
    }
}

async function update(libro){
    try{
        await conexion.execute('UPDATE libro SET titulo = ?, idautor = ?, paginas = ? WHERE id = ?',[libro.titulo, libro.idautor, libro.paginas, libro.id]);
    }catch(error){
        console.log('Error al editar libro');
        console.log(error);
        throw error;
    }
}


async function eliminar(id) {
    try {
        await conexion.execute(
            'DELETE FROM libro WHERE id= ?',
            [id]
        );
    } catch (err) {
        console.log('Error al eliminar libro', err);
        throw err;
    }
}

module.exports = { insert, select, update, eliminar }