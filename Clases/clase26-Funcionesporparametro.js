class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
        //this.edad = 20 podemos generar nosotros los parametros
    }
    saludar(fn){
        var { nombre, apellido } = this

        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn){
            fn(nombre, apellido)
        }
    }
    soyAlto(){
        return this.altura > 1.8
    }
}
class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        // var nombre = this.nombre
        // var apellido = this.apellido
        var { nombre, apellido } = this

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a `)
        if (fn){
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah mirá, no sabia que eras desarrollador/a`)
    }
}



var david = new Desarrollador('David', 'Cilfone', 1.90)
var dario = new Persona('Dario', 'Cilfone', 1.80)
var martina = new Persona('Martina', 'Cilfone', 1.70)

david.saludar(responderSaludo)
dario.saludar(responderSaludo)
martina.saludar()