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

// Initialized var
let showTotal  = document.getElementById('show-total')
let totalCost  = parseFloat(document.getElementById('total-cost').value);
let percentage = parseFloat(document.getElementById('tip-percentage').value);
let testCss    = document.getElementsByClassName('card')[1]

// Calculates the total 
let total = ((totalCost * percentage) + totalCost).toFixed(2) / numbCust;

// If statement to check if element has class
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

  // adds 1 to count
  document.getElementById('num-people').value = numbCust;
}

/*
* Function to subtract one from customer count
* @return None
*/
function minusOne() {
  // Sets so it will always be greater than 0
  if(numbCust > 0){
    // Subtracts by one when greater than 0
    numbCust = numbCust - 1;
    // Sets to value
    document.getElementById('num-people').value = numbCust;
  }else{
    // Keeps it at zero
    document.getElementById('num-people').value = numbCust;
  }
}