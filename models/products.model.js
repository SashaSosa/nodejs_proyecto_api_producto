// models/products.model.js
import { db } from '../config/firebase.js';
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc
} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export const getAllProducts = async () => {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const productRef = doc(db, 'products', id);
  const productSnap = await getDoc(productRef);
  return productSnap.exists() ? { id: productSnap.id, ...productSnap.data() } : null;
};

export const createProduct = async (productData) => {
  const docRef = await addDoc(productsCollection, productData);
  return { id: docRef.id, ...productData };
};

export const deleteProduct = async (id) => {
  const productRef = doc(db, 'products', id);
  await deleteDoc(productRef);
};
