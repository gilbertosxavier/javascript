/*

são ações executadas assim que são chamadas ou em decorrencia de algum evento

function ação(parametro) {

return res
}

ação(5)


*/

function parimpar(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
let res = parimpar(6)
console.log(res)
