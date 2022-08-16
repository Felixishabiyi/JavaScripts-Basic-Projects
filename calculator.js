let clear = document.getElementById('clear')

clear.addEventListener('click', clearS)

function clearS () {
    return document.getElementById('display').value = ""
}

let btn = document.getElementsByClassName('btn')

// btn.addEventListener('click', disValue)

function disValue (value) {
    document.getElementById('display').value += value
    // let bvalue = document.querySelectorAll('btn')
    // console.log(value)
}

function calc () {
    let vv = document.getElementById('display').value
    yy = eval (vv).toFixed(5)
    document.getElementById('display').value = yy
}

function percent () {
    let nn = document.getElementById('display').value
    yy = nn / 100
    document.getElementById('display').value = yy
}

function double () {
    let nn = document.getElementById('display').value
    yy = nn * nn
    document.getElementById('display').value = yy
}