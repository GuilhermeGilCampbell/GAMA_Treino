const alunasGama = ["Paula","Maria","Estela","Clara"]

//Operador spread (...)
const alunasXp = [...alunasGama,"Simara"]

// console.log(alunasXp)

//Metodos de iteracao
// for (let i = 0; i < alunasXp.length; i++){
//     console.log(alunasXp[i])
// }

// Map
alunasXp.map(aluna => console.log(aluna))

const numeros = [34, 35, 67, 90, 55, 76]

// Filter
const numerosImpares = numeros.filter(numero => numero%2 != 0)
console.log(numerosImpares);

const numerosPares = numeros.filter(numero => numero%2 == 0)
console.log(numerosPares);

// Find
const produtos = ["geladeira", "fogao", 'mesa', 'cama', 'cama']

const encontraCama = produtos.find(produto => produto ==="cama")
console.log(encontraCama)

const encontraFogao = produtos.find(produto => produto ==="fogao")
console.log(encontraFogao)

//Sort
const num = [34, 45, 76, 80, 55, 110]

const crescente = num.sort((a,b)=>a-b)
console.log(crescente)

const decrescente = num.sort((a,b)=>b-a)
console.log(decrescente)

//Reduce
const numbers = [1,34,35]
const soma = numbers.reduce( (valorAtual, valorAnterior) => {
    return valorAnterior + valorAtual
})
console.log(soma);
