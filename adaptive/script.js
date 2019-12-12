function check() {
    let first = document.getElementsByTagName('input')[0];
    console.log("Email: " + first.value);
    let second = document.getElementsByTagName('textarea')[0];
    console.log("Comment: " + second.value);
}

let x = document.createElement('p');
x.innerHTML = window.innerWidth;
document.getElementById('wrapper').appendChild(x);
