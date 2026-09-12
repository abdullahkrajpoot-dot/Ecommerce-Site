const { Client } = require('pg');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, product, quantity, price, address } = req.body || {};
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    res.status(500).json({ error: 'DATABASE_URL not configured' });
    return;
  }

  const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } });

  try {
    await client.connect();

    // Ensure orders table exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        name TEXT,
        email TEXT,
        address TEXT,
        product TEXT,
        quantity INTEGER,
        price TEXT,
        created_at TIMESTAMP DEFAULT now()
      );
    `);

    const insert = await client.query(
      'INSERT INTO orders (name, email, address, product, quantity, price) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id, created_at',
      [name || null, email || null, address || null, product || null, parseInt(quantity) || 1, price || null]
    );

    res.status(201).json({ orderId: insert.rows[0].id, createdAt: insert.rows[0].created_at });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error', details: err.message });
  } finally {
    try { await client.end(); } catch (e) {}
  }
};
