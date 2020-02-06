// hoisting, levantamientode aplicaciones a sus alcances
a = 2;
var a;
console.log(a);


console.log(a);
var a = 2;


nameOfDog('lucky');
function nameOfDog(name) {
    console.log(name);
}
