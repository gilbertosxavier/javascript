function load (){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')
    let data = new Date()
    let hora= data.getHours()

    msg.innerHTML =`Agora são ${hora} horas.`

    if( hora >= 0 && hora < 12) {
        //bom dia!
        img.src = 'images/img-morning.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora < 18) {
        //Boa tarde!
        img.src = 'images/img-afternoon.png'
        document.body.style.background = '#b9846f'
    }else {
        //boa noite!
        img.src = 'images/img-night.png'
        document.body.style.background = '#515154'
    }
}




