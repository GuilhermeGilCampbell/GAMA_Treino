const pessoa = {
    nome: "Simara",
    idade: 32,
    cidade: "São Paulo"
}

//Notação de ponto
console.log(pessoa.nome)

//Notação de colchetes
console.log(pessoa['idade']);

//Como desestruturar objetos

const {nome, idade, cidade} = pessoa

console.log(nome)

///////////////////////////////////////////////////////////
const filmes = [
    {
        id: 1,
        titulo: "Dilema das Redes",
        descricao: "Um documentário sobre tecnologia.",
        duração: 120
    },

    {
        id: 2,
        titulo: "Us",
        descricao: "Um filme de terror legal demais.",
        duração: 130
    },

    {
        id: 3,
        titulo: "Corra",
        descricao: "Um filme de suspense bem legal.",
        duração: 140
    }
]

const [{ id, titulo, descricao, duracao}] = filmes;

filmes.map(filme => console.log(filme.descricao))

