console.log('OK')
const sumAll = (...numbers) =>{
	let result = 0
	numbers.forEach(num => result += num)
	return console.log(result)
}

sumAll(1,2,3,4) // :10


// FUNCIÓN POR EXPRESIÓN
// Pueden ser almacenadas en variables o constantes.
const log = console.log


// FUNCIÓN CALLBACKS
// Puede ser pasadas como argumentos de otra función.
const add = (a,b) => a+b
log(add(add(10,6), 4)) // :20


// FUNCIÓN CLOSURES
// Pueden ser retornadas por otra función. Una función en vez de retornar un valor puede retornar una función.
function sumar(x) {
	return function(y) {
		return x + y
	}
}
log(sumar(10)(20)) // :30


const sum = x => y => x+y
log(sum(10)(30)) // :40


function aumentar(){
	let numero = 0
	return function(){
		numero++
		log(numero)
	}
}

const i = aumentar()
i()
i()