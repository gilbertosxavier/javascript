let num = document.querySelector('input#fnum')
let ftab = document.querySelector('select#ftab')
let btnAdd = document.querySelector('btnAdd')
let btnEnd = document.querySelector('btnEnd')
let res = document.querySelector('div#res')
let valores = []


//Funções

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNum(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        ftab.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finish() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML =''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi: ${maior} </p>`
        res.innerHTML += `<p>O menor valor informado foi: ${menor} </p>`
        res.innerHTML += `<p>A soma dos valores adicionados foi: ${soma} </p>`
        res.innerHTML += `<p>A média dos valores adicionados foi: ${media.toFixed(2)} </p>`
    }
}