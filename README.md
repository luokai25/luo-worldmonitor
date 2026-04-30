# 🌍 Luo World Monitor

**Real-time global intelligence dashboard** — AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface.

**Fully open and free** — no subscriptions, no paywalls, all features unlocked.

---

## 🚀 Features

### Core Intelligence
- **500+ curated news feeds** across 15 categories, AI-synthesized into briefs
- **Dual map engine** — 3D globe (globe.gl) and WebGL flat map (deck.gl) with 45 data layers
- **Cross-stream correlation** — military, economic, disaster, and escalation signal convergence
- **Country Intelligence Index** — composite risk scoring across 12 signal categories

### Financial Intelligence
- **Finance radar** — 92 stock exchanges, commodities, crypto, and 7-signal market composite
- **AI stock analysis & backtesting**
- **Daily market briefs**

### Geopolitical Tracking
- **Military movement tracking**
- **Conflict zone monitoring**
- **Disaster alerts** — earthquakes, weather, climate

### All Features Unlocked
- ✅ Unlimited dashboards
- ✅ Full API access
- ✅ All export formats (CSV, PDF, JSON, XLSX, API streams)
- ✅ Custom widget builder
- ✅ MCP data connectors

---

## Quick Start

```bash
git clone https://github.com/luokai25/luo-worldmonitor.git
cd luo-worldmonitor
npm install
npm run dev
```

Open [localhost:5173](http://localhost:5173).

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Vanilla TypeScript, Vite, globe.gl + Three.js, deck.gl + MapLibre GL |
| **Desktop** | Tauri 2 (Rust) with Node.js sidecar |
| **AI/ML** | Ollama / Groq / OpenRouter, Transformers.js (browser-side) |
| **API Contracts** | Protocol Buffers (92 protos, 22 services) |
| **Deployment** | Vercel Edge Functions, Railway relay, Tauri, PWA |

---

## Self-Hosting

See `SELF_HOSTING.md` for Docker and Vercel deployment options.

---

## License

AGPL v3 — Free and open source forever.

---

## Acknowledgments

Forked from [koala73/worldmonitor](https://github.com/koala73/worldmonitor).

Flight data provided by [Wingbits](https://wingbits.com).

