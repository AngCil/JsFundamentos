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

function imprimirNombreMayus(persona){
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreMayus(david);
imprimirNombreMayus(dario);
// imprimirNombreMayus({nombre: 'Pepito'});