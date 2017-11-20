const contactForm = document.querySelector('form');


contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    processForm();
});


function processForm() {

    const overlay = document.querySelector('.after-messsage-overlay');
    let firstName = document.getElementById('first-name').value;
    let message = document.querySelector('.message').innerHTML = `Thank you, ${firstName}! for getting in touch with us! We will get back to you soon.`;

    overlay.style.display = "block";

}

function closeOverlay() {

    const overlay = document.querySelector('.after-messsage-overlay');
    overlay.style.display = "none";

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(function(node) {
        node.value = "";
    });

}