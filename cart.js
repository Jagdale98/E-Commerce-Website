document.addEventListener("DOMContentLoaded",()=>{
displayCart();
});

function displayCart(){
    let cartContent= document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice");
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);

    cartContent.innerHTML="";
    let total=0;
    if(cart.length===0){
        cartContent.innerHTML=`<p class="empty-message"> Your cart is Empty. 
        Start &nbsp <span><a id="shopping" href="home.html"> Shopping </a></span></p>`
        totalPrice.innerHTML="";
        return;
    }

    cart.map((product,index)=>{
        total+=product.price;
        let productDiv=document.createElement("div");
        productDiv.classList.add("product-info");
        productDiv.innerHTML=`
       <main>
        <div class="img-prod">
        <div class="img1">
        <img src="${product.images[0]}" alt="${product.title}" />
        </div>

        <div class="product-details">
        <h2>${product.title}</h2>
        <p> Availability : ${product.availabilityStatus}</p>
        <p> Category : ${product.category}</p>
        <p> Return Policy : ${product.returnPolicy}</p>
        <p> Shipping Information : ${product.ShippingInformation}</p>
        <p> Stock : ${product.stock}</p>
        <p> warranty Information : ${product.warrantyInformation}</p>

        <p> Price : $${product.price.toFixed(2)}</p>
        </div>
        </div>
        <button id="removebtn" onclick="removeFromCart(${index})">Remove</button>
        </main>
        `;
        cartContent.appendChild(productDiv)


    }) ;
    totalPrice.innerHTML=`<h2>Total Price : $${toFixed(2)}</h2>`;
}

function removeFromCart(index){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    displayCart(); 
}