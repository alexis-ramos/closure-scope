const fruit = () => {
    if (true) {
        var fruit1 = 'apple';
        let fruit2 = 'banana';
        const fruit3 = 'kiwi';
        console.log(fruit2);
        console.log(fruit3);
    }

    console.log(fruit1);

};
fruit();

//valor global y valor dentro del bloque
let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);


// Si se trabaja con var, dentro del for se imprimira 10 ya que toma el ultimo valor (10)
// si se trabaja con let es una forma de arreglar esto ya que si estará iterando del 0 a 9
const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout( () => {
            console.log(i);
        }, 1000);
        
    }
};
anotherFunction();