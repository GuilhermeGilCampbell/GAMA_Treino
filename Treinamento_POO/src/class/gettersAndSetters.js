class Person {
    constructor(name, occupation){
        this.name = name;
        this.occupation = occupation;
    }

    speak(){
        return `${this.name} trabalha como ${this.occupation}`
    }

    set name(string){
        this._name = string.toUpperCase()
    }

    get name(){
        return this._name
    }

}

let mariana = new Person('Mariana','Desenvolvedora')
mariana.name = 'MaRiana'


module.exports = mariana;