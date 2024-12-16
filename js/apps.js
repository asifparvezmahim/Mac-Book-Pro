function new_price_calc(num1,num2){
  return num1+num2;
}

function sixteen_gb_memory(){
  // extra memory cost updating
  var aditional_price = 10;
  var previous_price = parseInt(document.getElementById("memory-cost").innerText);
  var new_price = new_price_calc(aditional_price,previous_price);
  var previous_memory_total = document.getElementById("memory-cost");
  previous_memory_total.textContent = new_price;

  // total balance updating
  total_displayed_price = parseInt(document.getElementById("total-price").innerText);
  total_price_after_new_memory_configuration = aditional_price+total_displayed_price
  document.getElementById("total-price").textContent = total_price_after_new_memory_configuration 
}

function five_hundrad_twelve_gb_storage(){
  // extra storage cost updating
  var additional_price = 5;
  var previous_price = parseInt(document.getElementById("storage-cost").innerText);
  var new_price = new_price_calc(additional_price,previous_price);
  var prev_storage_total = document.getElementById("storage-cost")
  prev_storage_total.textContent = new_price;

  // total balance updating
  total_displayed_price = parseInt(document.getElementById("total-price").innerText);
  total_price_after_new_storage_configuration = additional_price+total_displayed_price
  document.getElementById("total-price").textContent = total_price_after_new_storage_configuration
}

function one_tarabyte_storage(){
  var additional_price = 10;
  var previous_price = parseInt(document.getElementById("storage-cost").innerText);
  var new_price = new_price_calc(additional_price,previous_price);
  var prev_storage_total = document.getElementById("storage-cost")
  prev_storage_total.textContent = new_price;

  // total balance updating
  total_displayed_price = parseInt(document.getElementById("total-price").innerText);
  total_price_after_new_storage_configuration = additional_price+total_displayed_price
  document.getElementById("total-price").textContent = total_price_after_new_storage_configuration
}

function urgent_delivery(){
  var additional_price = 10;
  var previous_price = parseInt(document.getElementById("delivery-cost").innerText);
  var new_price = new_price_calc(additional_price,previous_price)
  var prev_delivery_total = document.getElementById("delivery-cost")
  prev_delivery_total.textContent = new_price

  // total balance updating
  total_displayed_price = parseInt(document.getElementById("total-price").innerText);
  total_price_after_urgent_delevery = additional_price+total_displayed_price
  document.getElementById("total-price").textContent = total_price_after_urgent_delevery
}

function promo_code(){
  var input_promo_code = document.getElementById("input-field").value;
  var lowercase_string = input_promo_code.toLowerCase()
  if (lowercase_string=="ostad"){
    var discount = parseFloat(30/100)  //30% discount
    var total_price_before_discount = parseFloat(document.getElementById("total-price").innerText)
    var total_price_after_discount = total_price_before_discount-(total_price_before_discount*discount)
    document.getElementById("user-payment").textContent = total_price_after_discount
  }

  else{
    alert("Enter a Valid String")
  }
}