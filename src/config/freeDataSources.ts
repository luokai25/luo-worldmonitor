/**
 * Additional Free Data Sources for Luo World Monitor
 * 
 * All these sources are FREE and require no API keys!
 * Just enable them in your config.
 */

// ============================================
// NEWS & MEDIA (Free, No Auth)
// ============================================

export const FREE_NEWS_SOURCES = {
  // RSS feeds - unlimited, no auth
  rss: {
    enabled: true,
    feeds: [
      "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
      "https://feeds.bbci.co.uk/news/world/rss.xml",
      "https://www.theguardian.com/world/rss",
      "https://www.aljazeera.com/xml/rss.xml",
      "https://www.reddit.com/r/worldnews/.rss",
      "https://news.ycombinator.com/rss",
    ],
  },

  // Hacker News - free API
  hackernews: {
    enabled: true,
    baseUrl: "https://hacker-news.firebaseio.com/v0",
    endpoints: {
      top: "/topstories.json",
      new: "/newstories.json",
      best: "/beststories.json",
    },
  },

  // Reddit public RSS - no auth
  reddit: {
    enabled: true,
    subreddits: [
      "worldnews",
      "geopolitics",
      "finance",
      "technology",
      "space",
      "climate",
    ],
    format: ".rss",
  },
};

// ============================================
// WEATHER & CLIMATE (Free, No Auth)
// ============================================

export const FREE_WEATHER_SOURCES = {
  // Open-Meteo - completely free, no API key
  openMeteo: {
    enabled: true,
    baseUrl: "https://api.open-meteo.com/v1",
    features: [
      "current_weather",
      "hourly_forecast",
      "daily_forecast",
      "air_quality",
      "climate_models",
    ],
    limits: "None - unlimited free requests",
  },

  // NOAA public APIs - free
  noaa: {
    enabled: true,
    baseUrl: "https://api.weather.gov",
    features: ["alerts", "stations", "forecasts"],
    limits: "Rate-limited but free",
  },

  // USGS Earthquakes - free, no auth
  earthquakes: {
    enabled: true,
    baseUrl: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary",
    feeds: ["all_hour", "all_day", "significant_week", "significant_month"],
  },
};

// ============================================
// SATELLITE & SPACE (Free, No Auth)
// ============================================

export const FREE_SPACE_SOURCES = {
  // NASA public APIs - free with optional key (higher limits)
  nasa: {
    enabled: true,
    baseUrl: "https://api.nasa.gov",
    endpoints: {
      apod: "/planetary/apod", // Astronomy Picture of the Day
      neo: "/neo/rest/v1/feed", // Near Earth Objects
      mars: "/mars-photos/api/v1/rovers", // Mars rover photos
    },
    note: "Free tier: 1000 requests/hour without key, 50000/hour with free key",
  },

  // Spaceflight News API - free, no auth
  spaceflightNews: {
    enabled: true,
    baseUrl: "https://api.spaceflightnewsapi.net/v4",
    features: ["articles", "blogs", "reports"],
    limits: "Free unlimited",
  },

  // Celestrak satellite tracking - free, no auth
  celestrak: {
    enabled: true,
    baseUrl: "https://celestrak.org/NORAD/elements",
    features: ["active_satellites", "space_stations", "starlink"],
    format: "TLE (Two-Line Element)",
  },
};

// ============================================
// CRYPTO & FINANCE (Free, No Auth)
// ============================================

export const FREE_FINANCE_SOURCES = {
  // CoinGecko - free tier
  coingecko: {
    enabled: true,
    baseUrl: "https://api.coingecko.com/api/v3",
    features: ["prices", "market_data", "trending", "exchanges"],
    limits: "10-50 calls/minute on free tier",
  },

  // Blockchain.com - free, no auth
  blockchain: {
    enabled: true,
    baseUrl: "https://api.blockchain.com/v3/exchange",
    features: ["tickers", "orderbook", "trades"],
  },

  // European Central Bank - free exchange rates
  ecb: {
    enabled: true,
    baseUrl: "https://sdw-wsrest.ecb.europa.eu/service/data",
    features: ["exchange_rates", "interest_rates"],
    format: "JSON/SDMX",
  },

  // Federal Reserve FRED - free with key
  fred: {
    enabled: true,
    baseUrl: "https://api.stlouisfed.org/fred",
    features: ["economic_data", "series", "releases"],
    note: "Free API key required",
  },
};

// ============================================
// ENVIRONMENT & HEALTH (Free, No Auth)
// ============================================

export const FREE_ENVIRONMENT_SOURCES = {
  // OpenAQ - air quality, free
  openaq: {
    enabled: true,
    baseUrl: "https://api.openaq.org/v3",
    features: ["real_time_air_quality", "locations", "countries"],
    note: "Free API key recommended but not required",
  },

  // WAQI - World Air Quality Index
  waqi: {
    enabled: true,
    baseUrl: "https://api.waqi.info",
    features: ["city_aqi", "station_data"],
    note: "Free token required (simple registration)",
  },

  // ReliefWeb - disaster tracking, free
  reliefweb: {
    enabled: true,
    baseUrl: "https://api.reliefweb.io/v1",
    features: ["disasters", "reports", "jobs"],
    note: "Free app name required",
  },

  // UNHCR - refugee data, free
  unhcr: {
    enabled: true,
    baseUrl: "https://api.unhcr.org",
    features: ["population_data", "operations", "situations"],
    note: "CC BY 4.0 license - free public API",
  },
};

// ============================================
// SCIENTIFIC DATA (Free, No Auth)
// ============================================

export const FREE_SCIENCE_SOURCES = {
  // arXiv - open access papers
  arxiv: {
    enabled: true,
    baseUrl: "http://export.arxiv.org/api/query",
    features: ["paper_search", "category_feeds"],
    format: "Atom XML",
  },

  // PubMed Central - biomedical literature
  pmc: {
    enabled: true,
    baseUrl: "https://www.ncbi.nlm.nih.gov/pmc",
    features: ["open_access_articles"],
    format: "XML/JSON",
  },

  // WorldPop - population data
  worldpop: {
    enabled: true,
    baseUrl: "https://www.worldpop.org/rest/services",
    features: ["population_counts", "demographics"],
    note: "Free academic API",
  },
};

// ============================================
// GEOPOLITICAL (Free, Limited)
// ============================================

export const FREE_GEOPOLITICAL_SOURCES = {
  // GDELT Project - global events database
  gdelt: {
    enabled: true,
    baseUrl: "https://api.gdeltproject.org/api/v2",
    features: ["event_database", "geo_mentions", "tone_analysis"],
    limits: "Rate-limited but free",
  },

  // CIA World Factbook (via公开 mirrors)
  factbook: {
    enabled: true,
    note: "Public domain - various JSON mirrors available",
    features: ["country_profiles", "statistics"],
  },

  // UN Comtrade - trade statistics
  comtrade: {
    enabled: true,
    baseUrl: "https://comtradeapi.un.org",
    features: ["trade_data", "tariff_lines"],
    note: "Free tier with registration",
  },
};

// ============================================
// MARITIME (Free, No Auth)
// ============================================

export const FREE_MARITIME_SOURCES = {
  // AISStream free tier
  aisstream: {
    enabled: true,
    baseUrl: "https://aisstream.io/api",
    features: ["vessel_positions"],
    note: "Free tier available with registration",
  },

  // Global Fishing Watch - public data
  fishingWatch: {
    enabled: true,
    baseUrl: "https://globalfishingwatch.org/api/v2",
    features: ["fishing_activity", "vessel_tracks"],
    note: "Public vessel tracking",
  },
};

// ============================================
// CONFIGURATION
// ============================================

export const ENABLE_ALL_FREE_SOURCES = {
  news: FREE_NEWS_SOURCES,
  weather: FREE_WEATHER_SOURCES,
  space: FREE_SPACE_SOURCES,
  finance: FREE_FINANCE_SOURCES,
  environment: FREE_ENVIRONMENT_SOURCES,
  science: FREE_SCIENCE_SOURCES,
  geopolitical: FREE_GEOPOLITICAL_SOURCES,
  maritime: FREE_MARITIME_SOURCES,
};

export function getSourceConfig(source: string): unknown {
  return ENABLE_ALL_FREE_SOURCES[source as keyof typeof ENABLE_ALL_FREE_SOURCES];
}

