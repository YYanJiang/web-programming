const geometry = require("./geometry");
const utilities = require("./utilities");

try {
	console.log('The volume of rectangular prism is '+ geometry.volumeOfRectangularPrism(2,3,4));
} catch(e) {
    console.log(e);
}

try {
	console.log('The volume of rectangular prism is '+ geometry.volumeOfRectangularPrism(-2,3,4));
} catch(e) {
    console.log(e);
}

try {
	console.log('The volume of rectangular prism is '+ geometry.volumeOfRectangularPrism(2,'ww',4));
} catch(e) {
    console.log(e);
}

try {
	console.log('The volume of rectangular prism is '+ geometry.volumeOfRectangularPrism(2,3,undefined));
} catch(e) {
    console.log(e);
}

try {
	console.log('The volume of rectangular prism is '+ geometry.volumeOfRectangularPrism(3,3));
} catch(e) {
    console.log(e);
}

console.log();

try {
	console.log('The surface area of rectangular prism is '+ geometry.surfaceAreaOfRectangularPrism(2,3,4));
} catch(e) {
    console.log(e);
}

try {
	console.log('The surface area of rectangular prism is '+ geometry.surfaceAreaOfRectangularPrism(-2,3,4));
} catch(e) {
    console.log(e);
}

try {
	console.log('The surface area of rectangular prism is '+ geometry.surfaceAreaOfRectangularPrism(2,'ww',4));
} catch(e) {
    console.log(e);
}

try {
	console.log('The surface area of rectangular prism is '+ geometry.surfaceAreaOfRectangularPrism(2,3,undefined));
} catch(e) {
    console.log(e);
}

try {
	console.log('The surface area of rectangular prism is '+ geometry.surfaceAreaOfRectangularPrism(3,4));
} catch(e) {
    console.log(e);
}

console.log();

try {
	console.log('The volume of sphere is '+ geometry.volumeOfSphere(12));
} catch(e) {
    console.log(e);
}

try {
	console.log('The volume of sphere is '+ geometry.volumeOfSphere(-12));
} catch(e) {
    console.log(e);
}

try {
	console.log('The volume of sphere is '+ geometry.volumeOfSphere('ww'));
} catch(e) {
    console.log(e);
}

try {
	console.log('The volume of sphere is '+ geometry.volumeOfSphere(undefined));
} catch(e) {
    console.log(e);
}

try {
	console.log('The volume of sphere is '+ geometry.volumeOfSphere(1,2));
} catch(e) {
    console.log(e);
}

console.log();

try {
	console.log('The surface area of sphere is '+ geometry.surfaceAreaOfSphere(12));
} catch(e) {
    console.log(e);
}

try {
	console.log('The surface area of sphere is '+ geometry.surfaceAreaOfSphere(-12));
} catch(e) {
    console.log(e);
}

try {
	console.log('The surface area of sphere is '+ geometry.surfaceAreaOfSphere('ww'));
} catch(e) {
    console.log(e);
}

try {
	console.log('The surface area of sphere is '+ geometry.surfaceAreaOfSphere(undefined));
} catch(e) {
    console.log(e);
}

try {
	console.log('The surface area of sphere is '+ geometry.surfaceAreaOfSphere(1,2));
} catch(e) {
    console.log(e);
}

console.log();

const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};

try {
    console.log(utilities.deepEquality(first, second)); 
} catch(e) {
    console.log(e);
}

try {
    console.log(utilities.deepEquality(first, third)); 
} catch(e) {
    console.log(e);
}

try {
    console.log(utilities.deepEquality(first,1)); 
} catch(e) {
    console.log(e);
}

try {
    console.log(utilities.deepEquality(undefined, third)); 
} catch(e) {
    console.log(e);
}

try {
    console.log(utilities.deepEquality(first, second, third)); 
} catch(e) {
    console.log(e);
}

console.log();

const testArr1 = ["a", "a", "b", "a", "b", "c"];
try {
    console.log(utilities.uniqueElements(testArr1));
} catch(e) {
    console.log(e);
}

const testArr2 = ["a", "b", "c", "a", "b", "c","d"];
try {
    console.log(utilities.uniqueElements(testArr2));
} catch(e) {
    console.log(e);
}

const testArr3 = "Hello, the pie is in the oven";
try {
    console.log(utilities.uniqueElements(testArr3));
} catch(e) {
    console.log(e);
}

const testArr4 = undefined;
try {
    console.log(utilities.uniqueElements(testArr4));
} catch(e) {
    console.log(e);
}

try {
    console.log(utilities.uniqueElements(testArr1,testArr2));
} catch(e) {
    console.log(e);
}

console.log();

const testStr1 = "Hello, the pie is in the oven";
try {
    console.log(utilities.countOfEachCharacterInString(testStr1));
} catch(e) {
    console.log(e);
}

const testStr2 = "Hello World";
try {
    console.log(utilities.countOfEachCharacterInString(testStr2));
} catch(e) {
    console.log(e);
}

const testStr3 = ["a", "b", "c", "a", "b", "c","d"];
try {
    console.log(utilities.countOfEachCharacterInString(testStr3));
} catch(e) {
    console.log(e);
}

const testStr4 = undefined ;
try {
    console.log(utilities.countOfEachCharacterInString(testStr4));
} catch(e) {
    console.log(e);
}

try {
    console.log(utilities.countOfEachCharacterInString(testStr1,testStr2));
} catch(e) {
    console.log(e);
}
