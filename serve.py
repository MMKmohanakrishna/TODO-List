import http.server
import socketserver

PORT = 5321

class Handler(http.server.SimpleHTTPRequestHandler):
    def guess_type(self, path):
        base = super().guess_type(path)
        ctype = base[0] if isinstance(base, tuple) else base
        if not ctype:
            ctype = "application/octet-stream"
        if ctype.startswith("text/") or ctype in ("application/javascript", "application/json"):
            if "charset=" not in ctype:
                ctype = ctype + "; charset=utf-8"
        return ctype

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.allow_reuse_address = True
    httpd.serve_forever()
