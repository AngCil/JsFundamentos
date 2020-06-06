var david = {
    nombre: 'David',
    apellido: 'Cilfone',
    edad: 18
}

var dario = {
    nombre: 'Dario',
    apellido: 'Cilfone',
    edad: 39
}

function imprimirNombre(persona){
    //var nombre = persona.nombre
    var { nombre } = persona;
    var { edad } = persona;
    console.log('Hola, me llamo '+nombre+ ' y tengo ' +edad+ ' años');
}

imprimirNombre(david);
imprimirNombre(dario);
// imprimirNombreMayus({nombre: 'Pepito'});