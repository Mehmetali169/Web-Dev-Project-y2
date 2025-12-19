// checkout.js

var checkout = document.getElementById('buy-now');
// add a listener for add to cart if such a button id is pressed

var element = document.getElementById("payment-failure");
element.style.display = 'none';
var element = document.getElementById("payment-success");
element.style.display = 'none';

var loggedin=localStorage.getItem('loggedIn'); 
if (loggedin==0) {
    window.location.href = "/login";  // redirect to login page
}
// add a listener so that we run this code and preventdefault for submit...
checkout.addEventListener("click", () => {
    event.preventDefault();
    var cardnumber=document.getElementById('cardNumber').value;
    var cardcvv=document.getElementById('cardCvv').value;

    if (cardnumber=="1234 5678 9102 3456" && cardcvv=="123") {
        const toastLiveExample = document.getElementById('paymentToast');

        if (toastLiveExample) {
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
            toastBootstrap.show(); 
        }
        var element = document.getElementById("payment-failure");
        element.style.display = 'none';
        //element.classList.add("d-none"); // bootstrap hide
        var element = document.getElementById("payment-success");
        element.style.display = 'block';
        //element.classList.remove("d-none"); // bootstrap hide
        // now set cart total to zero
        var total=0;
        // makes sure that when we goto another page the total is zero 
        localStorage.setItem('checkout',total); 

    } else {

        const toastLiveExample = document.getElementById('paymentToastfail');

        if (toastLiveExample) {
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
            toastBootstrap.show(); 
        }
        var element = document.getElementById("payment-failure");
        element.style.display = 'block';
        var element = document.getElementById("payment-success");
        element.style.display = 'none';
        //element.classList.add("d-none");
        var element = document.getElementById("payment-failure");
        //element.classList.remove("d-none");
 
    }
    return false;  

    
    
})


