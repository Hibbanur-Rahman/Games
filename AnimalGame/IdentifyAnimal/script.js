const startButton = document.querySelector(".startBtn");
const nextButton = document.querySelector(".button-1");
const start = document.querySelector(".start");
const endButton = document.querySelector(".exit");
const head = document.querySelector(".head");
const main = document.querySelector(".main");
const openDiv = document.querySelector(".openDiv");
const win = document.querySelector(".win");
const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const submitButton = document.querySelector("submit");
const resumeButton = document.querySelector(".resume");
const restartButton = document.querySelector(".restart");

const navDiv = document.querySelector(".navDiv");
const sidebar = document.querySelector(".sidebar");
const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");
const animalName = document.querySelector(".animal-name");
const gif = document.querySelector(".gif1");


startButton.addEventListener("click", function() {
    hideDisplay1();
    addRandomItems();

});
resumeButton.addEventListener("click", function() {
    sidebar.style.display = 'none';
    openButton.style.display = 'block';
    closeButton.style.display = 'none';

});
restartButton.addEventListener("click", function() {
    hideDisplay2()
    removeItems();
});
nextButton.addEventListener("click", function() {
    win.style.display = 'none';
    gif.style.display = 'none';

    addRandomItems();

});
openButton.addEventListener("click", function() {
    win.style.display = 'none';
    gif.style.display = 'none';
    sidebar.style.display = 'flex';
    openButton.style.display = 'none';
    closeButton.style.display = 'block';

});
closeButton.addEventListener("click", function() {
    sidebar.style.display = 'none';
    openButton.style.display = 'block';
    closeButton.style.display = 'none';

});

function hideDisplay1() {
    start.style.display = 'none';
    openDiv.style.display = 'block';
    main.style.display = 'block';
    nextButton.style.display = "";

}

function hideDisplay2() {
    start.style.display = '';
    openDiv.style.display = 'none';
    main.style.display = 'none';
    nextButton.style.display = "none";
    sidebar.style.display = "none"
}
// var i = 1;

// function addItems() {
//     for (i = 1; i < 4; i++) {
//         createDiv();
//     }
// }
function removeItems() { // Remove existing items
    while (item1.firstChild) {
        item1.firstChild.remove();
    }
    while (item2.firstChild) {
        item2.firstChild.remove();
    }
    while (item3.firstChild) {
        item3.firstChild.remove();
    }
}

let itemCount = 2;


function addRandomItems() {



    // Remove existing items
    removeItems()


    const animal = [
        "Cat",
        "Cow",
        "Dog",
        "Horse",
        // "Auto",
        "Elephant"
    ];

    const notAnimal = [
        "notAnimal/apple.svg",
        "notAnimal/orange.svg",
        "notAnimal/bananas.svg",
        "notAnimal/mango.svg",
        "notAnimal/grapes.svg",
        "notAnimal/watermelon.svg",
        "notAnimal/strawberry.svg",
        "notAnimal/pineapple.svg",
        "notAnimal/Bicycle.svg",
        "notAnimal/Bike.svg",
        "notAnimal/Car.svg",
        "notAnimal/Train.svg",
        "notAnimal/Truck.svg"
    ];

    const animalPositionIndex = Math.floor(Math.random() * itemCount);
    const randomanimalIndex = Math.floor(Math.random() * animal.length);
    const animalImage = animal[randomanimalIndex];

    for (let i = 0; i < itemCount; i++) {
        let itemImage;
        let itemAlt;

        if (i === animalPositionIndex) {
            itemImage = "animals/" + animalImage + ".svg";
            itemAlt = "animal";
        } else {
            const randomItemIndex = Math.floor(Math.random() * notAnimal.length);
            itemImage = notAnimal[randomItemIndex];
            notAnimal.splice(randomItemIndex, 1);
            itemAlt = "notAnimal";
        }

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.id = "item" + i;
        const itemImg = document.createElement("img");
        itemImg.src = itemImage;
        itemImg.alt = itemAlt;
        itemImg.classList.add("item-img");

        if (itemImage.substring(0, 7) === 'animals') {
            console.log("animals");
            itemDiv.classList.add('animals');
        }


        // if (i === animalPositionIndex) {
        //     itemImage = "animals/" +
        //         animalImage + ".svg";
        //     itemAlt = "animal";
        //     // animalName.innerHTML = animalImage;
        // } else {
        //     const randomItemIndex = Math.floor(Math.random() * animal.length);
        //     itemImage = notAnimal[randomItemIndex];
        //     notAnimal.splice(randomItemIndex, 1);
        //     itemAlt = "notAnimal";
        // }

        // const itemDiv = document.createElement("div");
        // itemDiv.classList.add("item");
        // const itemImg = document.createElement("img");
        // itemImg.src = itemImage;
        // itemImg.alt = itemAlt;
        // itemImg.classList.add("item-img");

        // if (itemImage.substring(0, 8) === 'animals') {
        //     console.log("animals");
        //     itemDiv.classList.add('animals');
        // }
        // const clickable = document.getElementsByClassName("item");
        // clickable.style.pointerEvents = 'auto';
        itemDiv.addEventListener("click", clickHandler);
        itemDiv.appendChild(itemImg);
        console.log("Ki");

        if (item1.childElementCount < 2) {
            item1.appendChild(itemDiv);
        } else if (item2.childElementCount < 2) {
            item2.appendChild(itemDiv);
        } else if (item3.childElementCount < 2) {
            item3.appendChild(itemDiv);
        }

    }
    if (itemCount > 6) {
        removeItems();
        hideDisplay2();
        itemCount = 2;
    }


}

function clickHandler(event) {
    var element = event.currentTarget;
    const spanElement = document.createElement("span");
    spanElement.classList = "mark";
    spanElement.id = "mark";
    element.appendChild(spanElement);


    // Check if the dropped item is a fruit
    if (element.classList.contains("animals")) {
        // spanElement.style.display = 'block';
        // document.getElementById("mark").innerHTML = "&#10003;"; // Add a tick mark
        // document.getElementById("mark").style.color = "green"; // Set color to green

        document.getElementById("awesomeSound").play(); // Play the awesome sound

        updateScore(1); // Increment the score by 1
        // if (gif.length > 0) {
        gif.src = "WS2k.gif";
        gif.style.display = 'block';
        // }
        const win = document.getElementsByClassName("win");
        if (win.length > 0) {
            win[0].style.display = 'block';
        }
    } else {
        // const gif = document.getElementsByClassName("gif");
        gif.src = "emoji-yuck.gif";
        gif.style.display = 'block';
        // spanElement.style.display = 'block';
        // document.getElementById("mark").innerHTML = "&#10007;"; // Add a cross mark
        // document.getElementById("mark").style.color = "red"; // Set color to red

        // element.appendChild(spanElement);
        document.getElementById("yuckySound").play(); // Play the yucky sound
        // updateScore(-1); // Decrement the score by 1
        // const gif2 = document.getElementsByClassName("gif2");
        // if (gif.length > 0) {
        // }
    }

    // clickable.style.pointerEvents = 'none';
    // const clickable = document.getElementById("item2");
    // clickable.disabled = true;
    itemCount++;

}

function updateScore(score) {
    const scoreElement = document.getElementById("score");
    const currentScore = parseInt(scoreElement.textContent.split(":")[1]);
    const newScore = currentScore + score;
    scoreElement.textContent = "Score: " + newScore;
    console.log(scoreElement);
}
theme = document.getElementById("theme");
theme.onclick = function() {
    document.body.classList.toggle("dark-theme");
    // if (document.body.classList.contains('dark-theme')) {
    //     theme.innerHTML = "LIGHT MODE";
    // } else {
    //     theme.innerHTML = "DARK MODE";
    // }
}