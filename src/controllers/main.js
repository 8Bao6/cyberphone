var productService = new ProductService();
function getEle(id) {
  return document.getElementById(id);
};

function getListProduct() {
  var promise = productService.getListProductAPI();
  promise
    .then(function (result) {
      console.log(result);
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
getListProduct();

function renderHTML(data) {
  var content = "";
  //  for(var i=0;i<data.length;i++){
  //   var product = data[i];

  //  }
  data.forEach(function (product) {
    content += `
    
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card cardPhone">
          <img src="./img/${product.hinhAnh}" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <h3 class="cardPhone__title">${product.tenSP}</h3>
                  <p class="cardPhone__text">Accessories</p>
                </div>
                <div>
                  <h3 class="cardPhone__title">${product.gia}</h3>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="cardPhone__rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div>
                  <button class="btnPhone-shadow"><i class="fa fa-shopping-cart"></i> Buy Now</button>
                </div>
              </div>

            </div>
        </div>
      </div>
    `

  })
  console.log(data);
  getEle("table__product").innerHTML = content;
}