const fs = require('fs');
const path = require('path');

const ordersPath = path.join(__dirname, '..', 'database', 'orders.json');

function readOrders() {
  try {
    const data = fs.readFileSync(ordersPath, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeOrders(orders) {
  fs.writeFileSync(ordersPath, JSON.stringify(orders, null, 2));
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, phone, address, product, quantity, price } = req.body || {};

    if (!name || !email || !phone || !address || !product) {
      return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    const orders = readOrders();
    const order = {
      id: Date.now(),
      name,
      email,
      phone,
      address,
      product,
      quantity: Number(quantity) || 1,
      price,
      createdAt: new Date().toISOString()
    };

    orders.push(order);
    writeOrders(orders);

    return res.status(201).json({
      message: 'Order placed successfully.',
      orderId: order.id,
      order
    });
  } catch (error) {
    console.error('Order API error:', error);
    return res.status(500).json({ error: 'Order failed. Please try again.' });
  }
};
