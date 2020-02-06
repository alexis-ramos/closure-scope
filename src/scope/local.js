const helloWorld = () => {
    const hello = 'hello world';
    console.log(hello);
};

helloWorld();
// como la valiable no se encuentra en un hambito global
// no se puede acceder a ella
console.log(hello);


//Hambito lexico  = que las variables no son reasignada mas bien se trata como variable local
var scope = 'im global';
const functionScope = () => {
    var scope = "im just a local";
    const func = () => { 
        return scope;
     };
     console.log(func());
};
functionScope();