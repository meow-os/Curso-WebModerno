var numero = 1;
{
    let numero = 2;
    console.log('dentro =', numero); // Caso a variável numero não esteja 
                                    //dentro do escopo, ele ira buscar pelo mais próximo escopo que no caso é o var 1.
}
console.log('fora =', numero);