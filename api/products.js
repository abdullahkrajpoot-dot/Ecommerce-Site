const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'database', 'products.json');

const catalogGroups = {
  Gadgets: 'T900 Ultra Smartwatch Series 8|AirPods Pro Gen 2|P47 Wireless Bluetooth Headphones|M10 TWS Earbuds Powerbank Case|RGB Gaming Mouse and Keyboard Combo|Fast Charging Type-C Cable|Portable Power Bank 10000mAh|Smart LED Strip Light|Mini Bluetooth Speaker|Car Mobile Holder|Rechargeable Mini Fan|Wireless Charging Pad|USB Desk Humidifier|Smart Doorbell Camera|Mini Projector|WiFi Smart Plug|Digital Alarm Clock|Laptop Cooling Pad|Travel Adapter|Bluetooth Selfie Remote',
  'Smart Watches': 'FitPro Activity Tracker|Kids GPS Smart Watch|Amoled Round Dial Watch|Classic Steel Smart Watch|Rose Gold Smart Watch|Rugged Outdoor Smart Watch|Bluetooth Calling Watch|Sports Silicone Watch|Magnetic Watch Charger|Nylon Watch Strap|Metal Mesh Watch Band|Waterproof Digital Watch|Sleep Tracking Band|ECG Health Monitor Watch|Touch Screen Square Watch|Watch Protective Case|Leather Loop Strap|Step Counter Watch|Watch Charging Dock|GPS Running Watch',
  'Home & Kitchen': 'LED Sunset Lamp with Remote|Rechargeable Water Dispenser Pump|Mini Portable USB Juicer Blender|Electric Vegetable Chopper|Manual Food Slicer|Oil Spray Bottle|Silicone Air Fryer Liner|Digital Kitchen Scale|Portable Blender Bottle|Stainless Garlic Press|Egg Storage Box|Sink Drain Basket|Mini Waffle Maker|Reusable Storage Bags|Spice Jar Organizer|Silicone Spoon Set|Non Stick Grill Pan|Dish Drying Rack|Electric Milk Frother|Rotating Spice Rack',
  'Fashion Accessories': 'Minimalist Wallet|Polarized Sunglasses|Leather Belt for Men|Crossbody Phone Bag|Ladies Tote Bag|Classic Baseball Cap|Steel Bracelet|Adjustable Ring Set|Pearl Hair Clip Set|Silk Scrunchies Pack|Travel Makeup Pouch|Fashion Scarf|Leather Card Holder|Canvas Shoulder Bag|Sports Cap|Premium Keychain Set|Men Wrist Bracelet|Compact Jewelry Box|Satin Hair Band|Travel Passport Holder',
  'Wireless & Audio': 'Noise Cancelling Headphones|Karaoke Wireless Microphone|Bluetooth Soundbar|Mini Party Speaker|Gaming Headset with Mic|Wireless Earbud Case|Bluetooth FM Transmitter|Portable Radio Speaker|Type-C Earphones|Over Ear DJ Headphones|Wireless Lavalier Mic|RGB Gaming Speaker|Sleep Headband Headphones|Clip On Earphones|Bluetooth Car Kit|Waterproof Shower Speaker|Kids Headphones|Wireless Audio Receiver|Podcast Microphone Kit|Headphone Carrying Case',
};

function createSupplementalProducts(startId) {
  const images = [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
  ];

  return Object.entries(catalogGroups).flatMap(([category, names], groupIndex) =>
    names.split('|').map((name, itemIndex) => {
      const price = 499 + ((groupIndex * 20 + itemIndex) % 18) * 300;
      return {
        id: startId + groupIndex * 20 + itemIndex,
        name,
        category,
        price,
        originalPrice: Math.round(price * 1.45),
        rating: Number((4.3 + ((groupIndex + itemIndex) % 7) / 10).toFixed(1)),
        reviews: 120 + groupIndex * 70 + itemIndex * 17,
        badge: ['Best Seller', 'Fast Moving', 'New Arrival', 'Limited Stock', 'Ready to Ship'][(groupIndex + itemIndex) % 5],
        stock: 5 + ((groupIndex + itemIndex) % 18),
        image: images[groupIndex],
        description: `Fast-moving ${category.toLowerCase()} product for customers and resellers across Pakistan.`,
      };
    }),
  );
}

module.exports = async (req, res) => {
  try {
    const raw = fs.readFileSync(productsPath, 'utf8');
    const products = JSON.parse(raw);
    const allProducts = [...products, ...createSupplementalProducts(products.length + 1)];

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ products: allProducts });
  } catch (error) {
    console.error('products API error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: 'Unable to load products' });
  }
};
