//Sample code demonstrating the use of primitive data types in TypeScript

//String data type
let userNameValue: string = "Alice"; 

//Number data type
let userAge: number = 30;

//Boolean data type
let isAdmin: boolean = true;

//Symbol data type
let userSymbol: symbol = Symbol("user");   

//null data type
let userNull: null = null;  

//undefined data type
let userUndefined: undefined = undefined;

console.log("User Name is",userNameValue);
console.log("User Age is",userAge);
console.log("Is Admin?",isAdmin);
console.log("User Symbol is",userSymbol.toString());
console.log("User Null is",userNull);
console.log("User Undefined is",userUndefined);

//typeof method to check the type of variables
console.log("Type of userName is",typeof userNameValue);
console.log("Type of userAge is",typeof userAge);
console.log("Type of isAdmin is",typeof isAdmin);
console.log("Type of userSymbol is",typeof userSymbol);
console.log("Type of userNull is",typeof userNull);
console.log("Type of userUndefined is",typeof userUndefined);   