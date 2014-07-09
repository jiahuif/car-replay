/**
 * Created by indeed on 14-7-9.
 */
var replay;
function redrawAll() {
    replay.redraw();
}

var testData = {
    cars: [ new Car(1, 1, 2, 3, 4, 'yellow'),
        new Car(2, 3, 1, 1, 2, 'blue'),
        new Car(3, 3, 1, 5, 3, 'red'),
        new Car(4, 1, 3, 4, 2, 'green'),
        new Car(5, 1, 3, 1, 6, 'black'),
        new Car(6, 1, 2, 1, 1, 'lightgreen'),
        new Car(7, 2, 1, 3, 2, 'purple'),
        new Car(8, 1, 2, 1, 5, 'grey'),
        new Car(9, 2, 1, 4, 5, 'darkgreen'),
        new Car(10, 1, 2, 5, 1, 'darkred'),
        new Car(11, 2, 1, 6, 3, 'pink'),
        new Car(12, 2, 1, 6, 5, 'orange')
    ],
    steps: [
        new Step(6, 'forward'),
        new Step(1, 'backward'),
        new Step(2, 'backward')
    ]
};

function replayOver() {
    alert('Over');
}

function nextStep() {
    if (replay.nextStep())
        setTimeout(nextStep, STEP_INTERVAL);
    else
        replayOver();
}

function initialize(cars, steps) {
    var board = new Board(cars);
    replay = new Replay(steps, document.getElementById('replay-canvas'), board);
    setInterval(redrawAll, ANIMATION_INTERVAL / 50);
}


document.addEventListener("DOMContentLoaded", function () {
    initialize(testData.cars, testData.steps);
}, true);

var handle = null;
function playClick() {
    nextStep();
}
function pauseClick() {
    if (handle)
        clearTimeout(handle);
}
function nextClick() {
    replay.nextStep();
}