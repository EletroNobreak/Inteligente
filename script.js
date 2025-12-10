// Função para atualizar o ano no rodapé automaticamente
const anoSpan = document.getElementById('anoAtual');
const dataAtual = new Date();
anoSpan.innerText = dataAtual.getFullYear();

// Log para teste do botão do WhatsApp
const whatsAppBtn = document.querySelector('.btn-whatsapp');

if (whatsAppBtn) {
    whatsAppBtn.addEventListener('click', function() {
        console.log("Usuário clicou no botão do WhatsApp!");
    });
}

// Script para garantir rolagem suave e correta com o menu fixo
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if(targetSection){
            // Altura do cabeçalho fixo para compensar
            const headerOffset = 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});