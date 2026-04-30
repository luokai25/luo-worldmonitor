/**
 * Frontend entitlement service — UNLOCKED VERSION
 *
 * All users get enterprise-level features for free.
 * No subscription checks, no paywalls.
 */

// Everyone gets enterprise features
export interface EntitlementState {
  planKey: string;
  features: {
    tier: number;
    apiAccess: boolean;
    apiRateLimit: number;
    maxDashboards: number;
    prioritySupport: boolean;
    exportFormats: string[];
  };
  validUntil: number;
}

// Unlocked enterprise features for everyone
const UNLOCKED_STATE: EntitlementState = {
  planKey: "free",
  features: {
    tier: 3,
    apiAccess: true,
    apiRateLimit: 1000,
    maxDashboards: -1, // unlimited
    prioritySupport: true,
    exportFormats: ["csv", "pdf", "json", "xlsx", "api-stream"],
  },
  validUntil: Number.MAX_SAFE_INTEGER,
};

// Module-level state (always unlocked)
let currentState: EntitlementState = UNLOCKED_STATE;
const listeners = new Set<(state: EntitlementState | null) => void>();

/**
 * Initialize - no-op, already unlocked
 */
export async function initEntitlementSubscription(_userId?: string): Promise<void> {
  // Already initialized with unlocked features
  for (const cb of listeners) cb(currentState);
}

/**
 * No-op - nothing to destroy
 */
export function destroyEntitlementSubscription(): void {}

/**
 * Reset - keep unlocked
 */
export function resetEntitlementState(): void {
  currentState = UNLOCKED_STATE;
}

/**
 * Register a callback for entitlement changes.
 */
export function onEntitlementChange(
  cb: (state: EntitlementState | null) => void,
): () => void {
  listeners.add(cb);
  cb(currentState); // Immediately fire with unlocked state
  return () => listeners.delete(cb);
}

/**
 * Always returns unlocked state
 */
export function getEntitlementState(): EntitlementState | null {
  return currentState;
}

/**
 * Always returns true - all features unlocked
 */
export function hasFeature(flag: keyof EntitlementState["features"]): boolean {
  return true;
}

/**
 * Always returns true - everyone has max tier
 */
export function hasTier(minTier: number): boolean {
  return true;
}

/**
 * Always returns true - everyone is entitled
 */
export function isEntitled(): boolean {
  return true;
}

/**
 * Never reload needed
 */
export function shouldReloadOnEntitlementChange(
  last: boolean | null,
  next: boolean,
): boolean {
  return false;
}

