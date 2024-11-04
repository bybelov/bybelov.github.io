type Calculate = (a: number, b: number) => number | string;

// Сложение двух десятичных чисел
const add: (a: number, b: number) => number = (a, b) => a + b;

const num1 = 2, num2 = 3;
const result1 = add(num1, num2);
console.log('Сложение чисел в десятичной системе');
console.log(`${num1} + ${num2} = ${result1}`);

// Сложение чисел в шестнадцатеричной системе
function addHex(a: string, b: string): string {
  const num1 = parseInt(a, 16);
  const num2 = parseInt(b, 16);
  return (num1 + num2).toString(16);
}

const num3 = 'F', num4 = 'F';
const result2 = addHex(num3, num4);
console.log('Сложение чисел в шестнадцатеричной системе');
console.log(`${num3} + ${num4} = ${result2}`);

// Сложение чисел в двоичной системе
const addBinary: Calculate = (a, b) => {
  const num1 = parseInt(a.toString(), 2);
  const num2 = parseInt(b.toString(), 2);
  return (num1 + num2).toString(2);
};

const num5 = 1111, num6 = 111;
const result3 = addBinary(num5, num6);
console.log('Сложение чисел в двоичной системе');
console.log(`${num5} + ${num6} = ${result3}`);
