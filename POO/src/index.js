const ObjJavascript = require('./literals/objeto')
const ObjJSON = require('./literals/objeto.json')

console.table(ObjJavascript);
console.log(ObjJavascript.getFinalPrice());

console.log(ObjJSON.produto[1].name);