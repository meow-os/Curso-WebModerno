let a = 7;
let b = 94;

console.log(a, b);

/* let temp = a;
a = b;
b = temp;
*/

[a,b] = [b,a];

console.log(a, b);