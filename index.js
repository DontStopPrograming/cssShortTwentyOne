let onClick = document.getElementById('btnClick')
let startTime, endTime

btnClick.onmousedown = function() {
    startTime = new Date()
    console.log('Presionando el boton')
}

btnClick.onmouseup = function() {
    endTime = new Date()
    let timeDiff = endTime - startTime
    console.log('Se hizo click:\n' + startTime)
    console.log('Se levanto el click:' + endTime)
    console.log('El tiempo transcurrido:' + timeDiff + 'ms')
}

