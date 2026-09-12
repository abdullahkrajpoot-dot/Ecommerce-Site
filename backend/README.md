# Backend Layer

This folder is dedicated to server-side logic and API handling.

Current responsibilities:
- Accept order submissions from the frontend
- Validate payloads and business rules
- Connect to PostgreSQL using DATABASE_URL
- Save orders into the database

Main endpoint:
- /api/create-order

Implementation:
- The runtime API is currently in api/create-order.js
- It should be treated as the backend service layer
