// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector('.price span');
  /* console.log("price", price);  */

  const quantity = product.querySelector(".quantity input")
  /* console.log("quantity", quantity); */
  
  const priceValue = price.innerHTML;
/*   console.log("price value:", priceValue); */ 

  const quantityValue = quantity.value; 
/*   console.log("quantity value", quantityValue); */ 

  const result = quantityValue * priceValue; 
  /* console.log("Total:", result);  */

  const subtotal = product.querySelector('.subtotal span');
/*   console.log("subtotal:", subtotal) */

  subtotal.innerHTML = result; 

  return subtotal.innerHTML; 
}

function calculateAll() {
  
    const products = document.getElementsByClassName('product');
    

    for (let i = 0; i < products.length; i++) {
      const productRow = products[i];
      
      updateSubtotal(productRow);
    }
  }
  







  // ITERATION 2



  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
