/**
 * Entitlement queries — UNLOCKED VERSION
 *
 * All users get enterprise features. No subscription checks.
 */

import { query, internalQuery } from "./_generated/server";
import { v } from "convex/values";

// Enterprise features for everyone
const UNLOCKED_ENTITLEMENT = {
  planKey: "free",
  features: {
    tier: 3,
    maxDashboards: -1,
    apiAccess: true,
    apiRateLimit: 1000,
    prioritySupport: true,
    exportFormats: ["csv", "pdf", "json", "xlsx", "api-stream"],
  },
  validUntil: Number.MAX_SAFE_INTEGER,
};

/**
 * Public query: always returns unlocked features
 */
export const getEntitlementsForUser = query({
  args: {},
  handler: async () => {
    return UNLOCKED_ENTITLEMENT;
  },
});

/**
 * Internal query: always returns unlocked features
 */
export const getEntitlementsByUserId = internalQuery({
  args: { userId: v.string() },
  handler: async () => {
    return UNLOCKED_ENTITLEMENT;
  },
});

