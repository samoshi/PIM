import { Request, Response } from 'express';
import { product } from '../models/product';

const products: product[] = [];

export const createProduct = (req: Request, res: Response) => {
  const product: product = req.body;
  products.push(product);
  res.status(201).json(product);
};

export const getProducts = (req: Request, res: Response) => {
  res.status(200).json(products);
};

export const getProductById = (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === productId);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    res.status(200).json(product);
  }
};

export const updateProduct = (req: Request, res: Response) => {
  const productId = req.params.id;
  const updatedProduct: product = req.body;
  const existingProduct = products.find((p) => p.id === productId);
  if (!existingProduct) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    Object.assign(existingProduct, updatedProduct);
    res.status(200).json(existingProduct);
  }
};

export const deleteProduct = (req: Request, res: Response) => {
  const productId = req.params.id;
  const index = products.findIndex((p) => p.id === productId);
  if (index === -1) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    products.splice(index, 1);
    res.status(204).send();
  }
};
