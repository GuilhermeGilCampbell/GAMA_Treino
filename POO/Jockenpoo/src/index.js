// const rl = require('./interface');

// rl.question('Você está gostando de POO?', resposta => {
//     console.log(`Sua resposta foi ${resposta}`)
//     rl.close();
// })

const options = require('./data')
const User = require('./controller/class/user')
// const MachineOptions = require ('./controller/class/machine')

let usuario = new User({
    opt: options,
    name: 'Maria',
    selected: 'Papel'
}).game()

console.log(usuario)