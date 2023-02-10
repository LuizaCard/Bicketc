function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admim" && senha ==  "1234"){
        alert('Sucesso');
        location.href = "./Biketec.html"
    }else{
        alert('Erro!! Login ou senha Incorreta, tente novamente')
    }
}
