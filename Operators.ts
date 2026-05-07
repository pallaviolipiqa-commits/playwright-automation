let num1=10;
let num2=20;
let num3=30;

//Arithmetic Operators
console.log("Arithmetic Operators:---------------->");
let sum=num1+num2;  
let difference=num2-num1;
let product=num1*num2;
let quotient=num2/num1;
let remainder=num2%num1;

console.log("Sum:",sum);
console.log("Difference:",difference);
console.log("Product:",product);
console.log("Quotient:",quotient);
console.log("Remainder:",remainder);

//Comparison Operators
console.log("Comparison Operators:---------------->");
console.log("Is num1 equal to num2?", num1 == num2);
console.log("Is num1 not equal to num2?", num1 != num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 less than num2?", num1 < num2);
console.log("Is num1 greater than or equal to num2?", num1 >= num2);
console.log("Is num1 less than or equal to num2?", num1 <= num2);

//Logical Operators
console.log("Logical Operators:---------------->");
let isAdult: boolean = true;
let hasPermission: boolean = false;
console.log("Is user an adult and has permission?", isAdult && hasPermission);
console.log("Is user an adult or has permission?", isAdult || hasPermission);
console.log("Is user not an adult?", !isAdult);


//Assignment Operators
console.log("Assignment Operators:---------------->");
let a=5;
a += 10; // a = a + 10
console.log("After += operator, a =", a);
a -= 5; // a = a - 5
console.log("After -= operator, a =", a);
a *= 2; // a = a * 2
console.log("After *= operator, a =", a);
a /= 5; // a = a / 5
console.log("After /= operator, a =", a);
a %= 3; // a = a % 3
console.log("After %= operator, a =", a);   

//Unary Operators
console.log("Unary Operators:---------------->");
let b=10;
console.log("Value of b before increment:", b);
b++;
console.log("Value of b after increment:", b);
b--;
console.log("Value of b after decrement:", b);

