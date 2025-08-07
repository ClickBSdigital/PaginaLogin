document.addEventListener('DOMContentLoaded', function() {
    // Elementos da DOM
    const switchCtn = document.querySelector("#switch-cnt");
    const switchC1 = document.querySelector("#switch-c1");
    const switchC2 = document.querySelector("#switch-c2");
    const switchCircle = document.querySelectorAll(".switch__circle");
    const switchBtn = document.querySelectorAll(".switch-btn");
    const aContainer = document.querySelector("#a-container");
    const bContainer = document.querySelector("#b-container");
    const rContainer = document.querySelector("#r-container");
    const allButtons = document.querySelectorAll(".submit");
    const recoveryLink = document.querySelector(".recovery-link");
    const backToLogin = document.querySelector(".back-to-login");
    
    // Prevenir comportamento padrão dos botões
    const getButtons = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar validações antes do submit
        console.log('Formulário submetido');
    };
    
    // Alternar entre Login e Cadastro
    const changeForm = (e) => {
        // Animação de transição
        switchCtn.classList.add("is-gx");
        setTimeout(() => switchCtn.classList.remove("is-gx"), 1500);
        
        // Alternar classes para animação
        switchCtn.classList.toggle("is-txr");
        switchCircle.forEach(circle => circle.classList.toggle("is-txr"));
        
        // Alternar visibilidade dos containers
        switchC1.classList.toggle("is-hidden");
        switchC2.classList.toggle("is-hidden");
        aContainer.classList.toggle("is-txl");
        bContainer.classList.toggle("is-txl");
        bContainer.classList.toggle("is-z200");
    };
    
    // Mostrar formulário de recuperação
    const showRecovery = (e) => {
        e.preventDefault();
        
        // Esconder formulário de login com animação
        bContainer.classList.remove("is-txl");
        bContainer.classList.remove("is-z200");
        
        // Mostrar formulário de recuperação
        rContainer.classList.add("is-txl");
        rContainer.classList.add("is-z200");
        
        // Esconder o painel de alternância
        switchCtn.classList.add("is-hidden");
    };
    
    // Voltar para o login
    const hideRecovery = (e) => {
        e.preventDefault();
        
        // Esconder formulário de recuperação
        rContainer.classList.remove("is-txl");
        rContainer.classList.remove("is-z200");
        
        // Mostrar formulário de login
        bContainer.classList.add("is-txl");
        bContainer.classList.add("is-z200");
        
        // Mostrar o painel de alternância
        switchCtn.classList.remove("is-hidden");
    };
    
    // Validação do formulário de recuperação
    const validateRecovery = (e) => {
        e.preventDefault();
        const email = e.target.querySelector("input[type='email']").value;
        
        // Validação simples de email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Por favor, insira um e-mail válido");
            return;
        }
        
        // Simulação de envio (substitua por AJAX na implementação real)
        alert(`Link de recuperação enviado para ${email}`);
        hideRecovery(e);
    };
    
    // Inicialização
    const init = () => {
        // Event listeners para os botões
        allButtons.forEach(button => button.addEventListener("click", getButtons));
        
        // Event listeners para alternar entre login e cadastro
        switchBtn.forEach(btn => btn.addEventListener("click", changeForm));
        
        // Event listeners para recuperação de senha
        recoveryLink.addEventListener("click", showRecovery);
        backToLogin.addEventListener("click", hideRecovery);
        
        // Validação do formulário de recuperação
        document.querySelector("#r-form").addEventListener("submit", validateRecovery);
        
        // Validação dos outros formulários (pode ser expandido)
        document.querySelectorAll("#a-form, #b-form").forEach(form => {
            form.addEventListener("submit", function(e) {
                e.preventDefault();
                // Validações adicionais podem ser adicionadas aqui
                alert("Formulário validado com sucesso!");
            });
        });
    };
    
    // Iniciar quando o DOM estiver pronto
    init();
});