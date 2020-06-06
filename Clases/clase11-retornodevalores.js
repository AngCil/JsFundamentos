var david = {
    nombre: 'David',
    apellido: 'Cilfone',
    edad: 18,
    estudiante: true,
    developer: true,
    ingeniero: false,
    quimico: false
}
var dario = {
    nombre: 'Dario',
    apellido: 'Cilfone',
    edad: 12
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}
function mayorDeEdad(persona){
    if(esMayorDeEdad){
        console.log(`${persona.nombre} es mayor de edad`);
    }else{
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}