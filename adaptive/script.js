function changeColor(){
    let wrapper = document.getElementById('wrapper');
    let header = document.getElementById('header');
    let main = document.getElementById('main');
    let contentBox = document.getElementsByClassName('content-box');
    let footer = document.getElementById('footer');

    if (countColor == 1){
        wrapper.style.backgroundColor = '#ff80ab';
        header.style.backgroundColor = '#c2185b';
        main.style.backgroundColor = '#fce4ec';
        footer.style.backgroundColor = '#c2185b';
        for (let i = 0; i < contentBox.length; i++){
            contentBox[i].style.backgroundColor = '#c51162';
        }
        countColor = 0;
    }else{
        wrapper.style.backgroundColor = '#a7ffeb';
        header.style.backgroundColor = '#00796b';
        main.style.backgroundColor = '#e0f2f1';
        footer.style.backgroundColor = '#00796b';
        for (let i = 0; i < contentBox.length; i++){
            contentBox[i].style.backgroundColor = '#00bfa5';
        }
        countColor++;
    }
}

function changeFont(){
    let header = document.getElementById('header');
    let contentText = document.getElementsByClassName('content-text');
    let footer = document.getElementById('footer');

    if (countFont == 1){
        header.style.fontFamily = 'Permanent Marker';
        footer.style.fontFamily = 'Permanent Marker';
        for (let i = 0; i < contentText.length; i++){
            contentText[i].style.fontFamily = 'Courgette';
        }
        countFont = 0;
    }else{
        header.style.fontFamily = 'Courgette';
        footer.style.fontFamily = 'Courgette';
        for (let i = 0; i < contentText.length; i++){
            contentText[i].style.fontFamily = 'Permanent Marker';
        }
        countFont++;
    }
}

var countColor = 1;
var countFont = 1;
