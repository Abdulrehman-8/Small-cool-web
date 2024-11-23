let countAdder = document.getElementById("incCount");
let increaseCount = document.getElementById("countingButton");
let count = 0;
function wowChecker() {
    if (count === 27 || count === 52 || count === -27 || count === -52) {
        prompt("You've been counting a lot.. Much Wow!");
       }
    }
increaseCount.addEventListener( 'click', (e) => {
    console.log(count);
    countAdder.textContent = `Click to increase your count: ${count++}`;
    wowChecker();
})
let decreaseCount = document.getElementById('decreasingButton');
decreaseCount.addEventListener( 'click', (e) => {
    console.log(count) 
    countAdder.textContent = `Click to decrease your count: ${count--}`;
    wowChecker()
})
let ultimateResetter = document.getElementById('resetCount');

ultimateResetter.addEventListener('click', (e) => {
    count = 0;
    console.log(count);
    countAdder.textContent = `Click to increase your count: ${count}`
})