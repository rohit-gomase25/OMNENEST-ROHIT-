interface Rating {
  rate: number;    // example: 3.9
  count: number;   // example: 120
}
 
export interface Product {
  id: number;          // unique number, e.g. 1, 2, 3...
  title: string;       // product name
  price: number;       // price in dollars, e.g. 109.95
  description: string; // long text description
  category: string;    // e.g. "men's clothing", "electronics"
  image: string;       // URL of the product image
  rating: Rating;      // nested object with rate and count
}

