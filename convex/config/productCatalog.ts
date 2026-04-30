/**
 * Canonical product catalog — UNLOCKED VERSION
 *
 * All features are now FREE and unlocked for everyone.
 * No subscriptions, no paywalls, no limits.
 */

export type PlanFeatures = {
  tier: number;
  maxDashboards: number;
  apiAccess: boolean;
  apiRateLimit: number;
  prioritySupport: boolean;
  exportFormats: string[];
};

export interface CatalogEntry {
  planKey: string;
  displayName: string;
  priceCents: number | null;
  billingPeriod: "monthly" | "annual" | "none";
  tierGroup: string;
  features: PlanFeatures;
  marketingFeatures: string[];
  selfServe: boolean;
  highlighted: boolean;
  currentForCheckout: boolean;
  publicVisible: boolean;
}

// ---------------------------------------------------------------------------
// UNLOCKED: Everyone gets enterprise features for FREE
// ---------------------------------------------------------------------------

const UNLOCKED_FEATURES: PlanFeatures = {
  tier: 3,
  maxDashboards: -1, // unlimited
  apiAccess: true,
  apiRateLimit: 1000,
  prioritySupport: true,
  exportFormats: ["csv", "pdf", "json", "xlsx", "api-stream"],
};

// ---------------------------------------------------------------------------
// The Catalog — Simplified to single free tier with all features
// ---------------------------------------------------------------------------

export const PRODUCT_CATALOG: Record<string, CatalogEntry> = {
  free: {
    planKey: "free",
    displayName: "Free (All Features Unlocked)",
    priceCents: 0,
    billingPeriod: "none",
    tierGroup: "free",
    features: UNLOCKED_FEATURES,
    marketingFeatures: [
      "✅ Unlimited dashboards",
      "✅ Full API access (1000 req/min)",
      "✅ All export formats",
      "✅ AI stock analysis & backtesting",
      "✅ Daily market briefs",
      "✅ Military & geopolitical tracking",
      "✅ Custom widget builder",
      "✅ MCP data connectors",
      "✅ Priority data refresh",
    ],
    selfServe: true,
    highlighted: true,
    currentForCheckout: false,
    publicVisible: true,
  },
};

export const LEGACY_PRODUCT_ALIASES: Record<string, string> = {};

export const PLAN_PRECEDENCE: Record<string, number> = {
  free: 100,
};

export function getEntitlementFeatures(planKey: string): PlanFeatures {
  // Always return unlocked features
  return UNLOCKED_FEATURES;
}

export function resolveProductToPlan(dodoProductId: string): string | null {
  return "free";
}

export function getCheckoutProducts(): CatalogEntry[] {
  return []; // No checkout needed
}

export function getPublicTiers(): CatalogEntry[] {
  return Object.values(PRODUCT_CATALOG).filter((e) => e.publicVisible);
}

export function getSeedableProducts(): Array<{
  dodoProductId: string;
  planKey: string;
  displayName: string;
  isActive: boolean;
}> {
  return []; // No products to seed
}

