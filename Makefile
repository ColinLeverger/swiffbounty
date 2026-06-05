.PHONY: test

test:
	@echo "Serving docs/ at http://localhost:8080 — Ctrl+C to stop"
	cd docs && python3 -m http.server 8080
