
    document.querySelector('#cad_form').onclick = () => {
        document.querySelector('.container_form').classList.add('active');
    };

    document.querySelector('#entrar_form').onclick = () => {
        document.querySelector('.container_form').classList.remove('active');
    };

    function Cadastrar(event) {
    event.preventDefault();

    var nome = NomeCad.value;
    var email = EmailCad.value;
    var genero = GenCad.value;
    var senha = SenhaCad.value;
    var confirmacao = ConfSCad.value;

    erroNome.innerHTML = '';
    erroEmail.innerHTML = '';
    erroGen.innerHTML = '';
    erroSenha.innerHTML = '';
    erroConf.innerHTML = '';

    if (nome == '') {
        erroNome.innerHTML = "Campo Nome é Obrigatório";
        nome.focus();
        return;
    }
    if (email == '') {
        erroEmail.innerHTML = "Campo Email é Obrigatório";
        email.focus();
        return;
    }
    else if (!email.includes("@") || !email.includes(".")) {
        erroEmail.innerHTML = "E-mail inválido. Deve conter '@' e '.'";
        email.focus();
        return;
    }
    if (genero == '') {
        erroGen.innerHTML = "Campo Gênero é Obrigatório.";
        genero.focus();
        return;
    }
    if (senha == '') {
        erroSenha.innerHTML = "Campo Senha é Obrigatório";
        senha.focus();
        return;
    } else if (senha.length < 4) {
        erroSenha.innerHTML = "Senha inválida. Deve conter mais de 4 caracteres";
        senha.focus();
        return;
    }
    if (confirmacao == '') {
        erroConf.innerHTML = "Campo Confirmação de Senha é Obrigatório.";
        confirmacao.focus();
        return;
    } else if (senha != confirmacao) {
        erroConf.innerHTML = "As senhas não estão corretas.";
        confirmacao.focus();
        return;
    }

    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeServer: nome,
        emailServer: email,
        generoServer: genero,
        senhaServer: senha
      }),
    })
    .then(function (resposta) {
        if (resposta.ok) {
            return resposta.json();
        } else {
            throw "Houve um erro ao tentar realizar o cadastro!";
        }
    })
    .then(function (json) {
        sessionStorage.ID_USUARIO = json.idUsuario;
        window.location = "quiz.html";
    })
    .catch(function (erro) {
        console.log(`#ERRO: ${erro}`);
    });
}



function Entrar(event) {
     event.preventDefault();

        var emailEntrar = EmailEn.value;
        var senhaEntrar = SenhaEn.value;

        erroEmailEntrar.innerHTML = '';
        erroSenhaEntrar.innerHTML = '';

        if (emailEntrar == '') {
            erroEmailEntrar.innerHTML = "Campo Email é Obrigatório";
            emailEntrar.focus();
        }
        else if (!emailEntrar.includes("@") || !emailEntrar.includes(".")) {
            erroEmailEntrar.innerHTML = "E-mail inválido. Deve conter '@' e '.'";
            emailEntrar.focus();
        }
            if (senhaEntrar == '') {
            erroSenhaEntrar.innerHTML = "Campo Senha é Obrigatório";
            senhaEntrar.focus();
            }

            console.log("FORM LOGIN: ", emailEntrar);
        console.log("FORM SENHA: ", senhaEntrar);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailEntrar,
                senhaServer: senhaEntrar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.GENERO_USUARIO = json.genero;
                    sessionStorage.ID_USUARIO = json.id;

                        window.location = "inicioUser.html";

                });

            } else {
                console.log("Houve um erro ao tentar realizar o login!");
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }
