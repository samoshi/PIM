function postData(url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
  }
  
function createProduct(productData) {
    return postData('http://localhost:3000/products', productData);
  }
  
function readProducts() {
return fetch('http://localhost:3000/products')
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

function readProductById(productId) {
return fetch('http://localhost:3000/products/${productId}')
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

function updateProduct(productId, updatedProductData) {
return fetch('http://localhost:3000/products/${productId}', {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedProductData)
})
.then(response => response.json())
.catch(error => console.error('Error:', error));
}

function deleteProduct(productId) {
return fetch('http://localhost:3000/products/${productId}', {
    method: 'DELETE'
});
}

// Example data, add more or change for the server:
const productData = {
id: '1',
slug: 'product-1',
title: 'Product 1',
description: 'Description for Product 1',
categories: ['Category A'],
image: 'product1.jpg'
};

createProduct(productData)
.then(data => {
    console.log('Product created:', data);
    // Perform other actions here, such as updating or deleting the product
})
.catch(error => console.error('Error:', error));
