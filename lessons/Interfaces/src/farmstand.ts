interface Product {
  price: number;
  name: string;
  quantity: number;
}

const printProduct = (product: Product) => {
  console.log(`${product.name} - ${product.price}`);
};
