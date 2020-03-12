//let a = document.getElementById('num-people');

document.getElementById('plus').addEventListener('click', addOne, true);
let iGetal = 0

function addOne() {
   
  iGetal =  iGetal + 1;

document.getElementById('num-people').value = iGetal;

}

