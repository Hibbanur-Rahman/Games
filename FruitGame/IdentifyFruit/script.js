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
const navDiv = document.querySelector(".navDiv");
const sidebar = document.querySelector(".sidebar");


openButton.addEventListener("click", function() {
    sidebar.style.display = "flex";
    closeButton.style.display = "block";
    openButton.style.display = "none";
    start.style.display = "none";
    head.style.display = "none";
    main.style.display = "none";
    win.style.display = "none";


});

closeButton.addEventListener("click", function() {
    resume();


});



startButton.addEventListener("click", function() {
    hideDisplay1();
    addRandomItems();

});

nextButton.addEventListener("click", function() {
    addRandomItems();
    clearDropTarget();
});

endButton.addEventListener("click", function() {
    hideDisplay2();
    removeChild();
});
resumeButton.addEventListener("click", function() {
    resume();
});

function resume() {
    sidebar.style.display = "none";
    openButton.style.display = "block";
    closeButton.style.display = "none";
    head.style.display = "block";
    main.style.display = "block";
}

function hideDisplay1() {
    navDiv.style.display = "block";
    openDiv.style.display = "block";
    head.style.display = "block";
    main.style.display = "block";
    endButton.style.display = "flex";
    start.style.display = "none";
    openButton.style.display = "block";
}

function hideDisplay2() {
    openDiv.style.display = "block";
    endButton.style.display = "block";
    start.style.display = "flex";
    sidebar.style.display = "none";
    closeButton.style.display = "none";
    main.style.display = "none";
    head.style.display = "none";
    startButton.innerHTML = "RESTART";
    openButton.style.display = "none";


}

function removeChild() {
    clearDropTarget();
    hideDisplay2();
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = "Score: " + 0;
    itemCount = 2;
    const itemRemove = document.getElementsByClassName("item");
    itemRemove.remove();
}

let itemCount = 2;

function addRandomItems() {

    const itemsDiv = document.getElementById("items");

    // Remove existing items
    while (itemsDiv.firstChild) {
        itemsDiv.removeChild(itemsDiv.firstChild);
    }

    const itemImages = [
        "random/corn.svg",
        "random/redChilli.svg",
        "random/brinjal.svg",
        "random/cucumber.svg",
        "random/pea.svg",
        "random/tomato.svg",
        "random/bucket.svg",
        "random/football.svg",
        "random/toy-train.svg",
        "random/rubiks-cube.svg",
        "random/rocker.svg",
    ];

    const fruits = [
        "fruits/apple.svg",
        "fruits/orange.svg",
        "fruits/bananas.svg",
        "fruits/mango.svg",
        "fruits/grapes.svg",
        "fruits/watermelon.svg",
        "fruits/strawberry.svg",
        "fruits/pineapple.svg"
    ];

    const fruitPositionIndex = Math.floor(Math.random() * itemCount);
    const randomFruitIndex = Math.floor(Math.random() * fruits.length);
    const fruitImage = fruits[randomFruitIndex];

    for (let i = 0; i < itemCount; i++) {
        let itemImage;
        let itemAlt;

        if (i === fruitPositionIndex) {
            itemImage = fruitImage;
            itemAlt = "Fruit";
        } else {
            const randomItemIndex = Math.floor(Math.random() * itemImages.length);
            itemImage = itemImages[randomItemIndex];
            itemImages.splice(randomItemIndex, 1);
            itemAlt = "Item";
        }

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        const itemImg = document.createElement("img");
        itemImg.src = itemImage;
        itemImg.alt = itemAlt;
        itemImg.classList.add("item-img");
        itemImg.id = "drag" + i;
        itemImg.draggable = true;
        itemImg.style.cursor = "move";
        if (itemImage.substring(0, 6) == 'fruits') {
            itemImg.classList.add('fruit');
        }
        itemImg.addEventListener("dragstart", drag);
        itemDiv.appendChild(itemImg);
        itemsDiv.appendChild(itemDiv);
    }

    if (itemCount > 5) {
        clearDropTarget();
        hideDisplay2();
        removeChild();
    } else {
        itemCount++;
        console.log(itemCount);
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.target.style.opacity = 0.5;
}

function drop(ev) {
    ev.preventDefault();
    const dragItem = document.getElementsByClassName("item-img");
    var data = ev.dataTransfer.getData("text/plain");
    var draggedElement = document.getElementById(data);
    draggedElement.style.opacity = 1;

    var dropTarget = document.getElementById("drop-Target");
    var spanElements = dropTarget.getElementsByClassName("mark");
    console.log(draggedElement);
    dropTarget.appendChild(draggedElement);
    document.getElementById("dragText").style.display = "none";

    // Check if the dropped item is a fruit
    if (draggedElement.classList.contains("fruit")) {
        spanElements[0].style.display = 'block';
        document.getElementById("mark").innerHTML = "&#10003;"; // Add a tick mark
        document.getElementById("mark").style.color = "green"; // Set color to green
        document.getElementById("awesomeSound").play(); // Play the awesome sound

        updateScore(1); // Increment the score by 1
        const gif1 = document.getElementsByClassName("gif1");
        if (gif1.length > 0) {
            gif1[0].style.display = 'block';
        }
        const win = document.getElementsByClassName("win");
        if (win.length > 0) {
            win[0].style.display = 'block';
        }
    } else {
        spanElements[0].style.display = 'block';
        document.getElementById("mark").innerHTML = "&#10007;"; // Add a cross mark
        document.getElementById("mark").style.color = "red"; // Set color to red
        document.getElementById("yuckySound").play(); // Play the yucky sound
        updateScore(-1); // Decrement the score by 1
        const gif2 = document.getElementsByClassName("gif2");
        if (gif2.length > 0) {
            gif2[0].style.display = 'block';
        }
    }
    if (dropTarget.hasChildNodes) {
        for (var i = 0; i < dragItem.length; i++) {
            dragItem[i].draggable = false;
        }
    }

}

function clearDropTarget() {
    const dragText = document.getElementById("dragText");
    dragText.style.display = "block";

    const dropTarget = document.getElementById("drop-Target");

    // Remove any existing img elements
    const imgElements = dropTarget.getElementsByClassName("item-img");
    while (imgElements.length > 0) {
        imgElements[0].parentNode.removeChild(imgElements[0]);
    }
    const spanElements = dropTarget.getElementsByClassName("mark");
    console.log(spanElements);
    spanElements[0].style.display = 'none';
    const gifElements = document.getElementsByClassName("gif1");
    if (gifElements.length > 0) {
        gifElements[0].style.display = 'none';
    }
    const gifElements2 = document.getElementsByClassName("gif2");
    if (gifElements2.length > 0) {
        gifElements2[0].style.display = 'none';
    }
    const win = document.getElementsByClassName("win");
    if (win.length > 0) {
        win[0].style.display = 'none';
    }
}

function updateScore(score) {
    const scoreElement = document.getElementById("score");
    const currentScore = parseInt(scoreElement.textContent.split(":")[1]);
    const newScore = currentScore + score;
    scoreElement.textContent = "Score: " + newScore;
}

theme = document.getElementById("theme");
theme.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains('dark-theme')) {
        theme.innerHTML = "LIGHT MODE";
    } else {
        theme.innerHTML = "DARK MODE";
    }
}