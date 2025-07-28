
import {createCounter, countHandler} from "./Export.js";

let counter = createCounter();
console.log(counter);
document.getElementById("increment").onclick = countHandler(counter.increment);
document.getElementById("decrement").onclick = countHandler(counter.decrement);
document.getElementById("reset").onclick = countHandler(counter.reset);