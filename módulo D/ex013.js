let agora = new Date ()
let dia = agora.getDay()

/*
Domingo = 0 
Segunda = 1
Terça = 2
Quarta = 3
Quinta = 4
Sexta = 6
Sábado = 7
*/

console.log(dia)

switch (dia) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terça')
        break;
    case 3:
        console.log('Quarta')
        break;
    case 4:
        console.log('Quinta')
        break;
    case 5:
        console.log('Sexta')
        break;
    case 6:
        console.log('Sábado')
        break;

    default:
        break;
}