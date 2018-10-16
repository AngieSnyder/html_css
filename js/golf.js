
function fillArraySumAndAvg() {
    let scoreCtrl = getRefById('score');
    let totalCtrl = getRefById('tot');
    let avgCtrl = getRefById('avg');
    let parCtrl = getRefById('par');

    let strokes = [];
    let tot = 0;
    for (let idx = 0; idx < 18; idx++) {
        let t = getRandomNumber();
        strokes.push(t);
        tot += t;
    }
    let overunder = tot - 72;
    let par = (tot > 72) ? "You are "+overunder+" over par": "You are "+overunder+" under par";

    let avg = (tot / strokes.length).toFixed(2);
    scoreCtrl.textContent = strokes.join();
    totalCtrl.value = tot;
    avgCtrl.value = avg;
    parCtrl.textContent = par;    
    console.log(strokes, tot, avg);
}
function getRefById(id) {
    return document.getElementById(id);
}
function getRandomNumber() {
    return Math.floor(Math.random() * 8 + 1)
}
