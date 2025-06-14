let products=[];
function fetchData(){
    fetch("https://dummyjson.com/products").then((val)=>{
        return val.json();
    }).then((res)=>{
        // console.log(res);
        products=res.products;
        console.log(res.products)
        //  console.log(products);
         localStorage.setItem("products", JSON.stringify(products));
         fetchProduct(products)
    });
}
    function fetchProduct(products){
        let productHtml ="";
        products.map((val)=>{     
            productHtml +=`
                    <main>
                    <div id="box">
                    <div>
                    <img id="i1" src="${val.images}"/>
                    </div>
                    <div>
                    <h3> ${val.title}</h3>
                    <h3> Price : ${val.price}</h3><br>
                    </div>
                    <div>
                    <button id="view" onclick="Viewmore(${val.id})">view more</button>
                    </div>
                    </div>
                    </main>
            `
        });
        document.getElementById("containerBox").innerHTML = productHtml;
    }

function searchItem(event){
    let searchTerm=event.target.value.toLowerCase();
    let filterProduct=products.filter(
        (product) =>
     product.title.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
     );
    fetchProduct(filterProduct);
 }
 document.getElementById("searchProduct").addEventListener("input",searchItem);


function Viewmore(productId){
  localStorage.setItem("selectedProductId",productId);
  window.location.href="viewMore.html"
}

fetchData();

