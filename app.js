'use strict';

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const names = ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dog-duck", "dragon", "pen", "pet-sweep", "scissors", "shark", "sweep", "tauntaun", "unicorn", "usb", "water-can", "wine-glass"];

const sectionImage = document.getElementById("images-section")
const leftImage = document.getElementById("left-image")
const middleImage = document.getElementById("mid-image")
const rightImage = document.getElementById("right-image")


function Product(name) {
    this.name = name;
    this.path = `./images/${name}.jpg`;
    this.votes = 0;
    this.views = 0;
    this.roundClick = 0;
    Product.all.push(this);
}

Product.all = [];
for (let i = 0; i < names.length; i++) {
    new Product(names[i])
}


function render() {
    const leftIndex = randomNumber(0, Product.all.length - 1)
    if (Product.all[leftIndex].name === "sweep") {
        leftImage.src = "./images/sweep.png";
    } else if (Product.all[leftIndex].name === "usb") {
        leftImage.src = "./images/usb.gif";
    } else {
        leftImage.src = Product.all[leftIndex].path;
    }
    leftImage.title = Product.all[leftIndex].name;
    leftImage.alt = Product.all[leftIndex].name;
    for (let i = 0; i < Product.all.length; i++) {
        if (Product.all[i].name === Product.all[leftIndex].name) {
            Product.all[i].views++
        }
    }

    const middleIndex = randomNumber(0, Product.all.length - 1)
    if (Product.all[middleIndex].name === "sweep") {
        middleImage.src = "./images/sweep.png";
    } else if (Product.all[middleIndex].name === "usb") {
        middleImage.src = "./images/usb.gif";
    } else {
        middleImage.src = Product.all[middleIndex].path;
    }
    middleImage.title = Product.all[middleIndex].name;
    middleImage.alt = Product.all[middleIndex].name;
    for (let i = 0; i < Product.all.length; i++) {
        if (Product.all[i].name === Product.all[middleIndex].name) {
            Product.all[i].views++
        }
    }

    const rightIndex = randomNumber(0, Product.all.length - 1)
    if (Product.all[rightIndex].name === "sweep") {
        rightImage.src = "./images/sweep.png";
    } else if (Product.all[rightIndex].name === "usb") {
        rightImage.src = "./images/usb.gif";
    } else {
        rightImage.src = Product.all[rightIndex].path;
    }
    rightImage.title = Product.all[rightIndex].name;
    rightImage.alt = Product.all[rightIndex].name;
    for (let i = 0; i < Product.all.length; i++) {
        if (Product.all[i].name === Product.all[rightIndex].name) {
            Product.all[i].views++
        }
    }


}

sectionImage.addEventListener("click", handleClick);
let clickRound = 0;

function handleClick(event) {
    //console.log("target", event.target.id)
    if (event.target.id !== "images-section") {
        for (let i = 0; i < Product.all.length; i++) {
            if (Product.all[i].name === event.target.title) {
                Product.all[i].votes++
                clickRound++
                if (clickRound === 25) {

                    for (let i = 0; i < Product.all.length; i++) {
                        const liEl = document.createElement("li");
                        ulEl.appendChild(liEl);
                        liEl.textContent = `${Product.all[i].name} had ${Product.all[i].votes} votes and was shown ${Product.all[i].views} times`

                    }
                }

            }
        } if (clickRound < 26) {
            render()
        }
    }
}
console.log(clickRound)

render()

const results = document.getElementById("results-busMall");

const ulEl = document.createElement("ul");
results.appendChild(ulEl);
