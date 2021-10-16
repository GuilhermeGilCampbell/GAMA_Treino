const MachineOptions = require('./machine')
const inquirer = require('inquirer')
const options = require("../../data")

class User extends MachineOptions {
    constructor({ opt, name, selected }) {
        super({ opt });
        this._name = name;
        this._selected = selected;
        this._sort = this.sort();
    }

    set name(string) {
        this._name = string;
    }

    get name() {
        return this._name;
    }

    set selected(string) {
        this._selected = string;
    }

    get selected() {
        return this._selected;
    }

    logic() {
        if (this._selected === this._sort) {
            return `${this._name}, você empatou !!! - usuario: ${this._selected} | maquina: ${this._sort}`
        }
        else if ((this.selected === "Papel" && this._sort === "Pedra") ||
            (this.selected === "Pedra" && this._sort === "Tesoura") ||
            (this.selected === "Tesoura" && this._sort === "Papel")) {
            return `${this._name}, você ganhou !!! - usuario: ${this._selected} | maquina: ${this._sort}`
        }
        else {
            return `${this._name}, você perdeu !!! - usuario: ${this._selected} | maquina: ${this._sort}`

        }
    }

    ask() {
        return inquirer
            .prompt([
                {
                    name: 'name',
                    message: 'Qual o seu nome',
                    default: 'Jogador'
                },
                {
                    type: 'list',
                    name: 'jokenpo',
                    message: 'Selecione uma destas opções',
                    choices: options

                }
            ])
    }

    result(answers){

        this._selected = answers.jokenpo;
        this._name = answers.name;
        console.info(`O resultado é: ${this.logic()}`)

    }

    async game(){
        const answers = await this.ask();
        this.result(answers);
        // this.ask().then(answers => this.result(answers)); //Possivel problema: call-back hell (quando tem muitas call-backs) - Para rodar esta linha comentar anteriores e tirar o async
    }
    
    // game() {
    //     return inquirer
    //         .prompt([
    //             {
    //                 name: 'name',
    //                 message: 'Qual o seu nome',
    //                 default: 'Jogador'
    //             },
    //             {
    //                 type: 'list',
    //                 name: 'jokenpo',
    //                 message: 'Selecione uma destas opções',
    //                 choices: options

    //             }
    //         ]).then((answers) => {
    //             this._selected = answers.jokenpo;
    //             this._name = answers.name;
    //             console.info(`O resultado é: ${this.logic()}`)
    //         })
    // }

}

module.exports = User