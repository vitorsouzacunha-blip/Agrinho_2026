// Função simples para simular adição ao carrinho de orçamentos
function adicionarAoCarrinho(nomeProduto) {
    alert(`O produto "${nomeProduto}" foi adicionado à sua lista de interesse. \n\nLembre-se: O uso de produtos químicos deve ser acompanhado por um receituário agronômico e o uso obrigatório de EPIs!`);
    console.log(`Interesse registrado para: ${nomeProduto}`);
}

// Efeito de rolagem suave para os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
