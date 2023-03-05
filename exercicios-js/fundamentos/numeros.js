const peso1 = 1.0;
const peso2 = Number('2.5');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2)); // isInteger para ver se o n° é inteiro

const Avaliacao1 = 9.871;
const Avaliacao2 = 6.871;

const total = Avaliacao1 * peso1 + Avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // toFixed para ajustar a quantidade de casas decimais
console.log(media.toString(2)); // toString para transformar o numero em binário
console.log(typeof media);
console.log(typeof Number); // O Number é uma função, enquanto o typeof media se trata de um número em si