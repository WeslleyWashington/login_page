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
            
             let classe= document.getElementById('botao'); // Seleciona o elemento HTML

             let inputLogin= document.getElementById('login');
             let inputPassword= document.getElementById('password');

             if (inputLogin.value.length && inputPassword.value.length <= 5 ) {
                
                classe.style='margin-left: 0.3rem; width: 18rem; height: 2rem; margin-top: 2rem; font-size: 0.9rem; color: #646464; background-color: #d7d7d7; border: 0; border-radius: 5px;'
            } else {
                
                classe.style='margin-left: 0.3rem; width: 18rem; height: 2rem; margin-top: 2rem; color: #ffffff; font-size: 0.9rem; background-color: #303030; border: 0; border-radius: 5px; cursor: pointer;'

            }
        }

        function mouseOver() {
            let classe = document.getElementById('botao');
            let inputLogin = document.getElementById('login');
            let inputPassword = document.getElementById('password');

            if (inputLogin.value.length >= 5 && inputPassword.value.length >= 5){ 
                
                classe.style= 'margin-left: 0.3rem; width: 18rem; height: 2rem; margin-top: 2rem; color: #ffffff; font-size: 0.9rem; background-color: #202020; border: 0; border-radius: 5px; cursor: pointer;'
                document.getElementById('botao').style.transition = "0.5s ease";
            }
        }

        function mouseOut() {
            let classe = document.getElementById('botao');
            let inputLogin = document.getElementById('login');
            let inputPassword = document.getElementById('password');

            if (inputLogin.value.length && inputPassword.value.length >= 5){ 

                classe.style='margin-left: 0.3rem; width: 18rem; height: 2rem; margin-top: 2rem; color: #ffffff; font-size: 0.9rem; background-color: #434343; border: 0; border-radius: 5px; cursor: pointer;'  
                
            }
        }

        function handleLogin() {

            document.querySelector(".container_loader").style.display = "flex";
            
        }