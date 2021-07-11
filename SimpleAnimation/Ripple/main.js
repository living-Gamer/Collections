// Getting all The Elements
const allElements = document.querySelectorAll('body *');
// Describing Each Element fuction
allElements.forEach(function (element) {
    // Getting the Position of Pointer
    element.addEventListener('click', function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        // Creating The Ripple
        let ripple = document.createElement('span');
        // Setting the Position of Ripple according to Pointer
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        // Appending Ripple as a child of the element
        this.appendChild(ripple);
        // Removing the Ripple
        setTimeout(() => { ripple.remove() }, 1000);
    });
});
