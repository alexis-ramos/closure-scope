//Variables globales
var hello = 'hello';
let world = 'world';
const helloWorld = 'hello world';
//console.log(hello);

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
};

anotherFunction();

const helloWorld = () => {
    globalVar = 'im global';
};
helloWorld();
console.log(globalVar);


const anotherFunction = () =>{
    var localVar = globalVar = 'im global';
};

anotherFunction();
console.log(globalVar);
