//////////////////////////////////////////////////////////////////

/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

/* const contarCaracteres = (cadena = '') => {
  if (!cadena) {
    console.warn('No ingresaste ninguna  cadena')
  } else {
    console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
  }
} */

//1 arrow function con return implicito
const contarCaracteres = (cadena = '') =>
  !cadena ? console.warn('No ingresaste ninguna cadena') : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

contarCaracteres('cuantos caracteres tiene');

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
//2 arrow function con return implicito
const recortarTexto = (cadena = '', longitud = undefined) =>
  !cadena
    ? console.warn('No ingresaste una cadena de texto')
    : longitud === undefined
      ? console.warn('No ingresaste la longitud para recortar el texto')
      : console.info(cadena.slice(0, longitud));

recortarTexto('Texto recorte', 4);
recortarTexto();
recortarTexto('Texto recorte'); // nada
recortarTexto('', 5); // no ingresaste una cadena texto

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
//3 arrow function con return implicito
const cadenaAArray = (cadena = '', separador = undefined) =>
  !cadena
    ? console.warn('No ingresaste una cadena de texto')
    : separador === undefined
      ? console.warn('No ingresaste el caracter separador')
      : console.info(cadena.split(separador));

cadenaAArray('Lorem Ipsum dolor sit amt consectur', ' ');
cadenaAArray('Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic', ',');
cadenaAArray(); // no ingresaste una cadena de texto
cadenaAArray('Sin segundo parametro'); //SI no mando el segundo parametro. No ingresaste el caracter separador
cadenaAArray('', '-');

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
//4
const repetirTexto = (texto = '', veces = undefined) => {
  if (!texto) return console.warn('No ingresaste un texto');

  if (veces === undefined) return console.warn('No ingresaste el número de veces a repetir el texto'); // en una sola linea se pueden eliminar las llaves

  if (veces === 0) return console.error('El número de veces no puede ser 0'); // en una sola linea se pueden eliminar las llaves

  if (Math.sign(veces) === -1) return console.error('El número de veces no puede ser negativo'); // en una sola linea se pueden eliminar las llaves

  for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`); // en una sola linea se pueden eliminar las llaves
};

repetirTexto('Hola Mundo', 3);
repetirTexto('Hola mundo', 0);
repetirTexto('Hola mundo', -20);
repetirTexto('', 20);
repetirTexto('Hola Mundo');

////////////////////////////////////

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// 5
const invertirCadena = (cadena = '') =>
  !cadena ? console.warn('No ingresaste una cadena de texto') : console.info(cadena.split('').reverse().join(''));

invertirCadena();
invertirCadena('Hola Mundo');
invertirCadena('JavaScript es un lenguaje de progamación increíble');

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// 6
const textoEnCadena = (cadena = '', texto = '') => {
  if (!cadena) return console.warn('No ingresaste el texto largo');

  if (!texto) return console.warn('No ingresaste la palabra a evaluar');

  let i = 0,
    contador = 0;

  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces`);
};

textoEnCadena();
textoEnCadena('', 'mundo');
textoEnCadena('hola mundo adios mundo');
textoEnCadena('hola mundo adios mundo yolo mundo holi mundo chao mundo', 'mundo');

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// 7
const palindromo = (palabra = '') => {
  if (!palabra) return console.warn('No ingresaste una palabra o frase');

  palabra = palabra.toLocaleLowerCase();
  let alReves = palabra.split('').reverse().join('');

  return palabra === alReves
    ? console.info(`Sí es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}`)
    : console.info(`No es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}`);
};

palindromo();
palindromo('hola Mundo');
palindromo('SaLas');

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// 8
const eliminarCaracteres = (texto = '', patron = '') =>
  !texto
    ? console.warn('No ingresaste un texto')
    : !patron
      ? console.warn('No ingresaste un patrón de caracteres')
      : console.info(texto.replace(new RegExp(patron, 'ig'), '')); // i detecta mayusculas o minisculas, g no se detiene en la primera coincidencia. Segundo parametro del replace nada '' no quiero que lo remplaza con nada

eliminarCaracteres();
eliminarCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5, xyz');
eliminarCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5, xyz', 'xyz');

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const aleatorio = () => console.info(Math.round(Math.random() * 100) + 500); // Math devuelve un valor entre 0 y 1 con decimales. Round redondea de .5 lo sube y de .49 lo baja

aleatorio();

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = 0) => {
  if (!numero) return console.warn('No ingresaste un número');

  if (typeof numero !== 'number') return console.error(`El valor "${numero}" ingresado, NO es un número`);

  numero = numero.toString();
  let alReves = numero.split('').reverse().join();

  return numero === alReves
    ? console.info(`Sí es capícua, Número original ${numero}, Número al revés ${alReves}`)
    : console.info(`No es capícua, Número original ${numero}, Número al revés ${alReves}`);
};

capicua();
capicua('19');
capicua({});
capicua(2000);
capicua(2002);
capicua(18.99);
capicua(212.212);

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn('No ingresaste un número');

  if (typeof numero !== 'number') return console.error(`El valor "${numero}" ingresado, NO es un número`);

  if (numero === 0) return console.error('El número no puede ser 0');

  if (Math.sign(numero) === -1) return console.error('El número no puede ser negativo'); // sign devuelve un número 1 si es positivo y un numero -1 si es negativo el valor ingresado por el usuario

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    // factorial = factorial * i;
    factorial *= i;
  }

  return console.info(`El factorial de ${numero} es ${factorial}`);
};

factorial();
factorial('5');
factorial([1, 2, 3]);
factorial(0);
factorial(-5);
factorial(5);

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn('No ingresaste un número');

  if (typeof numero !== 'number') return console.error(`El valor "${numero}" ingresado, NO es un número`);

  if (numero === 0) return console.error('El número no puede ser 0');

  if (numero === 1) return console.error('El número no puede ser 1');

  if (Math.sign(numero) === -1) return console.error('El número no puede ser negativo'); // sign devuelve un número 1 si es positivo y un numero -1 si es negativo el valor ingresado por el usuario

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }

  return divisible ? console.log(`El número ${numero}, NO es primo`) : console.log(`El número ${numero}, Sí es primo`);
};

numeroPrimo();
numeroPrimo('320');
numeroPrimo(true);
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(-13);
numeroPrimo(13);
numeroPrimo(200);

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const numeroParImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn('No ingresaste un número');

  if (typeof numero !== 'number') return console.error(`El valor "${numero}" ingresado, NO es un número`);

  return numero % 2 === 0 ? console.info(`El número ${numero} es Par`) : console.info(`El número ${numero} es Impar`);
};

numeroParImpar();
numeroParImpar('23');
numeroParImpar(-6);
numeroParImpar(19);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined) return console.warn('No ingresaste grados a convertir');

  if (typeof grados !== 'number') return console.error(`El valor "${grados}" ingresado, NO es un número`);

  if (unidad === undefined) return console.warn('No ingresaste el tipo de grado a convertir');

  if (typeof unidad !== 'string') return console.error(`El valor "${unidad}" ingresado, NO es una cadena de texto`);

  if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn('Valor de unidad no reconocido');

  if (unidad === 'C') {
    return console.info(`${grados}°C = ${Math.round(grados * (9 / 5) + 32)}°F`);
  } else if (unidad === 'F') {
    return console.info(`${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`);
  }

  console.info('funciona');
};

convertirGrados();
convertirGrados('2');
convertirGrados(2);
convertirGrados(2, true);
convertirGrados(2, 'Hola');
convertirGrados(2, 'E');
convertirGrados(0, 'C');
convertirGrados(100, 'C');
convertirGrados(32, 'F');
// convertirGrados(2, 'F');

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined) return console.warn('No ingresaste el número a convertir');

  if (typeof numero !== 'number') return console.error(`El valor "${numero}" ingresado, NO es un número`);

  if (base === undefined) return console.warn('No ingresaste la base a convertir');

  if (typeof base !== 'number') return console.error(`El valor "${base}" ingresado, NO es un número`);

  if (base === 2) {
    return console.info(`El ${numero} base ${base} = ${parseInt(numero, base)} base 10`);
  } else if (base === 10) {
    return console.info(`El ${numero} base ${base} = ${numero.toString(base)} base 2`);
  } else {
    return console.error('El tipo de base a convertir NO es válido');
  }
};

convertirBinarioDecimal();
convertirBinarioDecimal('2');
convertirBinarioDecimal(100);
convertirBinarioDecimal(100, '2');
convertirBinarioDecimal(1110010, 2);
convertirBinarioDecimal(114, 10);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const aplicarDescuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn('No ingresaste el monto');

  if (typeof numero !== 'number') return console.error(`El valor "${monto}" ingresado, NO es un número`);

  if (monto === 0) return console.error('El monto no puede ser 0');

  if (Math.sign(monto) === -1) return console.error('El monto no puede ser negativo');

  if (typeof descuento !== 'number') return console.error(`El valor "${descuento}" ingresado, NO es un número`);

  if (Math.sign(descuento) === -1) return console.error('El descuento no puede ser negativo');

  return console.info(`$${monto} - ${descuento} % = $${monto - (monto * descuento) / 100}`);
};

aplicarDescuento();
aplicarDescuento('200');
aplicarDescuento(0);
aplicarDescuento(-1000);
aplicarDescuento(1000, '20');
aplicarDescuento(1000, -20);
aplicarDescuento(1000);
aplicarDescuento(1000, 25);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn('No ingresaste la fecha');

  if (!(fecha instanceof Date)) return console.error('El valor que ingresaste no es una fecha válida');

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365;
  aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return Math.sign(aniosHumanos) === -1
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    : Math.sign(aniosHumanos) === 1
      ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
      : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
};

calcularAnios();
calcularAnios({});
calcularAnios(false);
calcularAnios(new Date());
calcularAnios(new Date(1988, 0, 15));
calcularAnios(new Date(1888, 0, 15));
calcularAnios(new Date(2088, 0, 15));

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const contarLetras = (cadena = '') => {
  if (!cadena) return console.warn('No ingresaste una cadena de texto');

  if (typeof cadena !== 'string') return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);

  let vocales = 0,
    consonantes = 0;

  cadena = cadena.toLocaleLowerCase();

  for (let letra of cadena) {
    if (/[aeiouáéíóú]/.test(letra)) vocales++;

    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }

  return console.info({
    cadena,
    vocales,
    consonantes,
  });
};

contarLetras();
contarLetras(3);
contarLetras('Hola Mundo');
contarLetras('Ñoño');

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const validarNombre = (nombre = '') => {
  if (!nombre) return console.warn('No ingresaste un nombre');

  if (typeof nombre !== 'string') return console.error(`El valor "${nombre}" ingresado, NO es una cadena de texto`);

  let expReg = /^[A-Za-zÑñAáÉéÍíÓóÚú\s]+$/g.test(nombre); // ^ circunflejo indica que no puede haber nada antes de la expresion y el dolar que no puede haber nada despues. [] son agrupadores el + para evaluarlo por cada caracter de la cadena de texto. \s acepta espacios en blanco. Metodo test evalua si se cumple o no.

  return expReg ? console.info(`"${nombre}", es un nombre válido`) : console.warn(`"${nombre}", NO es un nombre válido`);
};

validarNombre();
validarNombre(3);
validarNombre('Damián Vigo');
validarNombre('Damián Vigo, 19');

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = '') => {
  if (!email) return console.warn('No ingresaste un email');

  if (typeof email !== 'string') return console.error(`El valor "${email}" ingresado, NO es una cadena de texto`);

  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

  return expReg ? console.info(`"${email}", es un email válido`) : console.warn(`"${email}", NO es un email válido`);
};

validarEmail();
validarEmail(30);
validarEmail('damian,vigo@gmail');
validarEmail('damiandanielvigo@gmail.com');

/* Fusión 19 y 20 */

const validarPatron = (cadena = '', patron = undefined) => {
  if (!cadena) return console.warn('No ingresaste una cadena de texto a evaluar');

  if (typeof cadena !== 'string') return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);

  if (patron === undefined) return console.warn('No ingresaste un patrón a evaluar');

  // Si el patron no es una expresion regular
  if (!(patron instanceof RegExp)) return console.error(`El valor "${patron}" ingresado, NO es una expresión regular`);

  let expReg = patron.test(cadena);

  return expReg
    ? console.info(`"${cadena}", cumple con el patrón ingresado`)
    : console.warn(`"${cadena}", NO cumple con el patrón ingresado`);
};

validarPatron();
validarPatron({});
validarPatron('Hola Mundo');
validarPatron('Hola Mundo', 'hola');
validarPatron('Hola Mundo', [1, 2, 3]);
validarPatron('Damián Vigo', /^[A-Za-zÑñAáÉéÍíÓóÚú\s]+$/g);
validarPatron('damiandanielvigo@gmail.com', new RegExp('/[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})/', 'i'));
validarPatron('damiandaniel{{{vigo@gmail.com', new RegExp('/[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})/', 'i'));

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const devolverCuadrados = (arr = undefined) => {
  if (arr === undefined) return console.warn('No ingresaste un array de números');

  if (!(arr instanceof Array)) return console.error('El valor ingresado no es un array');

  if (arr.length === 0) return console.error('El array esta vacío');

  for (let num of arr) {
    if (typeof num !== 'number') return console.error(`El valor "${num}" ingresado, NO es un número`);
  }

  const newArr = arr.map((el) => el * el);

  return console.info(`Arreglo original: ${arr},\nArreglo elevado al cuadrado: ${newArr}`);
};

devolverCuadrados();
devolverCuadrados(true);
devolverCuadrados({});
devolverCuadrados([]);
devolverCuadrados([1, '3', 4, {}]);
devolverCuadrados([1, 4, {}]);
devolverCuadrados([1, 4, 8]);

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const arrayMinMax = (arr = undefined) => {
  if (arr === undefined) return console.warn('No ingresaste un array de números');

  if (!(arr instanceof Array)) return console.error('El valor ingresado no es un array');

  if (arr.length === 0) return console.error('El array esta vacío');

  for (let num of arr) {
    if (typeof num !== 'number') return console.error(`El valor "${num}" ingresado, NO es un número`);
  }

  return console.info(`Array original: ${arr}\nValor mayor: ${Math.max(...arr)}, \nValor menor: ${Math.min(...arr)}`);
};

arrayMinMax();
arrayMinMax(false);
arrayMinMax([]);
arrayMinMax([2, 3, true]);
arrayMinMax([1, 4, 5, 99, -60]);

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const separarParesImpares = (arr = undefined) => {
  if (arr === undefined) return console.warn('No ingresaste un array de números');

  if (!(arr instanceof Array)) return console.error('El valor ingresado no es un array');

  if (arr.length === 0) return console.error('El array esta vacío');

  for (let num of arr) {
    if (typeof num !== 'number') return console.error(`El valor "${num}" ingresado, NO es un número`);
  }

  return console.info({
    pares: arr.filter((num) => num % 2 === 0),
    impares: arr.filter((num) => num % 2 === 1),
  });
};

separarParesImpares();
separarParesImpares('hola');
separarParesImpares([]);
separarParesImpares([2, 4, 'ja']);
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ordenarArray = (arr = 'undefined') => {
  if (arr === undefined) return console.warn('No ingresaste un array de números');

  if (!(arr instanceof Array)) return console.error('El valor ingresado no es un array');

  if (arr.length === 0) return console.error('El array esta vacío');

  for (let num of arr) {
    if (typeof num !== 'number') return console.error(`El valor "${num}" ingresado, NO es un número`);
  }

  return console.info({
    arr,
    asc: arr.map(function (el) {
      return el
    }).sort(), // en forma ascendente
    des: arr.map(el => el).sort().reverse()
  });
};

ordenarArray();
ordenarArray('Hola');
ordenarArray([]);
ordenarArray([3, {}]);
ordenarArray([7, 5, 7, 8, 6]);

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined) return console.warn('No ingresaste un array de números');

  if (!(arr instanceof Array)) return console.error('El valor ingresado no es un array');

  if (arr.length === 0) return console.error('El array esta vacío');

  if (arr.length === 1) return console.warn('El arreglo debe tener al menos 2 elementos');

  // return console.info({
  //   original: arr,
  //   SinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
  // })
  return console.info({
    original: arr,
    SinDuplicados: [...new Set(arr)] // Set recibe el array y va iterando creando un conjunto de elementos pero que no se repitan entre si.
  })
}

quitarDuplicados();
quitarDuplicados({});
quitarDuplicados([]);
quitarDuplicados([2]);
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedio = (arr = undefined) => {
  if (arr === undefined) return console.warn('No ingresaste un array de números');

  if (!(arr instanceof Array)) return console.error('El valor ingresado no es un array');

  if (arr.length === 0) return console.error('El array esta vacío');

  for (let num of arr) {
    if (typeof num !== 'number') return console.error(`El valor "${num}" ingresado, NO es un número`);
  }

  return console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) { // -1 porque length es el numero de elementos y las posiciones empiezan desde 0
        return `El promedio de ${arr.join(' + ')} es ${total / arr.length}`;
      } else {
        return total;
      }
    })
  )
}

promedio();
promedio({});
promedio([]);
promedio([2, true]);
promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

console.clear()

// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
  }


  static generosAceptados() {
    return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
    if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`);

    return true;
  }


  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío}`);
    if (typeof valor !== 'number') return console.error(`${propiedad} "${valor}" ingresado, NO es un número`);

    return true;
  }

  validarArray(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

    if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un array`);

    if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);

    for (let cadena of valor) {
      if (typeof cadena !== 'string') return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
    }

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena('IMDB id', id)) {
      if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) { // no debe haber nada antes ^ | no debe haber nada despues $ | primeros 2 caracteres de la a la z y son 2
        return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeras letras minúsculas y los 7 restantes números`);
      }
    }
  }

  validarTitulo(titulo) {
    if (this.validarCadena('Título', titulo)) {
      this.validarLongitudCadena('Título', titulo, 100);
    }
  }

  validarDirector(director) {
    if (this.validarCadena('Director', director)) {
      this.validarLongitudCadena('Director', director, 50);
    }
  }

  validarEstreno(estreno) {
    if (this.validarNumero('Año de estreno', estreno)) {
      if (!(/^([0-9]){4}$/.test(estreno))) { // no debe haber nada antes ^ | no debe haber nada despues $ | primeros 2 caracteres de la a la z y son 2
        return console.error(`Año de Estreno "${estreno}" no es válido, debe ser un número de 4 digitos`);
      }
    }
  }

  validarPais(pais) {
    this.validarArray('País', pais);
  }

  validarGeneros(generos) {
    if (this.validarArray('Géneros', generos)) {
      for (let genero of generos) {
        // console.log(genero, Pelicula.listaGeneros.includes(genero)) // metodos estaticos no necesitan usar this, porque no necesitan instancia para invocarse.
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero(s) incorrectos "${generos.join(', ')}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero('Calificación', calificacion)) {
      return (calificacion < 0 || calificacion > 10)
        ? console.error(`La calificación tiene que estar en un rango entre 0 y 10`)
        : this.calificacion = calificacion.toFixed(1); // cortar número decimal
    }
  }

  fichaTecnica() {
    console.info(`Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector:" ${this.director}"\nAño:" ${this.estreno}"\nPaís: "${this.pais.join('-')}"\nGéneros: "${this.generos.join(', ')}"\nCaflificacion: "${this.calificacion}"\nIMDB id: "${this.id}"`)
  }
}

Pelicula.generosAceptados();
const peli = new Pelicula({
  id: "tt7286645",
  titulo: 'Joker',
  director: 'Todd Phillips',
  estreno: 2019,
  pais: ['US'],
  generos: ['Crime', 'Drama'],
  calificacion: 8.5,
});

peli.fichaTecnica();