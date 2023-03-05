var numero = 1;
{
    var numero = 2;
    console.log('dentro=', numero)
};

function teste() {
    var numero = 3;
    console.log('dentro da func=', numero)
};

teste();

console.log('fora=', numero);