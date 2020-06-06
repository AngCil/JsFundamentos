var david = {
    nombre: 'David',
    apellido: 'Cilfone',
    edad: 18,
    altura: 1.9
}
var dario = {
    nombre: 'Dario',
    apellido: 'Cilfone',
    edad: 38,
    altura: 1.74
}
var martina = {
    nombre: 'Martina',
    apellido: 'Cilfone',
    edad: 11,
    altura: 1.50
}
var maria = {
    nombre: 'Maria',
    apellido: 'Salcedo',
    edad: 18,
    altura: 1.78
}

// const esAlta = persona => persona.altura > 1.8
const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura < 1.8

var personas = [david,dario,martina,maria]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
// var personasAltas = personas.filter(function(persona){
//     return persona.altura > 1.8
// })

console.log(personasAltas)
console.log(personasBajas)
