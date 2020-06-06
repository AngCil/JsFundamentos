function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    //this.edad = 20 podemos generar nosotros los parametros
}

Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}

var david = new Persona('David', 'Cilfone', 1.90)
var dario = new Persona('Dario', 'Cilfone', 1.80)
var martina = new Persona('Martina', 'Cilfone', 1.70)