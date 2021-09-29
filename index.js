var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


var images = ['./img/html.jpg', './img/mar..jpg', './img/pexels-matheus-bertelli-3856026.jpg', './img/pexels-mikael-blomkvist-6476254.jpg'];
document.addEventListener("DOMContentLoaded", function () {
    var x = document.getElementById('details');
    console.log(x);
    for (let i = 0; i < x.children.length; i++) {
        x.children[i].addEventListener('click', function (e) {
            document.getElementById('detailImg').setAttribute('src', images[i]);
            //console.log(y);
        })
    }
});


