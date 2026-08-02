export const COOKIE_CONSENT_KEY = 'cookie_consent';
export const COOKIE_CONSENT_ACCEPTED_EVENT = 'cookie-consent-accepted';
export const COOKIE_POLICY_URL = '/documents/cookie-policy';

export type CookieConsentStatus = 'accepted' | null;

export const getCookieConsent = (): CookieConsentStatus => {
  if (typeof window === 'undefined') return null;

  try {
    return localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted'
      ? 'accepted'
      : null;
  } catch {
    return null;
  }
};

export const acceptCookieConsent = (): void => {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
  } catch {
    // localStorage может быть недоступен
  }

  window.dispatchEvent(new Event(COOKIE_CONSENT_ACCEPTED_EVENT));
};
