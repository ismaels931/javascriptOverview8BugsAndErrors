console.log("Los errores se pueden clasificar en confusiones de los pensamientos y los causados mientras se convierte");
console.log("un pensamiento en código.")
console.log();
console.log("El concepto de variables y propiedades de JS es impreciso porque pocas veces detecta errores tipográficos");
console.log("antes de ejecutar un programa. Y permite procesar expresiones absurdas del tipo true * mono. Sin embargo,");
console.log("JS se queja cuando no se respeta la gramática del lenguaje. También se queja cuando se llama a una cosa que");
console.log("no es una función o cuando se busca una propiedad con un valor indefinido (undefined). Pero normalmente,");
console.log("el cálculo de tonterías produce NaN o undefined mientras el programa continua ejecutándose felizmente convencido");
console.log("de que está haciendo algo significativo. Es posible que está situación no desencadene ningún error pero hará");
console.log("que la salida del programa sea incorrecta en silencio. El proceso encotrar errores se denomina depurar.");
console.log();
console.log("JS se puede volver un poco más estricto si se activa el modo estricto. Esto se hace poniendo la cadena 'use strict'");
console.log("en la parte superior de un archivo o del cuerpo de una función e.g.");

function detectarProblema() {
	"use strict";
	for (counter = 0; counter < 10; counter++) console.log("happy " + counter);
}

console.log();
console.log("Si se llama a 'detectarProblema' con el modo estricto activado, lanzará un ReferenceError ya que counter no ha sido");
console.log("explícitamente declarada. No obstante, sin el modo estricto se ejecutaría felizmente.");
console.log();
console.log("Por otro lado, se puede acceder al objeto del contexto global mediante el keyword this desde una función lo que modifica");
console.log("el objeto del contexto global añadiendole una propiedad e.g.");

function Person(name) {
	//"use strict";
	this.name = name;
}

let ismael = Person("Ismael"); //Si el keyword new precede a la llamada a la función se evade el modo estricto
console.log(name);

console.log("Por lo tanto, en modo estricto ('use strict' al principio del documento o al principio del cuerpo de la función) el");
console.log("código de arriba lanzaría un error (typeError). De esta forma se pueden crear contextos aislados y evitar la polución");
console.log("del contexto global.");
console.log();
console.log("En resumen poner 'use strict' al principio de un programa ayuda a detectar problemas.");
console.log();
console.log("Algunos errores en los programas lo provocan una mala utilización de los tipos de datos. En algunos lenguajes como c++ o");
console.log("Java se tiene que definir el tipo de las variables y de las funciones de un programa (tipado estático). En JS, esto no");
console.log("es necesario ya que JS solo considera los tipos de datos cuando se está ejecutando el programa e incluso intenta convertir");
console.log("implícitamente algunos valores al tipo que se espera e.g. en una igualdad simple '=='. Para aclararse con los tipos de datos");
console.log("en un programa JS se pueden usar comentarios e.g.");

// (VillageState, Array) → {direction: string, memory: Array}

console.log();
console.log("Existen varias convenciones para definir los tipos de datos de un programa en JS. También existen algunos dialectos");
console.log("de JS que añaden tipado estático al lenguaje. El más famoso es TypeScript.");
console.log();
console.log("Dado que el propio lenguaje no hace mucho por ayudarnos a encotrar errores, tendremos que buscar otras vías. Una forma");
console.log("es mediante una prueba automatizada que consiste en escribir un programa que prueba otro programa. Otra forma, consiste");
console.log("en escribir entradas para el programa que consideren varias casuísticas e.g.");

function test(label, body) {
	if (!body()) console.log(`Failed: ${label}`);
	else console.log(`${label} done!`);
}

test("convert Latin text to uppercase", () => {
	return "hello".toUpperCase() == "HELLO";
});

test("convert again Latin text to uppercase", () => {
	return "hello".toUpperCase() == "HELLo";
});

console.log();

console.log("A veces es obvio encontrar el error de un programa. El mensaje de error apuntará a una línea concreta del programa. Pero");
console.log("otras veces la línea que desencadena el error es el primer lugar en el que un valor áspero producido en otro lugar se utiliza");
console.log("de una forma no válida.");
console.log();
console.log("El siguiente programa intenta convertir un número entero en una cadena en una base determinada (decimal, binario...)");
console.log("escogiendo repetidamente el último dígito y dividiendo el número para eliminar este dígito. Pero la extraña salida que");
console.log("produce sugiere un error e.g.");

function numberToString(n, base = 10) {
	let result = "", sign = "";
	if (n < 0) {
		sign = "-";
		n = -n;
	}
	do {
		console.log(n);
		result = String(n % base) + result;
		//n /= base;
		n = Math.floor(n / base);
	} while (n > 0);
	return sign + result;
}

console.log("console.log(numberToString(13, 10))");

console.log();

console.log("Este programa no funciona como esperamos. Para arreglarlo lo ideal es analizar lo que está pasando, elaborar alguna teoría");
console.log("y resistirse a hacer cambios aleatorios en el código. A continuación, hacer observaciones para probar la teoría. Colocar");
console.log("estratégicamente algunas llamadas a console.log para obtener algo de información adicional sobre lo que hace el programa");
console.log("(chivatos) e.g. al principio del bucle para ver los valores que va tomando la variable n.");
console.log();
console.log("Gracias al chivato colocado arriba, podemos observar que n toma valores con decimales. Eso es lo que provoca el error");
console.log("ya que lo que queremos es que n solo tome valores enteros. Se puede arreglar añadiendo Math.floor");
console.log();
console.log("Existe otra forma de depurar un programa que consiste en añadir breakpoints en el programa. Estos breakpoints interrumpen");
console.log("momentáneamente la ejecución del programa en una línea determinada lo que permite analizar el estado del código. Esta");
console.log("herramienta la incluyen algunos navegadores web o se pueden encontrar por Internet.");

console.log();

console.log("A veces los programas no consideran todas las entradas posibles i.e. no son robustos. Supongamos que tenemos una función");
console.log("promptNumber que le pide al usuario que introduzca un número y luego lo retorna. ¿Qué retornaría si el usuario introduce");
console.log("'taronja'? Una opción es hacer que retorne un valor especial como null, undefined o -1 e.g.");

function promptNumber(question) {
	let result = Number(prompt(question));
	if (Number.isNaN(result)) return null;
	return result;
}

console.log("console.log(promptNumber('How many trees do you see?'))");
console.log();
console.log("El valor retornado indica al usuario que no se ha podido realizar la operación. Ahora para recuperarse de esta situación");
console.log("la función podría indicar al usuario que vuelva a introducir el valor o indicarle que el valor introducido no es correcto.");
console.log();
console.log("Otra alternativa para informar al usurio del éxito o el fracaso consiste en envolver el resultado en un objeto e.g.");

function lastElement(array) {
	if (array.length == 0) return {failed: true};
	else return {element: array[array.length - 1]};
}

console.log("console.log(lastElement([1,2,3,5,7,11]))");
console.log("console.log(lastElement([]))");
console.log("console.log(lastElement(10))");

console.log();

console.log("Cuando una función no puede continuar con normalidad, lo ideal sería detener lo que está haciendo y saltar a un");
console.log("lugar que sepa manejar el problema. Esto es lo que hace la manipulación de excepciones. Las excepciones son un");
console.log("mecanismo que hacen posible que un código que tiene problemas levante (o lance) una excepción (valga la redundancia).");
console.log("Cuando se detecta una excepción se puede hacer algo por solucionar el problema y continuar ejecutando el programa e.g.");

function promptDirection(question) {
	let result = prompt(question);
	if (result.toLowerCase() == "left") return "L";
	if (result.toLowerCase() == "right") return "R";
	throw new Error("Invalid direction: " + result);
}

function look() {
	if (promptDirection("Which way?") == "L") return "a house";
	else return "two angry bears";

	/*try {
		console.log("You see", look());
	}
	catch (error) {
		console.log("Something went wrong: " + error);
	}*/
}

function llamarLook() {
	try {
		console.log("You see", look());
	}
	catch (error) {
		console.log("Something went wrong: " + error);
	}
}

console.log();
console.log("Si se llama recursivamente a la función look como en el ejemplo, levanta la excepción pero no se ejecuta el bloque");
console.log("catch. Una opción es arreglarlo mediante la función llamarLook.");
console.log("La keyword throw se utiliza para levantar la excepción. Para capturarla se utiliza la palabra clave catch seguida de");
console.log("un bloque de código. Cuando el bloque de la keyword try provoca que se genere una excepción que evalúa el bloque catch,");
console.log("con el nombre entre paréntesis (error) ligado al valor de la excepción. En este caso hemos utilizado un constructor");
console.log("estándar de JS (Error) que crea un objeto con el atributo del mensaje. Las instancias de este constructor también");
console.log("recogen información sobre la pila de llamadas que existía cuando se genero la excepción, denominada traza de la pila.");
console.log("La traza puede ser útil para depurar un problema: indica la función en la que se ha producido el error y que funciones");
console.log("han hecho la llamada fallida.");

console.log();

console.log("Las excepciones son otro tipo de flujo de control. Estas pueden subsanar algunos de los efectos secundarios de un código");
console.log("e.g.");

//Cuentas bancarias
const accounts = {
	a: 100,
	b: 0,
	c: 20
};

function getAccount() {
	let accountName = prompt("Enter an account name");
	if (!accounts.hasOwnProperty(accountName)) throw new Error(`No such account: ${accountName}`);
	return accountName;
}

function transfer(from, amount) {
	if (accounts[from] < amount) return;
	accounts[from] -= amount;
	accounts[getAccount()] += amount;
}

console.log("La función transfer transfiere una suma de dinero de una cuenta a otra, solicitando el nombre de la otra cuenta");
console.log("en el proceso. Si se introduce un número de cuenta no válido, getAccount levanta una excepción. Pero la función");
console.log("transfer primero resta la cantidad de dinero a transferir de la cuenta origen y luego llama a getAccount. Esta");
console.log("función se podría haber escrito de forma más inteligente, llamando primero a getAccount. También hay otra forma,");
console.log("utilizando la esctructura try/finally. Un bloque finally ejecuta el código de su cuerpo pase lo que pase después");
console.log("de que se ejecute el bloque try e.g.");

function improveTransfer(from, amount) {
	if (accounts[from] < amount) return;
	let progress = 0;
	try {
		accounts[from] -= amount;
		progress = 1;
		accounts[getAccount()] += amount;
		progress = 2;
	}
	finally {
		if (progress == 1) accounts[from] += amount;
	}
}

console.log("Si progress es igual 1, es decir, progress no es igual a 2 porque la llamada a getAccount a levantado una excepción");
console.log("devuelve la cantidad (amount) sustraída de la cuenta origen (from) a la cuenta origen.");

console.log();

console.log("Cuando un excepción llega al final de la pila sin ser capturada (catch) el entorno la gestiona. Normalmente, los");
console.log("navegadores escriben una descripción del error en la consola JS. Node.js, el entorno JS sin navegador, aborta todo");
console.log("el proceso cuando no se gestiona una excepción.");
console.log("Hacer una referencia a una variable inexistente, buscar una propiedad nula o llamar a algo que no sea una función");
console.log("también genera una excepción y también se pueden capturar. Cuando usamos la estructura try/catch todo lo que sabemos");
console.log("es que algo causa una excepción en el cuerpo try pero no sabemos el tipo de excepción que causa. JS no proporciona");
console.log("un soporte directo para la captura selectiva de excepciones: o se capturan todas o ninguna. A continuación se muestra");
console.log("un ejemplo que intenta llamar a promptDirection hasta obtener una respuesta válida");

function buclePersistente() {
	for (;;) {
		try {
			let dir = promptDirection("Where?");
			console.log("You chose ", dir);
			break;
		}
		catch (e) {
			console.log("Not a valid direction. Try again.");
		}
	}
}

console.log("buclePersistente()");

console.log("El bloque catch del código de arriba captura cualquier excepción, sea del tipo que sea (e). Si lo que queremos es capturar");
console.log("una excepción específica, una opción es definir un nuevo tipo de error (Error) y usar 'instanceof' para identificarlo e.g.");

class InputError extends Error {}

function otherPromptDirection(question) {
	let result = prompt(question);
	if (result.toLowerCase() == "left") return "L";
	if (result.toLowerCase() == "right") return "R";
	throw new InputError("Invalid direction: " + result);
}

console.log("La clase 'InputError' es una subclase de 'Error', por eso hereda su constructor que espera una cadena (mensaje) como");
console.log("argumento. La clase 'InputError' per se no hace nada en particular porque esta vacía pero facilita la identificación");
console.log("de la excepción que representa e.g.");

function otroBuclePersistente() {
	for(;;) {
		try {
			let dir = otherPromptDirection("Where?"); // ← typo!
			console.log("You chose ", dir);
			break;
		}
		catch (e) {
			if (e instanceof InputError) console.log("Not a valid direction. Try again.");
			else throw e;
		}
	}
}

console.log("otroBuclePersistente()");

console.log("Las aserciones son comprobaciones dentro de un programa que verifican que algo es de la forma que supone que es. Se");
console.log("usan para encontrar errores introducidos por el programador e.g. si la función firstElement se decribe como una función");
console.log("que nunca se tendría que llamar con un array vacío, se puede escribir así:");

function otherFirstElement(array) {
	if (array.length == 0) throw new Error("otherFirstElement called with []");
	return array[0];
}

console.log("otherFirstElement([]);");

console.log("Ahora en lugar de retornar un valor indefinido silenciosamente, generará un error cuando se haga un uso indebido. Esto");
console.log("hace que sea menos probable que algunos errores pasen desapercibidos y sea más fácil encontrar su causa.");

console.log();

console.log("Retry");

class MultiplicatorUnitFailure extends Error {}

function primitveMultipliply(a, b) {
	if (Math.random() < 0.2) return a * b;
	throw new MultiplicatorUnitFailure("Klunk");
}

function reliableMultiply(a, b) {
	for (;;) {
		try {
			//Usar return o asignar el valor retornado en una variable y retornar la variable
			return primitveMultipliply(a, b);
			break;
		}
		catch(e) {
			if (e instanceof MultiplicatorUnitFailure) console.log("La operación no ha funcionado");
			//Estaría bien añadir 'else throw e' para manejar excepciones diferentes
		}
	}
}

console.log("console.log(reliableMultiply(8,8));");
console.log("Solution: https://eloquentjavascript.net/code/#8.1");

console.log();

console.log("The locked box");

const box = {
	locked: true,
	unlock() { this.locked = false ;},
	lock() { this.locked = true; },
	_content: [],
	get content() {
		if (this.locked) throw new Error("Locked!");
		return this._content;
	}
};

function withBoxUnlocked(body) {
	try {
		if (box.locked) box.unlock();
		body(box);
	}

	finally {
		box.lock();
	}
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

console.log("Solution: https://eloquentjavascript.net/code/#8.2");