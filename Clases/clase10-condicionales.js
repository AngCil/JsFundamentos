var david = {
    nombre: 'David',
    apellido: 'Cilfone',
    edad: 18,
    estudiante: true,
    developer: true,
    ingeniero: false,
    quimico: false
}
var martina = {
    nombre: 'Martina',
    apellido: 'Cilfone',
    edad: 11
}

function imprimirProfesiones(persona){
    console.log(persona.nombre +' es: ' );
    
    if(persona.estudiante) {
        console.log('Estudiante')
    }else{
        console.log('No es Estudiante')
    }
    if(persona.developer) {
        console.log('Developer')
    }else{
        console.log('No es Developer')
    }
    if(persona.ingeniero) {
        console.log('Ingeniero')
    }else{
        console.log('No es Ingeniero')
    }
    if(persona.quimico) {
        console.log('Quimico')
    }else{
        console.log('No es Quimico')
    }

}
function mayorDeEdad(persona){
    if(persona.edad>=18){
        console.log(`${persona.nombre} es mayor de edad`);
    }else{
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}