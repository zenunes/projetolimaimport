 
 // Menu responsivo
 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');


    menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });


 // Efeito de scroll para o menu fixo
 window.addEventListener('scroll', () => {
     let header = document.querySelector('.header');
     header.classList.toggle('sticky', window.scrollY > 0);
 });

 document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('.product-name').textContent;
        const productPrice = this.parentElement.querySelector('.current-price').textContent;
        
        // Simulação de adição ao carrinho
        console.log(`Produto adicionado: ${productName} - ${productPrice}`);
        
        // Animação do botão
        this.innerHTML = '<i class="fas fa-check"></i> Adicionado';
        this.style.backgroundColor = '#4CAF50';
        
        // Restaurar o botão após 2 segundos
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho';
            this.style.backgroundColor = '#ffc800';
        }, 2000);
        
        // Atualizar contador do carrinho (se existir)
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            let currentCount = parseInt(cartCount.textContent);
            cartCount.textContent = currentCount + 1;
        }
    });
});