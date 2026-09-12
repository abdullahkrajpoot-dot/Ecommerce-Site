import json
import os
import socketserver
from http.server import SimpleHTTPRequestHandler

PORT = 8000
ROOT = os.path.dirname(__file__) or "."
os.chdir(ROOT)


def read_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def write_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path in ["/api/products", "/api/products.json"]:
            products = read_json(os.path.join(ROOT, "database", "products.json"))
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            self.wfile.write(json.dumps({"products": products}).encode("utf-8"))
            return

        if self.path == "/":
            self.path = "/index.html"

        return super().do_GET()

    def do_POST(self):
        if self.path in ["/api/order", "/api/create-order"]:
            length = int(self.headers.get("Content-Length", "0"))
            raw = self.rfile.read(length)
            try:
                payload = json.loads(raw.decode("utf-8")) if raw else {}
            except Exception:
                payload = {}

            name = (payload.get("name") or "").strip()
            email = (payload.get("email") or "").strip()
            phone = (payload.get("phone") or "").strip()
            address = (payload.get("address") or "").strip()
            product = (payload.get("product") or "").strip()
            quantity = int(payload.get("quantity") or 1)
            price = payload.get("price") or ""

            if not all([name, email, phone, address, product]):
                self.send_response(400)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({"error": "Please fill in all required fields."}).encode("utf-8"))
                return

            orders_path = os.path.join(ROOT, "database", "orders.json")
            try:
                orders = read_json(orders_path)
            except FileNotFoundError:
                orders = []

            order = {
                "id": len(orders) + 1,
                "name": name,
                "email": email,
                "phone": phone,
                "address": address,
                "product": product,
                "quantity": max(1, quantity),
                "price": price,
                "createdAt": __import__("datetime").datetime.utcnow().isoformat() + "Z",
            }
            orders.append(order)
            write_json(orders_path, orders)

            self.send_response(201)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            self.wfile.write(json.dumps({"message": "Order placed successfully.", "orderId": order["id"], "order": order}).encode("utf-8"))
            return

        self.send_response(405)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.end_headers()
        self.wfile.write(json.dumps({"error": "Method not allowed"}).encode("utf-8"))


with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server")
