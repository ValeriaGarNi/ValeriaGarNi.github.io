document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('input');
    button.type = 'button';
    button.id = 'submit';
    button.value = 'Submit';
    button.className = 'btn';
 
    button.onclick = function() {
    // …
    };
 
    var container = document.getElementById('container');
    container.appendChild(button);
}, false);