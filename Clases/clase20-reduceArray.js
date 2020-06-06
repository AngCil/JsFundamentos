var david = {
    nombre: 'David',
    apellido: 'Cilfone',
    edad: 18,
    altura: 1.9,
    cantLibros: 100
}
var dario = {
    nombre: 'Dario',
    apellido: 'Cilfone',
    edad: 38,
    altura: 1.74,
    cantLibros: 20
}
var martina = {
    nombre: 'Martina',
    apellido: 'Cilfone',
    edad: 11,
    altura: 1.50,
    cantLibros: 5
}
var maria = {
    nombre: 'Maria',
    apellido: 'Salcedo',
    edad: 18,
    altura: 1.78,
    cantLibros: 30
}
const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura < 1.8

var personas = [david,dario,martina,maria]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

const pasarAlturaACms = persona =>({
    ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

// var acum = 0
//
// for(var i = 0; i < personas.length; i++){
//     acum = acum + personas[i].cantLibros
// }

const reducer = (acum, { cantLibros }) => acum + cantLibros


var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)