let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let selected = null; // Declare selected outside of the event listeners

// Event listener for dragover on both boxes
function handleDragOver(e) {
    e.preventDefault();
}

// Event listener for drop on both boxes
function handleDrop(e) {
    e.currentTarget.appendChild(selected);
    selected = null;
}

rightBox.addEventListener("dragover", handleDragOver);
rightBox.addEventListener("drop", handleDrop);

leftBox.addEventListener("dragover", handleDragOver);
leftBox.addEventListener("drop", handleDrop);

// Loop through each list element to attach dragstart listener
for (let list of lists) {
    list.addEventListener("dragstart", function(e) {
        selected = e.target;
    });
}
