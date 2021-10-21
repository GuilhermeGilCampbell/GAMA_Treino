class User {
    public name;
    public age;

    constructor (name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

class Player extends User {
    public game;

    constructor(name:string,age:number,game:string) {
        super (name,age)
        this.game = game;
    }

    dizerOJogoAtual(){
        return `Estou jogando no momento ${this.game}`;
    }

    static queHorasSao() {
        return Date();
    }

}

    const jogador = new Player('ANNA', 25, 'Red Dead');
    
    console.log(jogador.dizerOJogoAtual())
    console.log(Player.queHorasSao())

    class Jogo {
        protected name;

        constructor(name: string){
            this.name = name;
        }

        dizerNome(){
            return `O nome do Jogo é: ${this.name}`
        }
    }

interface IJogoComDescricao{
    name: string;
    descricao: string;
    dizerNomeComDescricao(): string;

}


    class JogoComDescricao extends Jogo implements IJogoComDescricao {
        private descricao;

        constructor (name: string,descricao:string) {
            super(name)
            this.descricao = descricao;
        }

        dizerNomeComDescricao(){
            return `${this.name} é um jogo ${this.descricao}`
        }

    }

    const ghost = new JogoComDescricao ('Ghost of Tsushima','Jogo BATUTA');
    console.log(ghost.dizerNomeComDescricao());
