var david = {
    nombre: 'David',
    apellido: 'Cilfone',
    edad: 18,
    peso: 85
}
console.log(`Al inicio del año ${david.nombre} pesa ${david.peso}kg`)

// function aumentarDePeso(persona){
//     return persona.peso +=200
// }
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
    var random =Math.random()

    if (random < 0.25){
        aumentarDePeso(david)
    } else if(random < 0.5){
        adelgazar(david)
    }
}

console.log(`Al inicio del año ${david.nombre} pesa ${david.peso.toFixed(2)}kg`)
