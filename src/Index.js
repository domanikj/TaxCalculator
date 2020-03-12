//let a = document.getElementById('num-people');
let numbCust = 1

// Events
document.getElementById('plus').addEventListener('click', addOne, true);

function addOne() {
  numbCust = numbCust + 1;

document.getElementById('num-people').value = numbCust;

}

