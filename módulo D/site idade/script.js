function verificar () {
    
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO! Tente novamente!')
    } else {
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'img')


        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <=10){
                //criança
                genero = 'criança'
                img.setAttribute('src','images/img-crianca-m.png')
            } else if (idade < 20) { 
                //jovem
                genero = 'jovem'
                img.setAttribute('src','images/img-jovem-m.png')
            } else if (idade <50) {
                //adulto
                genero = 'adulto'
                img.setAttribute('src','images/img-adulto-m.png')
            } else {
                //idoso
                genero = 'idoso'
                img.setAttribute('src','images/img-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade <=10){
                //criança
                genero = 'criança'
                img.setAttribute('src','images/img-crianca-f.png')
            } else if (idade < 20) { 
                //jovem
                genero = 'jovem'
                img.setAttribute('src','images/img-jovem-f.png')
            } else if (idade <50) {
                //adulto
                genero = 'adulta'
                img.setAttribute('src','images/img-adulto-f.png')
            } else {
                //idoso
                genero = 'idosa'
                img.setAttribute('src','images/img-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}