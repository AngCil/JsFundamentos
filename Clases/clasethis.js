const david = {
    nombre: 'David',
    apellido:'Cilfone',
    edad: 18
}

function saludar(){
    console.log(`Hola, mi nombre es ${this.nombre}`)
}