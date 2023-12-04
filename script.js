'use strict';
let i = Number(document.querySelector('.score').textContent);
let hs = Number(document.querySelector('.highscore').textContent);
var num = Number(Math.trunc(Math.random() * 20) + 1);
document.querySelector('.check').addEventListener('click', function () {
  let entnum = Number(document.querySelector('.guess').value);
  if (i > 0) {
    if (entnum > 0 && entnum <= 20) {
      if (entnum === num) {
        document.querySelector('.message').textContent = "It's correct";
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem ';
        document.querySelector('.number').textContent = num;
        if (i > hs) {
          hs = i;
          document.querySelector('.highscore').textContent = hs;
        }
      } else if (entnum > num) {
        document.querySelector('.message').textContent = "It's too high";
        i -= 1;
        document.querySelector('.score').textContent = i;
      } else {
        document.querySelector('.message').textContent = "It's too low";
        i -= 1;
        document.querySelector('.score').textContent = i;
      }
    } else {
      document.querySelector('.message').textContent =
        "It's an invalid number, enter form 1 to 20";
    }
  } else {
    document.querySelector('.message').textContent = 'you lost the game';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  i = 20;
  num = Number(Math.trunc(Math.random() * 20) + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = i;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
