function createCounter() {
    let count = 0
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
    return () => {
        const newCount = counterMethod();
        document.getElementById("count").innerText = newCount;
    };
}

export {createCounter, countHandler};