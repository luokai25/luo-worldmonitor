/**
 * Billing service — UNLOCKED VERSION
 *
 * No subscriptions, no payments, no Dodo integration.
 * All features are free.
 */

export interface SubscriptionInfo {
  planKey: string;
  displayName: string;
  status: "active";
  currentPeriodEnd: number;
}

// Everyone has active free subscription
const FREE_SUBSCRIPTION: SubscriptionInfo = {
  planKey: "free",
  displayName: "Free (All Features Unlocked)",
  status: "active",
  currentPeriodEnd: Number.MAX_SAFE_INTEGER,
};

let currentSubscription: SubscriptionInfo = FREE_SUBSCRIPTION;
const listeners = new Set<(sub: SubscriptionInfo | null) => void>();

/**
 * No-op - no subscription watch needed
 */
export async function initSubscriptionWatch(_userId?: string): Promise<void> {
  for (const cb of listeners) cb(currentSubscription);
}

/**
 * Register callback - immediately fires with free subscription
 */
export function onSubscriptionChange(
  cb: (sub: SubscriptionInfo | null) => void,
): () => void {
  listeners.add(cb);
  cb(currentSubscription);
  return () => listeners.delete(cb);
}

/**
 * No-op
 */
export function destroySubscriptionWatch(): void {}

/**
 * Always returns free subscription
 */
export function getSubscription(): SubscriptionInfo | null {
  return currentSubscription;
}

/**
 * Pre-reserve tab - no-op, returns null
 */
export function prereserveBillingPortalTab(): Window | null {
  return null;
}

/**
 * No billing portal needed
 */
export async function openBillingPortal(preopened?: Window | null): Promise<string | null> {
  return null;
}

