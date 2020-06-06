var david = {
    nombre: 'David',
    apellido: 'Cilfone',
    edad: 18,
    altura: 1.78
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
var personas = [david,dario,martina,maria]

for (var i = 0; i<personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}mts`)
}