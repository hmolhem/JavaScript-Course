var cartinfo = (function() {

    var products = [];

    function getCartInfo(){

        let newProduct = {
            productName: null,
            productPrice: 0.00,
            productDesc: null,
        };

        let productName = document.getElementById('productname');
        let productPrice = document.getElementById('productprice');
        let productDesc = document.getElementById('productdesc');
        
        newProduct.productName = productName.innerHTML;
        newProduct.productPrice = productPrice.innerHTML;
        newProduct.productDesc = productDesc.innerHTML;
        console.log(newProduct);
        return newProduct;
    }

    products.push(getCartInfo());

    return {
        getCartInfo: getCartInfo,
        products:products,
    };
})();

console.log(cartinfo.products);

export default cartinfo;
