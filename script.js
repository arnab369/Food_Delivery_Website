document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cart-icon');
    
    let cartItemCount = 0;

    cartIcon.addEventListener('click', () => {
        cartItemCount++;
        cartIcon.setAttribute('data-count', cartItemCount);
        cartIcon.querySelector('::after').content = cartItemCount;
        
        alert('Cart item count: ' + cartItemCount);
    });
});
