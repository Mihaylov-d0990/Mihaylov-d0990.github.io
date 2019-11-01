function test(quest, value) {
    if (quest == 4 || quest == 5 || quest == 6){
        if (array[quest] == undefined){
            array[quest] = String(value);
            console.log(value);
        }
        else{
            array[quest] += String(value);
            console.log(value);
        }
    }
    else{
        array[quest] = String(value);
        console.log(value);
    }
};

function checkArray(){
    for (let i = 0; i < array.length; i++){
        console.log((i+1) + ") " + array[i]);
    }
};

function checkTrue(){
    let t = 0;
    for (let i = 0; i < array.length; i++) {
        if ((i == 4 || i == 5 || i == 6) && (array[i] != undefined)){
            let arrayMore = array[i].split('');
            let arrayMoreTrue = trueArray[i].split('');
            let x = 0;
            for (let i = 0; i < arrayMore.length; i++) {
                for (let j = 0; j < arrayMoreTrue.length; j++) {
                    if (arrayMore[i] == arrayMoreTrue[j]){
                        x++;
                        break;
                    }
                }
            }
            if (x == trueArray[i].length) {
                t++;
            }
        }
        else {
            if (array[i] == trueArray[i]){
                t++;
            }
        }

    }
    document.getElementById('place-for-result').innerHTML='Количество правильных ответов: ' + t;
    document.getElementById('PDF').style.display = 'block';

    let inputs = document.getElementsByClassName('test-dis');
    for (let i = 0; i < inputs.length; i++){
        inputs[i].disabled = true;
    }
};

function resetAnswer(quest) {
    array[quest] = undefined;
};

function enable(){
    let inputs = document.getElementsByClassName('test-dis');
    for (let i = 0; i < inputs.length; i++){
        inputs[i].disabled = false;
    }
}

let array = new Array(10);
let trueArray = ['1', '3', '2', '2', '1234', '24', '4', 'a', 'html', 'ol'];
