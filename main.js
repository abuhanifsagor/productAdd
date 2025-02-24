const addBtn = document.getElementById('addProduct');
const productName = document.getElementById('productName');
const productImg = document.getElementById('productImage');
const productPrice = document.getElementById('productPrice');
const productLists = document.getElementById('productList');



 addBtn.addEventListener('click', function () {
    
    event.preventDefault();

    const productNames = productName.value.trim();
    const productImages = productImg.value.trim();
    const productPrices = productPrice.value.trim(); 

    if(!productNames || !productImages || !productPrices){
        alert('All fields are required!')
        return;
    }

    if(isNaN(productPrices) ||  Number(productPrices) <= 9){
        alert('Invalid Price!')
        return;
    }

   const productCard = document.createElement('div');
   productCard.classList.add("card", "bg-base-100", "w-full",  "shrink-0", "shadow-2xl");

   productCard.innerHTML = `
    <figure>
              <img class="w-full"
                src=" ${productImages} "
                alt=" ${productNames}" />
            </figure>
            <div class="card-body">
              <h2 id="addedPoductName" class="card-title">Name: <span class="text-info"> ${productNames} </span></h2>
              <p>Price: <span class="text-primary"> ${productPrices} $ </span></p>
              <div class="card-actions justify-end">
                <button class="btn btn-error text-white deleteProduct">Delete</button>
              </div>
     </div>
    
   `   ;

   productLists.appendChild(productCard);


   const deleteBtn = productCard.querySelector('.deleteProduct');

   deleteBtn.addEventListener('click', function(){

    productCard.remove();

   })
 })
