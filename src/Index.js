//let a = document.getElementById('num-people');
let numbCust = 1

// Events
document.getElementById('plus').addEventListener('click', addOne);
document.getElementById('minus').addEventListener('click', minusOne);
document.getElementById('mybtn').addEventListener('click', calculateTax);




function calculateTax() {

}

/*
* Function to add one to customer count
* @return None
*/
function addOne() {
  numbCust = numbCust + 1;

  document.getElementById('num-people').value = numbCust;
}

/*
* Function to subtract one from customer count
* @return None
*/
function minusOne() {
  if(numbCust > 0){
    numbCust = numbCust - 1;
    
    document.getElementById('num-people').value = numbCust;
  }else{
    document.getElementById('num-people').value = numbCust;
  }
}