// Câu 1:
let maxNumber = Number(2);
function findEven() {
    for (let i = 0; i <= maxNumber; i++) {
        console.log(i);
    }
} 


// Câu 3:
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < i; j++) {
        document.write('1');
    };
    document.write('<br>');
};

// Câu 4:
function Clock() {
    var hLatest = new Date().getHours();
    var mLatest = new Date().getMinutes();
    var sLatest = new Date().getSeconds();
    if (hLatest < 10) {
        hLatest = '0'+hLatest;
    } else {
        hLatest = hLatest;
    }
    if (mLatest < 10) {
        mLatest = '0'+mLatest;
    } else {
        mLatest = mLatest;
    }
    if (sLatest < 10) {
        sLatest = '0'+sLatest;
    } else {
        sLatest = sLatest;
    }
    document.getElementById("clock").innerHTML = hLatest + ":" + mLatest + ":" + sLatest;
}
var Time = setInterval(Clock, 1000);