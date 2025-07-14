// services/products.service.js
import * as productModel from '../models/products.model.js';

export const getAllProducts = () => productModel.getAllProducts();
export const getProductById = (id) => productModel.getProductById(id);
export const createProduct = (data) => productModel.createProduct(data);
export const deleteProduct = (id) => productModel.deleteProduct(id);
