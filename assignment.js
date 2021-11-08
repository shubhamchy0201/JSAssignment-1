console.log('**********JS Assignment-1 ********');

//Part-1)fn can be passsed as parameter to another function


function multiply(a) {
    return a * (a+1);
}

let mult = multiply;

function sumOfNatural(a, fn) {
    return fn(a) / 2;
}

let totalSum = sumOfNatural(10, mult);

console.log(totalSum);


//Part-2)Using arrow function 

const getFirstLetter=(fName,lName) => {
    return (fName.charAt(0)+lName.charAt(0));
}
console.log(getFirstLetter('Rogers','Waters'));
