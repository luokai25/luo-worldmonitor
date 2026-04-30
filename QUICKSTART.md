# 🚀 Luo World Monitor - Quick Start Guide

## What You Get (All Free!)

✅ **Unlimited Dashboards** - Create as many monitoring views as you want
✅ **Full API Access** - 1000 requests/minute for programmatic access
✅ **All Export Formats** - CSV, PDF, JSON, XLSX, API streams
✅ **AI Features** - Stock analysis, market briefs, news summarization
✅ **Geopolitical Tracking** - Military movements, conflict zones, disasters
✅ **Custom Widgets** - Build your own monitoring panels
✅ **MCP Connectors** - Connect to external data sources

---

## 1-Minute Setup

```bash
# Clone
git clone https://github.com/luokai25/luo-worldmonitor.git
cd luo-worldmonitor

# Install & Run
npm install
npm run dev
```

Open http://localhost:5173 - **thats it!**

---

## Optional: Add AI Features

For AI-powered analysis, set ONE of these:

### Option A: Groq (Recommended - Fast & Free)
1. Go to https://console.groq.com/
2. Create free account
3. Get API key
4. Add to `.env.local`:
```
GROQ_API_KEY=your_key_here
```
**Free tier: 14,400 requests/day**

### Option B: Ollama (Unlimited - Runs Locally)
1. Install: https://ollama.ai/
2. Run: `ollama pull llama3`
3. Add to `.env.local`:
```
OLLAMA_API_URL=http://localhost:11434
OLLAMA_MODEL=llama3
```
**Unlimited, completely free, offline-capable**

---

## Dashboard Presets

### 🌍 Global Intelligence
- World news feed (500+ sources)
- Earthquake map
- Weather alerts
- Country risk scores

### 📈 Finance
- Stock tickers (92 exchanges)
- Crypto prices
- Commodities
- Market briefs

### ⚔️ Geopolitical
- Military movements
- Conflict zones
- Flight tracking
- Maritime AIS

### 🛰️ Space
- Satellite tracking
- Near-Earth objects
- Space news
- ISS position

### 🌡️ Climate
- Air quality
- Weather alerts
- Disaster tracking
- Climate data

---

## Data Sources (All Free!)

### No API Key Required:
- Open-Meteo (weather)
- USGS (earthquakes)
- NASA (satellites)
- Hacker News
- Reddit RSS
- CoinGecko (crypto)
- GDELT (events)

### Free API Key Required:
- Groq (AI)
- Finnhub (stocks)
- FRED (economics)
- NASA FIRMS (fires)

---

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Docker
```bash
docker-compose up
```

### Desktop App
```bash
npm run tauri build
```

---

## Support

- Open an issue: https://github.com/luokai25/luo-worldmonitor/issues
- Original project: https://github.com/koala73/worldmonitor

---

**Made free by Luo Kai** 🌍

