"use strict";

const $counter = document.querySelector('#counter');
const $hour = document.createElement('span');
const $min = document.createElement('span');
const $sec = document.createElement('span');
$counter.appendChild($hour);
$counter.appendChild($min);
$counter.appendChild($sec);

function Counter (countTo){

  let interval = setInterval(() => {

    let h = parseInt(countTo / 3600);
    let m = parseInt(countTo / 60);
    let s =  parseInt(countTo % 60);

    $hour.innerHTML = h.toFixed() + ':';
    $min.innerHTML = m.toFixed() + ':';
    $sec.innerHTML = s;
    countTo--;
    if(countTo < 0){
      Stop(interval);
    }
  }, 1000);

}

function Stop(interval){
  clearInterval(interval);
  $counter.innerHTML = 'Stop';
}

Counter(600);
