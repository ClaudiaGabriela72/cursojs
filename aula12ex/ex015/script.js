function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verificar os dados e tentar novamente')
    }else {
        var fsex = document.getElementsByName('refsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','fotobebeme.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'fotojovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'fotohomem.png')
            } else {
                img.setAttribute('src', 'fotovelho.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fotobebemi.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'fotojovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'fotoadulta.png')
            } else {
                img.setAttribute('src', 'fotovelha.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}