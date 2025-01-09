/* 
No comando do while é executado um bloco de código e no final é feito um teste lógico
se a condição for satisfeita  ele executa o bloco de códigos novamente.
Essa estrutura é chamada de:
"Estrutura de repetição com teste lógico no final "
*/

let c = 1 // variável 'c' é um contador 

do {
    console.log(`Passo ${c}.`)//aqui é apresentada uma mensagem no console
    c++                       // variável c está incrementando
} while (c <= 6);             //teste lógico executado
