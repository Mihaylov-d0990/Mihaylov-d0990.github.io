function addProject(){
	for (let i = 0; i < texts.length; i++){
		let projects = document.getElementById('projects');

		let projectBox = document.createElement('div');
		projectBox.className = 'project-box';

		let projectImage = document.createElement('div');
		projectImage.className = 'project-image';

		let image = document.createElement('img');
		image.src = images[i];

		let projectText = document.createElement('div');
		projectText.className = 'project-text';
	
		let text = document.createElement('p');
		text.innerHTML = texts[i];

		projectImage.appendChild(image);
		projectText.appendChild(text);
		projectBox.appendChild(projectImage);
		projectBox.appendChild(projectText);
		projects.appendChild(projectBox);
	}
}

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
    if (x.matches) {
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



var texts =     ["Яндекс курьер - это революционная игра с новой игровой механикой. В игре даётся возможность испытать себя в роли бедного студента, зарабатывая гроши. !Спойлер! если выбрать сложность 'Россия', то в конце игры студент умирает от голода.",
                "Каменщик - это непризнанный шедевр, повествующий нам о тяжёлой судьбе обычного рабочего из Луганска. Сюжет игры начинается с того, что каменщику приходится украсться хлеб, ради спасенения своей жизни от голодной смерти. Я - каменщик, работая три дня, без зарплаты, я не отдам хлеб, я голоден.",
                "Если вы никогда не угоняли машину, чтобы угнать машину, то вы не слышали об Углепластике. Углепластик - это история о нелёгкой судьбе провинциального работяги, который недавно вернулся из тюрьмы. Главный герой никогда не бросает пацанов с района в тяжёлой жизненной ситуации. О, чёрт, мы снова здесь.",
                '"Игроки не знают поле битвы" или "Игроки не знают поле битвы" - это онлайн игра в жанре "Королевская битва". Суть игры заключается в том чтобы собрать больше всего вещей. Ушлые игроки или правильнее их назвать - хакеры, пользуются уловкой. Они требуют от обыных игроков вещь, если им не предоставить вещь, то "хакеры" могут ограничить доступ к игре навсегда.',
                "Жизнь в России? Ну тут всё просто. Играем за обычного серого персонажа не имея особенностей. До пенсии не доживаем. Конец!",
                "Тёмный соус. Вы спросите как я придумывал название игры? Яндекс переводчик помог мне с этим, ведь в английском я не силён. Игровым персонажем в игре является Михаил Иванович - человек без определённого места жительства. Михаил Иванович является негорящим, как и его сорока процентный водкус. Его цель спасти мир от надвигающейся западной агрессии."];

var images =    ["https://www.iphones.ru/wp-content/uploads/2019/11/92DF8E4B-9F3C-4DAA-9BC8-32CD63EE43C9.jpeg",
                "https://i.ytimg.com/vi/3HOqOZPerLI/maxresdefault.jpg",
                "https://androidik.net/uploads/posts/2018-03/1521285247_kadr_1.jpg",
                "https://steamuserimages-a.akamaihd.net/ugc/943963057793915127/7F97B1DD878D6B0CF793E01D2D7EBD4DAF1D9298/?imw=512&amp;imh=289&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
                "https://i.pinimg.com/originals/be/1e/77/be1e77301c88240e25ed86510b4801bb.jpg",
                "https://b1.gmbox.ru/c/122476.jpg"];
