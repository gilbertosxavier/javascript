let num = [7, 9, 6, 8, 4, 5]

console.log(`Nosso vetor inicialmente é: ${num}, com um comprimento de: ${num.length} e o primeiro valor é: ${num[0]}`)
num.sort()
console.log(`Nosso vetor continua com o mesmo comprimento de ${num.length}, porém agora está ordenado da seguinte maneira: ${num} sendo o primeiro valor do vetor: ${num[0]}`)

let valores = [3,1,6,2,5,4]

for(let pos = 0 ; pos < valores.length; pos ++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for (const pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(valores.indexOf(9))