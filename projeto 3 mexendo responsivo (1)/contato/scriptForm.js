function teste() {
    console.log("Aquivo Scriptform.js carregado")
};
teste();

document.getElementById("btn2").style.display = "none";
const form = document.getElementById("form");

const btn = document.getElementById("btn");

const username = document.getElementById("username");
const email = document.getElementById("email");
const tel = document.getElementById("phone");
const textArea = document.getElementById("textArea");

// const password = document.getElementById("password")
// const passwordConfirmation = document.getElementById("password-confirmation")

btn.addEventListener('click', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    const usernameValue = username.value;
    const emailValue = email.value;
    const telValue = tel.value;
    const textAreaValue = textArea.value;

    //Aqui estamos verificando se os inputs são validos
    //input nome
    if (usernameValue === '') {
        setErrorFor(username, "O nome de usuário é obrigatorio!!")
    } else {
        setSuccessFor(username)
    }
    //Verificando se o input E-mail é valido
    if (email === '') {
        setErrorFor(email, "O email é obrigatorio")
    } else if (!checkEmail(emailValue)) {
        //Aqui vamos usar uma regex na função checkEmail
        setErrorFor(email, "O E-mail digitado não é valido!!")

    } else {
        setSuccessFor(email)

    }

    // Verificando se o input tel é valido
    if (tel === '') {
        setErrorFor(telValue, "O numero de telefone não é valida!!")
        //Abaixo temos uma codicional para verificar se o numero de tel tem menos que 11 digitos
    } else if (telValue.length < 11) {
        setErrorFor(tel, "O numero de telefone  precisa ter 11 digitos")
    } else {
        setSuccessFor(tel)
    }

    //Verificando se text-area -Confirmation é valido
    if (textAreaValue === '') {
        setErrorFor(textArea, "Preciso de um breve descrição da sua ideia!")
    } else {
        setSuccessFor(textArea)
    }

    // Vamos verificar se o formulario está totalmnte preenchido

    const formControls = form.querySelectorAll('.form-control')
    // agora para fazer essa validação vamos tranformar os formulario em um array  para podermos usar um metodo chamdo "every" 
    const formIsValid = [...formControls].every(formControl => {
        return (formControl.className === "form-control success")
    })

    if (formIsValid) {
        alert("verifiquei que  o formulário está 100% válido! Clique no botão encaminhar novamente para enviar seus dados");
        document.getElementById("btn").style.display = "none";
        document.getElementById("btn2").style.display = "block";


        const msgh2 = document.getElementById("msgh2").innerHTML = "Clique no botão Encaminhar pra Enviar seus dados";


    } else {
        alert("Todos os campos soão obrigatorios!!")
    }
}

//Função setsucces e setError elas ajudam na  validação de dados
function setErrorFor(input, mens) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //adicionar a menssagem de erro
    small.innerText = mens;
    alert(mens)
    //adicionar a classe de erro
    formControl.className = 'form-control error'
}

function setSuccessFor(input, mens) {
    //Aqui estamos pegando o input do username mas usamos o parentElement para pegar o pai desse input do username que é a div que possui a class form-control para podermos alterar a class
    const formControl = input.parentElement;
    //Adicionar a classe de sucesso
    formControl.className = 'form-control success';
}

//Aqui temos um afunção Regex
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
