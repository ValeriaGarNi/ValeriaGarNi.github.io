document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('input');
    button.type = 'button';
    button.id = 'submit';
    button.value = 'Submit';
    button.className = 'btn';
 
    button.onclick = function() {
        background-image: url("https://static.wikia.nocookie.net/mariokart/images/e/e0/MK8-DLC-Course-BigBlue-overview.jpg/revision/latest?cb=20160307011015");
  color: #2d568c;
    // …
    };
 
    var container = document.getElementById('container');
    container.appendChild(button);
}, false);