//Importar base de dados
const livros = require('./database')

//pegar um input
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N ')

//Se for 'S', mostra as categorias disponíveis e pergunta qual categoria ela escolhe
//Se for 'N', mostra todos os livros em ordem crescente pela quantidade de páginas

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade e estilo de vida', '/História brasileira', '/Américas', '/Tecnologia')

    const entradaCategoria = readline.question('Qual categoria voce escolhe: ')
    
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno);

} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas-b.paginas);
    console.log('Esses são todos os livros disponíveis: ');
    console.table(livrosOrdenados);
}