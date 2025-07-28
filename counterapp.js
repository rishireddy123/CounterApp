function createCounter() {
    let count = 0;
    return {
        increment : function( ) {
            count++;
            return count;
        },
        decrement : function( ) {
            count--;
            return count;
        },
        reset : function( ) {
            count=0;
            return count;
        }
    };
}

function countHandler(counterMethod) {
    return function() {
        const finalCount = counterMethod();
        localStorage.setItem("value",finalCount);
        document.getElementById("count").innerText = finalCount;
    }
}

let counter = createCounter();
console.log(counter);
document.getElementById("increment").onclick = countHandler(counter.increment);
document.getElementById("decrement").onclick = countHandler(counter.decrement);
document.getElementById("reset").onclick = countHandler(counter.reset);