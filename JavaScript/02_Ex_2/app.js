const task1EL = document.querySelectorAll(".sample_class");

function getTag(elements) {
    let tagArray = [];
    for (let i = 0; i < elements.length; i++) {
        tagArray.push(elements[i].tagName);
    }

    return tagArray;
}

///////////////////////////////
const task2EL = document.getElementById("sample_id");

function getClass(element) {
    const classes = element.classList;
    return classes;
}

///////////////////////////////
const task3EL = document.querySelectorAll(".sample_class_2");

function getInnerText(elements) {
    let textArray = [];
    for (let i = 0; i < elements.length; i++) {
        textArray.push(elements[i].innerText);
    }
    return textArray;
}

///////////////////////////////////
const task4EL = document.querySelectorAll("[href]");

function getAddress(elements) {
    let addressArray = [];
    for (let i = 0; i < elements.length; i++) {
        addressArray.push(elements[i].getAttribute("href"));
    }

    return addressArray;

}

////////////////////
const class3 = document.querySelector(".sample_class_3");
const task5EL = class3.children;

console.log(getTag(task5EL));