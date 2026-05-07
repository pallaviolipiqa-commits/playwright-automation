let op_num1=10;
let op_num2=20;
let op_num3=30;

//Arithmetic Operators
console.log("Arithmetic Operators:---------------->");
let op_sum= op_num1+op_num2;  
let op_difference=op_num2-op_num1;
let op_product=op_num1*op_num2;
let op_quotient=op_num2/op_num1;
let op_remainder=op_num2%op_num1;

console.log("Sum:",op_sum);
console.log("Difference:",op_difference);
console.log("Product:",op_product);

console.log("Quotient:",op_quotient);
console.log("Remainder:",op_remainder);

//Comparison Operators
console.log("Comparison Operators:---------------->");
console.log("Is op_num1 equal to op_num2?", op_num1 == op_num2);
console.log("Is op_num1 not equal to op_num2?", op_num1 != op_num2);
console.log("Is op_num1 greater than op_num2?", op_num1 > op_num2);
console.log("Is op_num1 less than op_num2?", op_num1 < op_num2);
console.log("Is op_num1 greater than or equal to op_num2?", op_num1 >= op_num2);
console.log("Is op_num1 less than or equal to op_num2?", op_num1 <= op_num2);

//Logical Operators             
console.log("Logical Operators:---------------->");
let op_isAdult: boolean = true;
let op_hasPermission: boolean = false;
console.log("Is user an adult and has permission?", op_isAdult && op_hasPermission);
console.log("Is user an adult or has permission?", op_isAdult || op_hasPermission);
console.log("Is user not an adult?", !op_isAdult);


//Assignment Operators
console.log("Assignment Operators:---------------->");
let op_a=5;
op_a += 10; // op_a = op_a + 10
console.log("After += operator, op_a =", op_a);
op_a -= 5; // op_a = op_a - 5
console.log("After -= operator, op_a =", op_a);
op_a *= 2; // op_a = op_a * 2
console.log("After *= operator, op_a =", op_a);
op_a /= 5; // op_a = op_a / 5
console.log("After /= operator, op_a =", op_a);
op_a %= 3; // op_a = op_a % 3
console.log("After %= operator, op_a =", op_a);   

//Unary Operators
console.log("Unary Operators:---------------->");
let op_b=10;
console.log("Value of op_b before increment:", op_b);
op_b++;
console.log("Value of op_b after increment:", op_b);
op_b--;
console.log("Value of op_b after decrement:", op_b);

