// FizzBuzz
// Divisivel por 3 => `Fizz`
// Divisivel por 3 => `Buzz`
// Divisivel por 3 e 5 => `FizzBuzz`
// Se náo for um número ==> `Não é um número'
// Se náo for divisível nem por 3 nem por 5 => Entrada

// let resultado = FizzBuzz(8);
// console.log(resultado)

function FizzBuzz(entrada) {
    let i = 0;
    if (typeof entrada !== 'number') {
        return "Não é um número";
    }

    if ((entrada % 3 === 0) && (entrada % 5 === 0)) {
        return "FizzBuzz";
    }
    if (entrada % 3 === 0) {
        return "Fizz";
    }
    if (entrada % 5 === 0) {
        return "Buzz";
    }
    return entrada;
}

//Reverse a string

function reverseAString(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

// let resultado = reverseAString('Hello');
// console.log(resultado);

// Convert Celsius to Fahrenheit
function convertToFahrenheit(value){
return (value * 9/5)+32;
}

// let result = convertToFahrenheit(100);
// console.log('O valor em Fahrenheit é '+ result);

