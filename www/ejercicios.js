                                                    /* Ejercicio 1: 
                                                TIEMPO: De 00:02 a 00:28hs
                            Programá una función que cuente el número de caracteres de una cadena de texto.

LENGTH: (property) String.length: number -> Devuelve un número
Returns the length of a String object. // Devuelve la longitud de un objeto String.*/

// DECLARACIÓN DE LA FUNCIÓN

function contar() {
    // let cadena = "Programar está buenísimo";
    let cadena = new String("Javascript es un lenguaje der programación");
        console.log("EJERCICIO N°1: ");
        console.log(cadena.length); // 24
        console.log("*****************");
}

                        /**   NOTA: Una vez que declaré la función, si no la LLAMO, es imposible que se ejecute. **/

// INVOCACIÓN DE LA FUNCIÓN
contar();

                                                                /* EJERCICIO 2:
                                                                TIEMPO: De 05:05 a 
                                Programá una función que te devuelva el texto recortado según el número de caracteres indicados. */

                                                                    /* SUBSTR() */
/* (method) String.substr(from: number, length?: number): string ---> El método substr(), recibe 2 parámetros, ambos son números. 1er número: Obtiene una subcadena que comienza en la ubicación especificada y 2do número: tiene la longitud especificada.

Gets a substring beginning at the specified location and having the specified length.  // Obtiene una subcadena que comienza en la ubicación especificada y tiene la longitud especificada.

@param from — The starting position of the desired substring. The index of the first character in the string is zero. // parámetro desde: la posición inicial de la subcadena deseada. El índice del primer carácter de la cadena es cero.

@param length — The number of characters to include in the returned substring. //  parámetro longitud: el número de caracteres que se incluirán en la subcadena devuelta. */

// DECLARACIÓN DE LA FUNCIÓN
function recorte() {
    let texto = new String("Cada día estudio JS");
        console.log("EJERCICIO N°2: ");
    //console.log("n° de caracteres: " + texto.length);
        console.log(texto.substr(9, 10)); // ÍNDICE, se cuenta desde 0 --> Letra C / longitud de caracteres, estos sí se CUENTAN DESDE 1--> 8 ---> 1:C, 2:A, 3:D, 4:A, 5: , 6:D, 7:Í, 8:A 
        console.log("*****************");

}
// INVOCACIÓN DE LA FUNCIÓN
recorte();

function extraer(){
    let textoOriginal = "Estoy estudiando Javascript";
        console.log(textoOriginal.length);
    let textoNuevo = textoOriginal.substr(0, 5); // 0 --> POSICIÓN DEL ÍNDICE, DE CADA LA LETRA, 5 --> N° de caracteresf
        document.getElementById("demo").innerHTML = textoNuevo;// getElementById no es ID
}

                                                            /** EJERCICIO 3 **/
                            // 3) Programá una función que dada una String te devuelva un Array de textos separados por cierto caracter:

                                                            /* SPLIT() */
// Una cadena que identifica el carácter o caracteres que se utilizarán para separar la cadena. Si se omite, se devuelve una matriz de un solo elemento que contiene la cadena completa. Divide una cadena en subcadenas usando el separador especificado y devuélvalas como una matriz. Divide una cadena en una matriz (un array) de subcadenas:

// split (separador: cadena | RegExp, límite?: número): cadena []

// Valor devuelto:	Una matriz, que contiene los valores divididos

// DECLARACIÓN DE LA FUNCIÓN
function separar() {
    let cadena = "Con Dios es posible un nuevo comienzo";
    console.log("EJERCICIO N°3: ");
    console.log(cadena.split(' ', 4)); // (4) ["Con", "Dios", "es", "posible"] --> 4 es el n° de elementos, el límite. Este es un array de 4 elementos
    /* 0: "Con"
    1: "Dios"
    2: "es"
    3: "posible" */
    console.log("*****************");
}

// INVOCACIÓN DE LA FUNCIÓN
separar();

                                                            /* EJERCICIO 4:*/
                                        /* Programá una función que repita un texto X veces */

// REPEAT(): El método repeat() construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la que se llamó, concatenadas juntas.

/* PARÁMETROS: count
Un entero entre 0 y +∞: [0, +∞), indicando el número de veces a repetir la cadena en la nueva cadenada creada que será devuelta. */

// SINTAXIS: str.repeat(count)
console.log('EJERCICIO N°4: ');


// DECLARACIÓN DE LA FUNCIÓN
function repetir() {
    textoRepetido = "Hoy es un lindo día para programar";
    console.log(textoRepetido.repeat(10));
    console.log('*************');
}


// INVOCACIÓN DE LA FUNCIÓN

repetir();

function myFunction() {
    var str = "Hello World!";
var n = str.length;
console.log(n);
}

myFunction();