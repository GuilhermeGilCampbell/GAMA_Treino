const MachineOptions = require('./machine')
const inquirer = require('inquirer')
const options = require ("../../data")

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
            (this.selected === "Tesoura" && this._sort === "Papel"))
        {
            return `${this._name}, você ganhou !!! - usuario: ${this._selected} | maquina: ${this._sort}`
        }
        else {
            return `${this._name}, você perdeu !!! - usuario: ${this._selected} | maquina: ${this._sort}`

        }
    }

    game() {
        return this.logic()
    }

}

module.exports = User