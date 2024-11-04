// Сложение двух десятичных чисел
var add = function (a, b) { return a + b; };
var num1 = 2, num2 = 3;
var result1 = add(num1, num2);
console.log('Сложение чисел в десятичной системе');
console.log("".concat(num1, " + ").concat(num2, " = ").concat(result1));
// Сложение чисел в шестнадцатеричной системе
function addHex(a, b) {
    var num1 = parseInt(a, 16);
    var num2 = parseInt(b, 16);
    return (num1 + num2).toString(16);
}
var num3 = 'F', num4 = 'F';
var result2 = addHex(num3, num4);
console.log('Сложение чисел в шестнадцатеричной системе');
console.log("".concat(num3, " + ").concat(num4, " = ").concat(result2));
// Сложение чисел в двоичной системе
var addBinary = function (a, b) {
    var num1 = parseInt(a.toString(), 2);
    var num2 = parseInt(b.toString(), 2);
    return (num1 + num2).toString(2);
};
var num5 = 1111, num6 = 111;
var result3 = addBinary(num5, num6);
console.log('Сложение чисел в двоичной системе');
console.log("".concat(num5, " + ").concat(num6, " = ").concat(result3));
