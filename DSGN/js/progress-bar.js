// #1 PROGRESS BAR

let progressBar1 = document.querySelector(".stats__box-circle--one");
let valueContainer1 = document.querySelector(".stats__box-value--one");

let progressValue1 = 0;
let progressEndValue1 = 50;
let speed1 = 50;

let progress1 = setInterval(() => {
  progressValue1++;
  valueContainer1.textContent = `${progressValue1}`;
  progressBar1.style.background = `conic-gradient(
      #f34739 ${progressValue1 * 3.6}deg,
      #eae8e8 ${progressValue1 * 3.6}deg
  )`;
  if (progressValue1 == progressEndValue1) {
    clearInterval(progress1);
  }
}, speed1);

// #2 PROGRESS BAR
let progressBar2 = document.querySelector(".stats__box-circle--two");
let valueContainer2 = document.querySelector(".stats__box-value--two");

let progressValue2 = 0;
let progressEndValue2 = 35;
let speed2 = 50;

let progress2 = setInterval(() => {
  progressValue2++;
  valueContainer2.textContent = `${progressValue2}`;
  progressBar2.style.background = `conic-gradient(
      #009989 ${progressValue2 * 3.6}deg,
      #eae8e8 ${progressValue2 * 3.6}deg
  )`;
  if (progressValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);

// #3 PROGRESS BAR
let progressBar3 = document.querySelector(".stats__box-circle--three");
let valueContainer3 = document.querySelector(".stats__box-value--three");

let progressValue3 = 0;
let progressEndValue3 = 80;
let speed3 = 50;

let progress3 = setInterval(() => {
  progressValue3++;
  valueContainer3.textContent = `${progressValue3}`;
  progressBar3.style.background = `conic-gradient(
      #000 ${progressValue3 * 3.6}deg,
      #eae8e8 ${progressValue3 * 3.6}deg
  )`;
  if (progressValue3 == progressEndValue3) {
    clearInterval(progress3);
  }
}, speed3);
