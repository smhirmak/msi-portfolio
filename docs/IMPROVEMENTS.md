# Portfolio improvements

The approved usability, accessibility, framework, localization and performance work is implemented in this update.

## Next design iteration

Revisit the visual consistency of the red/blue hero, cyan project accent and purple/blue timeline. Agree on a common accent palette, button hierarchy and motion language before making further visual changes. This is intentionally deferred at the owner's request; accessible color contrast has been corrected in the current Tailwind tokens.

## Content boundaries

Project detail pages are deferred. Do not add screenshots, product videos or new project internals: some client projects are confidential. Existing CV-approved descriptions and supplied logos are retained.

## Verification limits

Browser tests mock Google reCAPTCHA and EmailJS so they never send real messages. They verify required CAPTCHA, token forwarding, validation, success and error handling. Live CAPTCHA requires the public site key in the deployment environment, allowed domains in Google reCAPTCHA and the matching secret in the EmailJS template settings.

Lighthouse results are local lab measurements. INP must also be measured with real visitor interactions. `window.__portfolioVitals` contains the latest browser measurements and `portfolio:web-vitals` events can be connected to a chosen analytics service later.
