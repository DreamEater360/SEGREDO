const login = document.getElementById(deCima1)
login.addeventListiner("click", telaLogin())
const register = document.getElementById(deCima2)
register.addeventListiner("click", telaRegister())

const email = document.getElementById(email)
const senha = document.getElementById(senha)

var loginStyle = document.getElementById(login)
loginStyle.style.opacity = 0
var registerStyle = document.getElementById(register)
registerStyle.style.opacity =0

function telaLogin() {
    return loginStyle.style.opacity == 1 &&
    registerStyle.style.opacity == 0

}

function telaRegister() {
    return loginStyle.style.opacity == 0 && 
    registerStyle.style.opacity == 1;
    
}