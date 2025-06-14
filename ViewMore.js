document.addEventListener("DOMContentLoaded",()=>{
    let products=JSON.parse(localStorage.getItem("products"));
    let selectedProdId=localStorage.getItem("selectedProductId");
    let productDetail=document.getElementById("productDetails");


    if(products && selectedProdId){
        let selectedProduct=products.find(
            (product)=> product.id==selectedProdId
        );
    
    if(selectedProduct){
        console.log(selectedProduct);
        productDetail.innerHTML =`
        <main>
        <div id="box">
                    <div>
                    <img id="image" src="${selectedProduct.images}"/>
                    </div>
                    <div>
                    <h2>${selectedProduct.title}</h2>
                    <h4>Brand : ${ selectedProduct.brand}</h4>
                    <h4>Category : ${selectedProduct.category}</h4>
                    <h4>Description : </h4><p>${selectedProduct.description}</p>
                    <h4>Price : $${selectedProduct.price}</h4>
                    <div id="btn">
                    <button id="add" onclick="addToCart ${selectedProduct.id}"><b>Add to Cart</b></button>
                    <button id="back" onclick="backToHome"><b>Back to Home</b></button>
                    </div>
                    </div>
                        
        </div>
        
        <div id="review">
        <h2>Customer Review</h2>
        <hr>
        ${selectedProduct.reviews.map(
            (review)=>
                `
            <div id="ratings">${"⭐".repeat(review.rating)}${"".repeat(5-review.rating)}</div>
            <p id="comment>${review.comment}</p>
            <p id="nam>By<Strong>${review.reviewerName}</strong> on ${new Date(
            review.date)}</p>
            <hr>
            `
        )}

        </div>
        </main>
        `;

        document.getElementById("add").addEventListener("click",()=>{
        addToCart(selectedProduct);
    });
    document.getElementById("back").addEventListener("click",()=>{
    window.location.href="./home.html";
    })

    }else{
    productDetail.innerHTML="<p>product not found</p>";
    }
    }else{
        productDetail.innerHTML="<p>No product selected</p>";

    }
});

function addToCart(product){
    let cart=JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("product added to cart")
}


