function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 6
    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12){
        //BOM DIA
        alert('Bom dia')
        img.src = 'fotomanha.png'
        document.body.style.background = '#fecc94'
    }else if (hora >= 12 && hora < 18 ){
        //BOA TARDE
        alert('Bom tarde')
        img.src = 'fototarde.png'
        document.body.style.background = '#fc8222'
    }else {
        //BOA NOITE
        alert('Boa noite')
        img.src = 'fotonoite.png'
        document.body.style.background.img = '#002c61'
    }
}
