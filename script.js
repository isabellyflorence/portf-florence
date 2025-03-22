// Suaviza o scroll para seções específicas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Animação para as barras de progresso ao carregar a página
  window.addEventListener('load', () => {
    document.querySelectorAll('.progresso').forEach(barra => {
      barra.style.width = barra.dataset.width; // Melhor prática para atributos personalizados
    });
  });
  
  // Função para abrir e fechar o modal
  const modal = document.getElementById("myModal");
  const closeModal = () => (modal.style.display = "none");
  
  document.querySelector('.close')?.addEventListener('click', closeModal);
  window.addEventListener('click', event => {
    if (event.target === modal) closeModal();
  });
  
  