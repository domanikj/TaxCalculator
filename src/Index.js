//let a = document.getElementById('num-people');
let numbCust = 1

// Events
document.getElementById('plus').addEventListener('click', addOne);
document.getElementById('minus').addEventListener('click', minusOne);

function addOne() {
  numbCust = numbCust + 1;

  document.getElementById('num-people').value = numbCust;
}

function minusOne() {

  if(numbCust > 0){
    numbCust = numbCust - 1;
    
    document.getElementById('num-people').value = numbCust;
  }else{
    document.getElementById('num-people').value = numbCust;
  }
}
