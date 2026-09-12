const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'database', 'products.json');

module.exports = async (req, res) => {
  try {
    const raw = fs.readFileSync(productsPath, 'utf8');
    const products = JSON.parse(raw);

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ products });
  } catch (error) {
    console.error('products API error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: 'Unable to load products' });
  }
};
