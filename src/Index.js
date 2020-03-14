let numbCust = 1

// Events
document.getElementById('plus').addEventListener('click', addOne);
document.getElementById('minus').addEventListener('click', minusOne);
document.getElementById('mybtn').addEventListener('click', calculateTax);
document.getElementById('x').addEventListener('click', close);



/*
* Function to calculate the tip
* @return None
*/
function calculateTax() {
let showTotal  = document.getElementById('show-total')
let totalCost  = parseFloat(document.getElementById('total-cost').value);
let percentage = parseFloat(document.getElementById('tip-percentage').value);
let testCss    = document.getElementsByClassName('card')[1]

let total = ((totalCost * percentage) + totalCost).toFixed(2) / numbCust;

if(testCss.classList.contains('hide-card')) {
  testCss.classList.remove('hide-card')
  showTotal.textContent = total
}else{
  showTotal.textContent = total.toFixed(2)
}
}

function close() {
  document.getElementsByClassName('card')[1].classList.add('hide-card');
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