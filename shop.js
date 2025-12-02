// shop.js



var addtocart = document.getElementById('addtocart');
// add a listener for add to cart if such a button id is pressed
addtocart.addEventListener("click", addToCart);


function addToCart() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
}

