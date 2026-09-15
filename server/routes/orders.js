const express = require('express');
const router = express.Router();

// placeholder controllers (to be implemented in controllers/orders.js)
router.post('/', (req, res) => {
  // create order
  res.status(201).json({ ok: true, order: req.body });
});

router.get('/:id', (req, res) => {
  res.json({ ok: true, id: req.params.id });
});

module.exports = router;
