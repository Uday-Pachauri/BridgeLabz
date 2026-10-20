
let count = 0;

function displayCount() {
    console.log(`Current Count: ${count}`);
}

function increment() {
    count++;
    displayCount();
}

function decrement() {
    count--;
    displayCount();
}

increment();
increment();
increment();
decrement();
decrement();
