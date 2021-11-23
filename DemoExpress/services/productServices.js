var categoryServices = require("./categoryServices");
var ProductModel = require("../model/productModel");

exports.getListProducts = async function getListProducts() {
  let products = await ProductModel.find().populate("idLoaiSP");
  return products;
};

exports.getProductByID = async function getProductByID(id) {
  let product = await ProductModel.findById(id);
  // product = {...product, id: product._id}
  return product;
};

exports.addNew = async function addNew(product_push) {
  try {
    let product = new ProductModel(product_push);
    await product.save();
  } catch (error) {
    console.log(error.message);
  }
};

exports.edit = async function editProduct(product_edit) {
  try {
    let proEdit = await ProductModel.findById(product_edit.id);
    if (proEdit) {
      proEdit.productName = product_edit.productName;
      proEdit.price = product_edit.price;
      proEdit.date = product_edit.date;
      proEdit.saleUpTo = product_edit.saleUpTo;
      proEdit.detailsProduct = product_edit.detailsProduct;
      proEdit.idLoaiSP = product_edit.idLoaiSP;

      if (product_edit.imgProduct) {
        proEdit.imgProduct = product_edit.imgProduct;
      }
      await proEdit.save();
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.remove = async function removeProductByID(id) {
  // let prod = await ProductModel.remove({_id: id})
  try {
    let prod = await ProductModel.deleteOne({ _id: id });
    
    return prod;
  } catch (error) {
    console.log(error.message);
  }
};
