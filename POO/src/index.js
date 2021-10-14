const ObjJavascript = require('./literals/objeto')
const ObjJSON = require('./literals/objeto.json')
const Pessoa = require('./class/anatomia')
const mariana = require('./class/gettersAndSetters')
// const Person =require('./class/metodoPublico')
const Person =require('./class/metodoPrivado')
const Employee = require('./class/metodoPrivado')


// console.table(ObjJavascript);
// console.log(ObjJavascript.getFinalPrice());

// console.log(ObjJSON.produto[1].name);

// console.log(Pessoa.hello('Douglas','dev',33))

// console.log(mariana.speak());

let maria = new Employee({
    name: 'Maria',
    age: 19,
    codelanguage: 'Javascript' 
})

maria.speak()
maria.stack()