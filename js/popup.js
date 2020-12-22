const popup = document.querySelector('.popup');
document.querySelectorAll('.section-content .product-card')
    .forEach(node => {
        node.addEventListener('click', () => popup.style.display = 'block');
    });
document.querySelector('.popup__close')
    .addEventListener('click', () => popup.style.display = 'none');