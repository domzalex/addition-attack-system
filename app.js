const crushDanceAtk = document.querySelector('.crush-dance');
const volcanoAtk = document.querySelector('.volcano');
const mainSquare = document.querySelector('.attack-square');
const outerSquare = document.querySelector('.timed-square');

var mainWH = 100;
var outerWH = 300;
var rotation = 0;

mainSquare.style.width = mainWH + 'px';
mainSquare.style.height = mainWH + 'px';
outerSquare.style.width = outerWH + 'px';
outerSquare.style.height = outerWH + 'px';
outerSquare.style.display = 'none';

const volcano = {
    iterations: 2,
    timings: [8, 10, 6]
}
const crushDance = {
    iterations: 4,
    timings: [10, 5, 8, 6, 10]
}
var atkName = volcano;
var iter = 0;
let additionStart;

function outerStart() {
    outerWH = 300;
    outerSquare.style.width = outerWH + 'px';
    outerSquare.style.height = outerWH + 'px';
    outerSquare.style.display = 'inline-block';
}
function outerStop() {
    outerWH = 300;
    outerSquare.style.width = outerWH + 'px';
    outerSquare.style.height = outerWH + 'px';
    outerSquare.style.display = 'none';
}


function addition() {
    iter = 0;
    outerStart();
    if (iter < atkName.iterations) {
        additionStart = setInterval(function() {
            if (outerWH >= 70) {
                outerWH -= atkName.timings[iter];
                outerSquare.style.width = outerWH + 'px';
                outerSquare.style.height = outerWH + 'px';
            } else { 
                clearInterval(additionStart);
                outerStop();
            }
        }, 33);
    }
};


volcanoAtk.addEventListener('click', () => {
    atkName = volcano;
    addition();
});
crushDanceAtk.addEventListener('click', () => {
    atkName = crushDance;
    addition();
});

mainSquare.addEventListener('click', () => {
    console.log(iter)
    if (iter == (atkName.iterations)) {
        outerWH = 300;
        outerSquare.style.width = outerWH + 'px';
        outerSquare.style.height = outerWH + 'px';
        outerSquare.style.display = 'none';
        clearInterval(additionStart);
    }
    if (outerWH <= 120 && outerWH >= 80) {
        iter += 1
        outerWH = 300;
        outerSquare.style.width = outerWH + 'px';
        outerSquare.style.height = outerWH + 'px';
        // rotation = 0;
    } 
    else {
        clearInterval(additionStart);
    }
})


