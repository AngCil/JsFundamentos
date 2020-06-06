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
var martina = {
    nombre: 'Martina',
    apellido: 'Cilfone',
    edad: 11
}

const MAYORIA_DE_EDAD = 18



// const esMayorDeEdad = function (persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD


function mayorDeEdad(persona){
    if(persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad`);
    }else{
        console.log(`${persona.nombre} no es mayor de edad`);
    }
}

// const permitirAcceso = persona => {if(!esMayorDeEdad(persona)) {console.log('ACCESO DENEGADO')}}  
const permitirAcceso = persona => !esMayorDeEdad(persona) //Devuelve si es true o false