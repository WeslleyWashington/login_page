       
       let inputLogin= document.getElementById('login');

        let inputPassword= document.getElementById('password');

        inputLogin.addEventListener('input', atualizarClasses, mouseOver)
        inputPassword.addEventListener('input', atualizarClasses, mouseOver)



        function valida_form (){

        //busca conteúdo do input
        var conteudo = document.getElementById("login").value;

        var senha = document.getElementById("password").value;

        //valida conteudo do input 
        if (conteudo !== null && conteudo !== '' && senha !== null && senha !== '') {
        //habilita o botão
        document.getElementById("botao").disabled = false;
        } else {
        //desabilita o botão se o conteúdo do input ficar em branco
        document.getElementById("botao").disabled = true;
        }
        }

        function atualizarClasses() {

            let classe= document.getElementById('botao'); // Seleciona o elemento button

            let inputLogin= document.getElementById('login');
            let inputPassword= document.getElementById('password');
            

            if (inputLogin.value.length < 1 || inputPassword.value.length < 1 ) {

            classe.style='margin-left: 0.3rem; width: 18rem; height: 2rem; margin-top: 2rem; font-size: 0.9rem; color: #646464; background-color: #d7d7d7; border: 0; border-radius: 5px;'

        } else {

            classe.style='margin-left: 0.3rem; width: 18rem; height: 2rem; margin-top: 2rem; color: #ffffff; font-size: 0.9rem; background-color: #023660; border: 0; border-radius: 5px; cursor: pointer;'

        }
        }

        function mouseOver() {
        let classe = document.getElementById('botao');
        let inputLogin = document.getElementById('login');
        let inputPassword = document.getElementById('password');

        if (inputLogin.value.length && inputPassword.value.length >= 1){ 
            
            classe.style= 'margin-left: 0.3rem; width: 18rem; height: 2rem; margin-top: 2rem; color: #ffffff; font-size: 0.9rem; background-color: #012E52; border: 0; border-radius: 5px; cursor: pointer;'
            document.getElementById('botao').style.transition = "0.4s ease";
        }
        }

        function mouseOut() {
        let classe = document.getElementById('botao');
        let inputLogin = document.getElementById('login');
        let inputPassword = document.getElementById('password');

        if (inputLogin.value.length && inputPassword.value.length >= 1){ 
            classe.style='margin-left: 0.3rem; width: 18rem; height: 2rem; margin-top: 2rem; color: #ffffff; font-size: 0.9rem; background-color: #023660; border: 0; border-radius: 5px; cursor: pointer;'  
            document.getElementById('botao').style.transition = "0.4s ease";
        }
        }

        function handleLogin() {

        document.querySelector(".container_loader").style.display = "flex";

        }

        // Função de Requisição de login usando o methodo POST

        $(document).ready(function() {
        $("#botao").click(function() {
            var login = $("#login").val();
            var password = $("#password").val();
            authenticate(login, password);
        });

        function authenticate(login, password) {
            $.ajax({
            type: "POST",
            url: " ",
            dataType: 'json',
            data: {
                login,
                password
            },
            success: function(data) {

                // Aqui você pode tratar a resposta do servidor
                $("#resultado").text("Autenticação bem-sucedida!");
            },
            error: function() {

                // Aqui você pode tratar o erro de autenticação
                $("#resultado").text("Falha na autenticação.");
            }
            });
        }
        });

        // Função que verifica se tem usuario logado 

        $(document).ready(function() {
            verificarStatus();
          
            function verificarStatus() {
              $.ajax({
                url: "",
                method: "GET",
                dataType: 'json',
                success: function(response) {
                  if (response.logged_in) {
                    
                    console.log("Usuário logado"); // Usuário logado
                  } else {
                    
                    console.log("Usuário não logado"); // Usuário não logado
                  }
                },
                error: function() {
                  console.log("Erro na requisição"); // Erro de Requisição
                }
              });
            }
          });



