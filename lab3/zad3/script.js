var lives;
var score = 30;
var heartContainer = document.querySelector('#heart-container');
var board = document.querySelector("body");
var points = document.querySelector("#score > p");
var finished = false;
var intervals = 1000;

var hearts = document.querySelectorAll('#heart-container img');

run();

function run() {
    if (finished) {
        return;
    }
    lives = 3;

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");

    var targetWidth = 100;
    var targetHeight = targetWidth;
    canvas.width = targetWidth;
    canvas.height = targetHeight;

    var img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
        var offsetX = targetWidth / 2;
        var offsetY = targetHeight / 2;

        var resizedImage = canvas.toDataURL("image/png");
        board.style.cursor = "url('" + resizedImage + "') " + offsetX + " " + offsetY + ", pointer";
    };

    img.src = 'images/aim.png';
    board.addEventListener("click", pointsManager);


    for (var i = 0; i < hearts.length; i++) {
        hearts[i].src = "images/full_heart.png";
    }

    var game = setInterval(() => {
        var zombie = document.createElement("div");
        zombie.className = "zombie";

        var minHeight = 1;
        var maxHeight = 8;
        var bottom = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        var zombieScale = 0.5 + Math.random();
        var minSpeed = 3;
        var maxSpeed = 10;
        var speed = Math.random() * (maxSpeed - minSpeed + 1) + minSpeed;

        zombie.style.bottom = bottom + "%";
        zombie.style.zIndex = Math.floor(Math.random() * 100);
        zombie.style.transform = "scale(" + zombieScale + ")";
        zombie.style.animation = "walk " + speed + "s 0s 1 linear, move 0.4s 0s infinite steps(9)";

        board.appendChild(zombie);

        zombie.addEventListener("animationend", (event) => {
            if (event.animationName === "walk") {
                if (lives > 0) {
                    lives--;
                    hearts[lives].src = "images/empty_heart.png";
                }
                if (lives == 0) {
                    stop(game);
                }
            }
        })
    }, intervals);
}

function pointsManager(event) {
    if (lives > 0 && score>=0) {
        if (event.target.classList.contains("zombie")) {
            score += 10;
            event.target.remove();
        }
        else {
            score -= 3;
        }
    }
    points.innerText = score;
}

function stop(game) {
    finished = true;
    var zombies = document.querySelectorAll(".zombie");
    for (var zombie of zombies) {
        board.removeChild(zombie);
    }
    clearInterval(game);
    board.style.cursor = "default";
    var finish = document.createElement("div");
    finish.id = "finish";
    var scoreDisplay = document.createElement("p");
    scoreDisplay.id = "scoreDisplay";
    var newGameButton = document.createElement("button");
    newGameButton.id = "newGameButton"
    newGameButton.innerText = "NEW GAME"
    finish.appendChild(scoreDisplay);
    finish.appendChild(newGameButton);
    board.appendChild(finish);
    scoreDisplay.innerText = "Score " + score + " points";

    newGameButton.addEventListener('click', function () {
        board.removeChild(finish);
        score = 33;
        board.removeEventListener("click", pointsManager);
        finished = false;
        run();
    });
}


