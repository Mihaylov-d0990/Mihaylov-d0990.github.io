var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    
    $http.get("jsonFiles/slider.json").then(function (response) {
        $scope.sport = response.data;
    });
    
    $http.get("jsonFiles/sport.json").then(function (response) {
        $scope.sport = response.data;
    });

    $http.get("jsonFiles/accounts.json").then(function (response) {
        $scope.accounts = response.data;
        temp = $scope.accounts;
    });
    
});

document.getElementById('fake-header').style.height = document.getElementById('header').clientHeight + "px";
document.getElementById('major-page').style.minHeight = (screen.height - (document.getElementById('header').clientHeight + document.getElementById('footer').clientHeight)) + "px";
document.getElementById('profile-page').style.minHeight = (screen.height - (document.getElementById('header').clientHeight + document.getElementById('footer').clientHeight)) + "px";

function sliderSwipe(move) {
    if (slider.isTurnedOn) {
        switch (move) {
            case "auto":
                if (slider.position == (slider.sliderElements.length - 1)){
                    slider.previousPosition = slider.position;
                    slider.sliderElements[slider.previousPosition].style.height = "0px";
                    slider.position = 0;
                    slider.sliderElements[slider.position].style.height = "100%";
                } else {
                    slider.previousPosition = slider.position;
                    slider.sliderElements[slider.previousPosition].style.height = "0px";
                    slider.position++;
                    slider.sliderElements[slider.position].style.height = "100%";
                }
                setTimeout(function(){ sliderSwipe("auto") }, 5000);
                break;
            case "left":
                if (slider.position == 0){
                    slider.previousPosition = slider.position;
                    slider.sliderElements[slider.previousPosition].style.height = "0px";
                    slider.position = slider.sliderElements.length - 1;
                    slider.sliderElements[slider.position].style.height = "100%";
                } else {
                    slider.previousPosition = slider.position;
                    slider.sliderElements[slider.previousPosition].style.height = "0px";
                    slider.position--;
                    slider.sliderElements[slider.position].style.height = "100%";
                }
                break;
            case "right":
                if (slider.position == (slider.sliderElements.length - 1)){
                    slider.previousPosition = slider.position;
                    slider.sliderElements[slider.previousPosition].style.height = "0px";
                    slider.position = 0;
                    slider.sliderElements[slider.position].style.height = "100%";
                } else {
                    slider.previousPosition = slider.position;
                    slider.sliderElements[slider.previousPosition].style.height = "0px";
                    slider.position++;
                    slider.sliderElements[slider.position].style.height = "100%";
                }
                break;
        }
    }
}

function login() {
    let login = document.getElementById('login-input').value;
    let password = document.getElementById('password-input').value;
    for (let t in temp) {
        if (temp[t].login == login && temp[t].password == password && !user.isEntered) {
            document.getElementById('fake-header').style.height = document.getElementById('header').clientHeight + "px";
            user.ID = temp[t].id;
            user.isEntered = true;
            user.login = temp[t].login;
            user.password = temp[t].password;
            generalData.profileData.innerHTML = "# " + temp[t].id;
            generalData.enterBlock.style.display = "none";
            generalData.exitBlock.style.display = "block";
            generalData.profileDataContainer.style.display = "grid";
            generalData.historyLink.style.display = "block";
            break;
        }
    }
}

function checkPage(i) {
    for (ip in isPage) {
        isPage[ip].isOpened = false;
    }

    isPage[i].isOpened = true;

    for (ip in isPage) {
        if (isPage[ip].isOpened == true){
            isPage[ip].container.style.display = "block";
        } else {
            isPage[ip].container.style.display = "none";
        }
    }
}

function logout() {
    if (user.isEntered) {
        document.getElementById('fake-header').style.height = document.getElementById('header').clientHeight + "px";
        user.ID = undefined;
        user.isEntered = false;
        generalData.exitBlock.style.display = "none";
        generalData.enterBlock.style.display = "block";
        generalData.profileDataContainer.style.display = "none";
        generalData.historyLink.style.display = "none";
        generalData.profileData.innerHTML = "";
        checkPage(0);
    }
}

function goProfile(){
    if (!profilePage.isOpened) {
        checkPage(1);
        profilePage.idContainer.innerHTML = user.ID;
        profilePage.loginContainer.innerHTML = user.login;
        profilePage.passwordContainer.innerHTML = user.password;
    }
}

function goMain(){
    if (!mainPage.isOpened) {
        checkPage(0);
    }
}

var temp;

var user = {
    isEntered: false,
    ID: undefined,
    login: "",
    password: "",
}

var generalData = {
    exitBlock: document.getElementById('exit-block'),
    enterBlock: document.getElementById('enter-block'),
    profileData: document.getElementById('profile-data'),
    profileDataContainer: document.getElementById('profile-data-container'),
    historyLink: document.getElementById('history-link')
};

var mainPage = {
    name: "main-page",
    isOpened: true,
    container: document.getElementById('major-page')
};

var profilePage = {
    name: "profile-page",
    isOpened: false,
    container: document.getElementById('profile-page'),
    idContainer: document.getElementById('id-info'),
    loginContainer: document.getElementById('login-info'),
    passwordContainer: document.getElementById('password-info')
};

var historyPage = {

};

var slider = {
    isTurnedOn: true,
    position: 0,
    previousPosition: 0,
    sliderElements: document.getElementsByClassName('slider-element')
}

var isPage = [mainPage, profilePage];

profilePage.container.style.display = "none";
generalData.historyLink.style.display = "none";
generalData.profileDataContainer.style.display = "none";
generalData.exitBlock.style.display = "none";
