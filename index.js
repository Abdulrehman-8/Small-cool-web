let countAdder = document.getElementById("incCount");
let increaseCount = document.getElementById("countingButton");
let count = 0;
increaseCount.addEventListener( 'click', (e) => {
    console.log(count);
    countAdder.textContent = `Click to increase your count: ${count++}`;
})