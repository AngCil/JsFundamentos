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
const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = david.peso -3
var dias = 0

while (david.peso > META) {

    if(comeMucho()){
        aumentarDePeso(david)
    }
    if(realizaDeporte()){
        adelgazar(david)
    }
    dias += 1
}


console.log(`Pasaron ${dias} días hasta que ${david.nombre} adelgazó 3 kg`)
