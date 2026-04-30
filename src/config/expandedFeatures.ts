/**
 * Luo World Monitor - Expanded Features
 * 
 * New capabilities added to make this the most comprehensive
 * free global intelligence platform.
 */

// ============================================
// NEW: AI-POWERED ANALYSIS (Free with Ollama)
// ============================================

export const AI_FEATURES = {
  // Local AI analysis - runs on your machine
  localAnalysis: {
    enabled: true,
    models: ["llama3", "mistral", "phi3"],
    features: [
      "news_summarization",
      "sentiment_analysis",
      "trend_detection",
      "anomaly_alerting",
      "predictive_forecasting",
    ],
    requirements: "Ollama running locally (free, unlimited)",
  },

  // Multi-model consensus
  multiModel: {
    enabled: true,
    description: "Run multiple AI models and compare outputs",
    useCases: [
      "Cross-validate geopolitical assessments",
      "Compare financial predictions",
      "Detect AI hallucinations",
    ],
  },
};

// ============================================
// NEW: REAL-TIME ALERTS (Free)
// ============================================

export const ALERT_SYSTEM = {
  // Browser push notifications
  browserPush: {
    enabled: true,
    triggers: [
      "earthquake_above_5.0",
      "market_crash_5_percent",
      "military_escalation",
      "disaster_alert",
      "air_quality_hazardous",
    ],
    maxAlertsPerHour: 20,
  },

  // Email alerts (via free Resend tier)
  emailAlerts: {
    enabled: true,
    freeTier: "100 emails/day",
    triggers: [
      "daily_intelligence_brief",
      "weekly_market_summary",
      "breaking_news_critical",
    ],
  },

  // Telegram bot alerts
  telegramAlerts: {
    enabled: true,
    botSetup: "Message @YourBotName on Telegram",
    triggers: [
      "instant_critical_events",
      "hourly_updates",
      "custom_threshold_alerts",
    ],
  },
};

// ============================================
// NEW: HISTORICAL DATA (Free)
// ============================================

export const HISTORICAL_DATA = {
  // Built-in SQLite database for historical tracking
  localDatabase: {
    enabled: true,
    retentionDays: 365,
    features: [
      "event_history",
      "price_history",
      "earthquake_archive",
      "flight_tracking_logs",
    ],
    storage: "Browser IndexedDB + Optional SQLite export",
  },

  // Export formats
  exports: {
    formats: ["csv", "json", "sqlite", "parquet"],
    scheduling: "Daily/weekly/monthly automated exports",
  },
};

// ============================================
// NEW: CUSTOM WIDGETS (Free)
// ============================================

export const CUSTOM_WIDGETS = {
  // Widget builder
  builder: {
    enabled: true,
    templates: [
      "ticker_tape",
      "world_clock",
      "weather_radar",
      "news_scroll",
      "map_overlay",
      "chart_embed",
    ],
    customization: {
      colors: true,
      sizes: true,
      refresh_rates: true,
      data_sources: true,
    },
  },

  // Pre-built widgets
  presets: [
    {
      name: "Crypto Dashboard",
      panels: ["btc_price", "eth_price", "market_cap", "trending"],
    },
    {
      name: "Earthquake Monitor",
      panels: ["world_map", "recent_list", "magnitude_chart", "alerts"],
    },
    {
      name: "Flight Tracker",
      panels: ["live_map", "airport_status", "delays", "routes"],
    },
    {
      name: "News Aggregator",
      panels: ["headlines", "categories", "sources", "trending"],
    },
  ],
};

// ============================================
// NEW: DATA CONNECTORS (Free)
// ============================================

export const DATA_CONNECTORS = {
  // MCP (Model Context Protocol) connectors
  mcp: {
    enabled: true,
    connectors: [
      "filesystem",
      "sqlite",
      "http",
      "websocket",
      "rss",
      "email_imap",
      "telegram",
    ],
    usage: "Connect external data sources and AI models",
  },

  // REST API endpoints
  api: {
    enabled: true,
    endpoints: ["/api/v1/news", "/api/v1/events", "/api/v1/prices", "/api/v1/alerts"],
    rateLimit: 1000, // requests per minute
    documentation: "/docs/api",
  },

  // Webhook integrations
  webhooks: {
    enabled: true,
    outgoing: ["slack", "discord", "teams", "custom"],
    incoming: ["github", "stripe", "custom"],
  },
};

// ============================================
// NEW: COLLABORATION (Free)
// ============================================

export const COLLABORATION = {
  // Share dashboards via URL
  sharing: {
    enabled: true,
    methods: ["public_link", "embed_code", "qr_code"],
    permissions: ["view", "edit", "admin"],
  },

  // Export for collaboration
  export: {
    formats: ["pdf", "image", "json", "html"],
    include: ["layout", "settings", "data_snapshot"],
  },
};

// ============================================
// NEW: MOBILE & DESKTOP (Free)
// ============================================

export const APP_VERSIONS = {
  // Progressive Web App
  pwa: {
    enabled: true,
    features: ["offline_mode", "push_notifications", "background_sync"],
    install: "Add to home screen from browser",
  },

  // Desktop apps (Tauri)
  desktop: {
    platforms: ["windows", "macos", "linux"],
    features: ["system_tray", "native_notifications", "file_access"],
    build: "npm run tauri build",
  },

  // Mobile (future)
  mobile: {
    status: "planned",
    platforms: ["ios", "android"],
    eta: "Q3 2026",
  },
};

// ============================================
// NEW: PRIVACY FEATURES (Free)
// ============================================

export const PRIVACY = {
  // No tracking
  analytics: "none",

  // Data ownership
  dataLocation: "on_your_machine",

  // Export/delete
  dataControl: {
    export: "one_click",
    delete: "one_click",
    portability: "standard_formats",
  },

  // Local-first
  localFirst: {
    offlineCapable: true,
    cloudOptional: true,
    encrypted: "optional",
  },
};

// ============================================
// COMING SOON
// ============================================

export const ROADMAP = {
  q2_2026: [
    "Mobile apps (iOS/Android)",
    "Voice commands",
    "AR globe visualization",
    "AI agent automation",
  ],
  q3_2026: [
    "Multi-language real-time translation",
    "Satellite imagery integration",
    "Custom LLM fine-tuning",
    "Federated data sharing",
  ],
  q4_2026: [
    "Decentralized data network",
    "On-device AI training",
    "Plugin marketplace",
    "API marketplace",
  ],
};

