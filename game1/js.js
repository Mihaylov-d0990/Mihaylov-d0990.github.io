function check(){
    if (!created){
        created = true;
        for (let i = 0; i < controlHeight; i++){
            let tr = document.createElement('tr');
            controller.appendChild(tr);
            for (let j = 0; j < controlWidth; j++){
                boxControl[i][j] = document.createElement('td');
                boxControl[i][j].style.backgroundColor = "black";
                tr.appendChild(boxControl[i][j]);
            }
        }

        boxControl[0][1].appendChild(arrowUp);
        boxControl[0][1].onclick = move;
        boxControl[1][0].appendChild(arrowLeft);
        boxControl[1][0].onclick = move;
        boxControl[1][1].appendChild(arrowDown);
        boxControl[1][1].onclick = move;
        boxControl[1][2].appendChild(arrowRight);
        boxControl[1][2].onclick = move;

        for (let i = 0; i < height; i++){
            let tr = document.createElement('tr');
            lab.appendChild(tr);
            for (let j = 0; j < width; j++){
                box[i][j] = document.createElement('td');
                if ((i == 0) || (i == height - 1) || (j == 0) || (j == width - 1)){
                    box[i][j].className = "wall";
                }else{
                    box[i][j].className = "floor";
                }
                tr.appendChild(box[i][j]);
            }
        }

        box[1][0].className = "floor";
        box[height - 2][width - 1].className = "floor";

        box[posY][posX].appendChild(img);
        box[height - 2][width - 1].appendChild(img1);

        box[1][4].className = "wall";
        box[1][6].className = "wall";
        box[2][2].className = "wall";
        box[2][3].className = "wall";
        box[2][4].className = "wall";
        box[2][6].className = "wall";
        box[3][2].className = "wall";
        box[3][6].className = "wall";
        box[4][2].className = "wall";
        box[4][3].className = "wall";
        box[4][5].className = "wall";
        box[4][6].className = "wall";
        box[7][2].className = "wall";
        box[7][6].className = "wall";
        box[7][10].className = "wall";
        box[8][4].className = "wall";
        box[8][8].className = "wall";
        box[8][12].className = "wall";

        for (let i = 2; i < width - 1; i++){
            box[6][i].className = "wall";
        }


        addEventListener("keydown", function(event) {
            if (posX != 0){
                if ((event.keyCode == 37) && (box[posY][posX - 1].className != "wall") && (keys)){
                    console.log("left");
                    posX--;
                    box[posY][posX].appendChild(img);
                    checkFlag();
                }
            }
        });

        addEventListener("keydown", function(event) {
            if ((event.keyCode == 38) && (box[posY - 1][posX].className != "wall") && (keys)){
                console.log("up");
                posY--;
                box[posY][posX].appendChild(img);
                checkFlag();
            }
        });

        addEventListener("keydown", function(event) {
            if (posX != width - 1){
                if ((event.keyCode == 39) && (box[posY][posX + 1].className != "wall") && (keys)){
                    console.log("right");
                    posX++;
                    box[posY][posX].appendChild(img);
                    checkFlag();
                }
            }
        });

        addEventListener("keydown", function(event) {
            if ((event.keyCode == 40) && (box[posY + 1][posX].className != "wall") && (keys)){
                console.log("down");
                posY++;
                box[posY][posX].appendChild(img);
                checkFlag();
            }
        });
    }
}

function move(){
    if ((this.firstChild == arrowUp) && (box[posY - 1][posX].className != "wall")){
        console.log("up");
        posY--;
        box[posY][posX].appendChild(img);
        checkFlag();
    }

    if ((this.firstChild == arrowDown) && (box[posY + 1][posX].className != "wall")){
        console.log("down");
        posY++;
        box[posY][posX].appendChild(img);
        checkFlag();
    }

    if (posX != 0){
        if ((this.firstChild == arrowLeft) && (box[posY][posX - 1].className != "wall")){
            console.log("left");
            posX--;
            box[posY][posX].appendChild(img);
            checkFlag();
        }
    }

    if (posX != width - 1) {
        if ((this.firstChild == arrowRight) && (box[posY][posX + 1].className != "wall")){
            console.log("right");
            posX++;
            box[posY][posX].appendChild(img);
            checkFlag();
        }
    }
}

function checkFlag(){
    if ((posY == height - 2) && (posX == width - 1)){
        if (flag){
            document.getElementById('text').innerHTML = "Красава";
            document.getElementById('control').remove();
            keys = false;
        }else{
            document.getElementById('text').innerHTML = "Сгоняйка за пивком";
            box[3][width - 5].appendChild(beer);
        }
    }

    if ((posY == 3) && (posX == width - 5) && (flag != true)){
        flag = true;
        box[3][width - 5].firstChild.remove();
        document.getElementById('text').innerHTML = "Отнеси пиво Бумеру";
    }

    if ((posX == width - 1) && (posY == height - 2)) {
        img.style.height = "45%";
        img1.style.height = "45%";
    } else{
        img.style.height = "100%";
        img1.style.height = "100%";
    }
}

var created = false;
var keys = true;

var height = 10;
var width = 15;
var box = new Array(height);
var area = document.getElementById('area');
var lab = document.createElement('table');
area.appendChild(lab);

var controlHeight = 2;
var controlWidth = 3;
var boxControl = new Array(controlHeight);
var control = document.getElementById('control');
var controller = document.createElement('table');
control.appendChild(controller);

var posX = 0;
var posY = 1;
var flag = false;

var img = document.createElement('img');
img.src = "https://yt3.ggpht.com/a/AGF-l79dCLpaHzeB7UkclvsDbAwLkbWv3qPXtvi07w=s900-c-k-c0xffffffff-no-rj-mo";
var img1 = document.createElement('img');
img1.src = "https://2ch.hk/b/arch/2019-07-04/src/199329471/15622055283330.jpg";
var beer = document.createElement('img');
beer.src = "https://rskrf.ru/upload/iblock/4b4/4b433d30a53ac7da1e41fb164f8dad05.jpg";

var arrowUp = document.createElement('img');
var arrowDown = document.createElement('img');
var arrowLeft = document.createElement('img');
var arrowRight = document.createElement('img');
arrowUp.src = "http://s1.iconbird.com/ico/2014/1/598/w128h1281390846468upcircular128.png";
arrowDown.src = "http://s1.iconbird.com/ico/2014/1/598/w128h1281390846431downcircular128.png";
arrowLeft.src = "http://s1.iconbird.com/ico/2014/1/598/w128h1281390846440leftcircular128.png";
arrowRight.src = "http://s1.iconbird.com/ico/2014/1/598/w128h1281390846454rightcircular128.png";

for (let i = 0; i < height; i++){
    box[i] = new Array(width);
}

for (let i = 0; i < controlHeight; i++){
    boxControl[i] = new Array(controlWidth);
}
