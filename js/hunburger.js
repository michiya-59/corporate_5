'use strict';

window.onload = function(){
  var header = document.getElementById('header');
  var hunberger_btn = document.getElementById('hunbrger');
  var mask = document.getElementById('mask');

  hunberger_btn.addEventListener('click', () => {
    header.classList.toggle('open');
  });

  mask.addEventListener('click', () => {
    header.classList.toggle('open');
  });
}

