function test(quest, value) {
    if (quest == 4 || quest == 5 || quest == 6){
        if (array[quest] == undefined){
            array[quest] = String(value);
        }
        else{
            array[quest] += String(value);
        }
    }
    else{
        array[quest] = String(value);
    }
}

function checkArray(){
    for (let i = 0; i < array.length; i++){
        console.log((i+1) + ") " + array[i]);
    }
}

function resetAnswer(quest) {
    array[quest] = 0;
}

let array = new Array(10);
