-- Migration: create initial tables for NextGen marketplace
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT,
  price INTEGER,
  rating NUMERIC(2,1),
  stock_label TEXT,
  image TEXT
);

CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  customer_name TEXT,
  email TEXT,
  address TEXT,
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER DEFAULT 1,
  total_price INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
