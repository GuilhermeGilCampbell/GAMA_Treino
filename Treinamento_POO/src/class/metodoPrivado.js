class Person{
    #name;
    #age;
    constructor({name,age}){
        this.#name = name;
        this.#age = age;
    }

    speak(){
        return console.log(`Seu nome é ${this.#name} e sua idade é ${this.#age}` )
    }

    set name(string){
        this.#name = string;
    }

    get name(){
        return this.#name;
    }

    set age(string){
        this.#age = string;
    }

    get age(){
        return this.#age;
    }

}

class Employee extends Person{
    #codelanguage
    constructor({name,age,codelanguage}){
        super({name,age})
        this.#codelanguage = codelanguage
    }
    stack(){
        return console.log(`${this.name}, sua idade ${this.age} e programa em ${this.#codelanguage}`)
    }
}


module.exports = Employee;