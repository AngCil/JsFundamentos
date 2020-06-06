class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
        //this.edad = 20 podemos generar nosotros los parametros
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto(){
        return this.altura > 1.8
    }
}
class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a `)
    }
}



// var david = new Persona('David', 'Cilfone', 1.90)
// var dario = new Persona('Dario', 'Cilfone', 1.80)
// var martina = new Persona('Martina', 'Cilfone', 1.70)