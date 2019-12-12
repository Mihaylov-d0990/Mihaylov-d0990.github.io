function check() {
    let first = document.getElementsByTagName('input')[0];
    console.log("Email: " + first.value);
    let second = document.getElementsByTagName('textarea')[0];
    console.log("Comment: " + second.value);
}

let x = document.createElement('p');
x.innerHTML = window.innerWidth;
document.getElementById('wrapper').appendChild(x);

function myFunction(x) {
    let a = document.getElementById('map-description');
    let p = document.getElementById('map-projects');
    let f = document.getElementById('map-feedback');
    if (x.matches) { // If media query matches
        a.innerHTML = "A";
        a.style.fontSize = "30px";
        p.innerHTML = "G";
        p.style.fontSize = "30px";
        f.innerHTML = "?";
        f.style.fontSize = "30px";
    } else {
        a.innerHTML = "О нас";
        a.style.fontSize = "inherit";
        p.innerHTML = "Проекты";
        p.style.fontSize = "inherit";
        f.innerHTML = "Связь с нами";
        f.style.fontSize = "inherit";
    }
}

var y = window.matchMedia("(max-width: 580px)");
myFunction(y);
y.addListener(myFunction);
