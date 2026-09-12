-- Ecommerce Store Database Schema
-- Purpose: store customer orders for the NextGen Store frontend.

CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  address TEXT,
  product TEXT,
  quantity INTEGER DEFAULT 1,
  price TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional index for lookups by order time
CREATE INDEX IF NOT EXISTS idx_orders_created_at
  ON orders (created_at DESC);
