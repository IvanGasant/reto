document.getElementById('label-dm').addEventListener('click', darkmode)

let menu = document.getElementById('navigator')
let bgm1 = document.getElementById('cuerpo1')

function darkmode(){

    let dm = document.getElementById('input-dm').checked

    if(dm){

        document.body.className = 'all day'
        menu.className = "navbar navbar-expand-lg navbar-light"
        document.getElementById('contexto-dm').innerHTML = '☀️'
        localStorage.setItem('dm', "false")
        bgm1.style = "background-image: url(recursos/fondomain2.jpg)"

    }else{

        document.body.className = 'all night'
        menu.className = "navbar navbar-expand-lg navbar-dark"
        document.getElementById('contexto-dm').innerHTML = '🌙'
        localStorage.setItem('dm', "true")
        bgm1.style = "background-image: url(recursos/fondomain.jpg)"

    }

}

//LOCALSTORAGE

if(localStorage.getItem('dm') == "true"){

    let menu = document.getElementById('navigator')
    document.body.className = 'night all'
    document.getElementById('input-dm').checked = true
    document.getElementById('contexto-dm').innerHTML = '🌙'
    menu.className = "navbar navbar-expand-lg navbar-dark"
    bgm1.style = "background-image: url(recursos/fondomain.jpg)"

}


