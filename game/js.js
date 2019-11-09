function createBox(){
    document.getElementsByTagName('table')[0].innerHTML = '';
    let text = document.getElementsByTagName("input")[0];
    let text1 = document.getElementsByTagName("input")[1];

    width = parseInt(text.value);
    height = parseInt(text1.value);

    if (width > 2 && height > 2){
        box = new Array(height);
        for(let i = 0; i < height; i++){
            box[i] = new Array(width);
        }

        for (let i = 0; i < height; i++){
            let row = document.createElement('tr');
            table.appendChild(row);
            for (let j = 0; j < width; j++){
                box[i][j] = document.createElement('td');
                box[i][j].onclick = swap;
                table.appendChild(box[i][j]);
                let img = document.createElement('img');
                img.src = "https://yt3.ggpht.com/a/AGF-l7_Yg6iAWEQfTToobEkpNCu1SUu2AXf8BY-aWA=s900-c-k-c0xffffffff-no-rj-mo";
                box[i][j].appendChild(img);
            }
        }
    } else {
        window.location.reload();
    }

}

function swap() {
    if (this.firstChild.src != 'https://www.bronnitsy.com/upload/iblock/0fb/0fbcd4e1dcd8ec318dc11d3b50f82e53.jpg' && this.firstChild.src != 'https://pbs.twimg.com/media/EFIyl2QX4AAZ-g8.jpg'){
        if (next == 0) {
            this.firstChild.src = 'https://www.bronnitsy.com/upload/iblock/0fb/0fbcd4e1dcd8ec318dc11d3b50f82e53.jpg';
            next++;
        } else{
            this.firstChild.src = 'https://pbs.twimg.com/media/EFIyl2QX4AAZ-g8.jpg';
            next = 0;
        }
    }
    search();
}

function search(){
    for (let i = 0; i < height; i++){
        for (let j = 0; j < width; j++){
            if (box[i][j].firstChild.src == 'https://www.bronnitsy.com/upload/iblock/0fb/0fbcd4e1dcd8ec318dc11d3b50f82e53.jpg' || box[i][j].firstChild.src == 'https://pbs.twimg.com/media/EFIyl2QX4AAZ-g8.jpg'){
                if(((j != width - 1) && (j != width - 2) && box[i][j].firstChild.src == box[i][j + 1].firstChild.src && box[i][j].firstChild.src == box[i][j + 2].firstChild.src)||
                ((i != height - 1) && (i != height - 2) && box[i][j].firstChild.src == box[i + 1][j].firstChild.src && box[i][j].firstChild.src == box[i + 2][j].firstChild.src)||
                ((i != height - 1) && (i != height - 2) && (j != width - 1) && (j != width - 2) && box[i][j].firstChild.src == box[i + 1][j + 1].firstChild.src && box[i][j].firstChild.src == box[i + 2][j + 2].firstChild.src)||
                ((i != 0) && (i != 1) && (j != width - 1) && (j != width - 2) && box[i][j].firstChild.src == box[i - 1][j + 1].firstChild.src && box[i][j].firstChild.src == box[i - 2][j + 2].firstChild.src)){
                    let vic = document.getElementById('vic');
                    let pic = document.createElement('img');
                    pic.src = box[i][j].firstChild.src;
                    vic.appendChild(pic);
                    console.log("victory");
                }
            }
        }
    }
}

var width, height;
var next = 0;
var box;
var table = document.getElementsByTagName("table")[0];
