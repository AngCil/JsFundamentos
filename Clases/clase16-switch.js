var signo = prompt('¿Cual es tu signo?')

if (signo=== 'acuario'){
    console.log(signo)
}

switch(signo){
    case 'aries':
        console.log('Recuerde que la sabiduría es su mejor aliada. Hoy intente cuidar sus palabras y no se involucre en situaciones malintencionadas de las que podría salir lastimado.')
    break
    case 'tauro':
        console.log('Procure no ceder frente a las influencias externas a su vida cotidiana, ya que muchas de las mismas pueden llegar perjudicarlo en la vida.')
    break
    case 'geminis':
    case 'géminis':
        console.log('Intente no cometer ningún error a causa de su impaciencia. Antes que nada, relájese y podrá conseguir lo que se proponga sin ningún problema.')
    break
    case 'cáncer':
    case 'cancer':
        console.log('Intente no dejar cosas sin resolver. Tampoco permita que conflictos antiguos de su vida se vayan acumulando en su interior, actué cuanto antes.')
    break
    case 'leo':
        console.log('Aprenda que en la vida, siempre la perseverancia será la llave para que usted pueda lograr los objetivos o proyectos que se ha fijado a corto plazo.')
    break
    case 'virgo':
        console.log('Prepárese, ya que en estos días se le acentuará su capacidad imaginativa y fantasiosa en todos los proyectos que deba emprender. Aproveche y haga uso de ellas.')
    break
    case 'libra':
        console.log('Sepa que siempre que conserve sus convicciones y afiance su paciencia, no perderá el rumbo y conseguirá el objetivo que se propuso en la vida.')
    break
    case 'escorpio':
        console.log('Manténgase firme en sus pensamientos. En caso de que deba tomar una decisión, piénselo bien, ya que puede actuar erróneamente. Avance de manera prudente.')
    break
    case 'sagitario':
        console.log('Manténgase firme en sus pensamientos. En caso de que deba tomar una decisión, piénselo bien, ya que puede actuar erróneamente. Avance de manera prudente.')
    break
    case 'capricornio':
        console.log('Aproveche que su mente estará activa y podrá incrementar la inteligencia. De esta forma, podrá realizar cualquier actividad sin hacer mucho esfuerzo.')
    break
    case 'acuario':
        console.log('Etapa propicia para abandonar sus aires de grandeza. Intente no mostrar su inseguridad, ya que generará que los demás se alejen de usted sin avisarle.')
    break
    case 'piscis':
        console.log('Seguramente en este día, se despierte con muy pocas ganas de cumplir con las responsabilidades diarias. Entienda que no es momento para decaer.')
    break
    default:
        console.log('No has elegido un signo valido')
    break
}
