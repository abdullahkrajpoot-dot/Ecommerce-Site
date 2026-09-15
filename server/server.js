const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// health
app.get('/_health', (req, res) => res.json({ ok: true }));

// basic example route
app.get('/api/ping', (req, res) => res.json({ pong: true }));

// mount example routers
const ordersRouter = require('./routes/orders');
app.use('/api/orders', ordersRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on ${port}`));
