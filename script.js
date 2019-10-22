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
        if (array[i] == trueArray[i]){
            t++;
        }
    }
    document.getElementById('place-for-result').innerHTML='Количество правильных ответов: ' + t;
};

function resetAnswer(quest) {
    array[quest] = 0;
};

let array = new Array(10);
let trueArray = ['1', '3', '2', '2', '1234', '24', '4', 'a', 'html', 'ol'];
