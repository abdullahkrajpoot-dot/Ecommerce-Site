# Ecommerce-Site
Premium Electronics & Smart Gadgets e-commerce web application featuring dynamic layout, responsive design, and smooth user navigation.

## Serve the site locally

Run with Python 3 (recommended):

```bash
python server.py
```

Or use the included start scripts:

PowerShell:

```powershell
.\start-local.ps1
```

Command Prompt (Windows):

```bat
start-local.bat
```

Then open: http://localhost:8000

---

## Deploying to Vercel

1. Create a Supabase project and note the Postgres connection string. Vercel will use it as `DATABASE_URL`.
2. Install Vercel CLI and log in:

```bash
npm i -g vercel
vercel login
```

3. Add the `DATABASE_URL` environment variable to your Vercel project:

```bash
vercel env add DATABASE_URL production
```

4. Deploy:

```bash
vercel --prod
```

Notes:
- The site uses a serverless function at `/api/create-order` which expects a Postgres `DATABASE_URL` env var.
- If you prefer MongoDB Atlas or another DB, adapt `api/create-order.js` accordingly and set the env var.
- Locally you can test the frontend against a running local API by using a local Postgres and setting `DATABASE_URL` in your shell before deploying.
