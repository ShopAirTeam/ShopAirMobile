var productServices = require('../services/productServices');

exports.getListProducts = async function getListProducts(){
    return await productServices.getListProducts();
}

exports.getProductByID = async function getProductByID(id){
    return await productServices.getProductByID(id);
}

exports.addNew = async function addNew(params) {
    let {productName, price, date, saleUpTo, detailsProduct, idLoaiSP, imgProduct} = params
    let products = {
      productName: productName,
      price: price,
      date: date,
      saleUpTo: saleUpTo,
      detailsProduct: detailsProduct,
      idLoaiSP: idLoaiSP,
      imgProduct: imgProduct
    }
    await productServices.addNew(products);
}

exports.edit = async function editProduct(id, params){
    let {productName, price, date, saleUpTo, detailsProduct, idLoaiSP, imgProduct} = params
    let product_edit = {id, productName, price, date, saleUpTo, detailsProduct, idLoaiSP, imgProduct}
    await productServices.edit(product_edit)
}

exports.remove = async function removeProductByID(id){
   let data = await productServices.remove(id)
    return data
};
