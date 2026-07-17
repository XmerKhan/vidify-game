import { Link } from 'react-router-dom';
import { useSEO, SITE_ORIGIN, SITE_NAME } from '../lib/seo';

export default function PrivacyPage() {
  const currentDate = new Date();
  const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  useSEO({
    title: 'Privacy Policy | Vidify Games',
    description: 'Read the Vidify Games privacy policy. We do not collect personal data. Game scores are stored locally in your browser.',
    canonicalPath: '/privacy',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'PrivacyPolicy',
      name: `Privacy Policy | ${SITE_NAME}`,
      url: `${SITE_ORIGIN}/privacy`,
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_ORIGIN },
    },
  });

  return (
    <div className="container-content py-10 max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-ink-400 mb-6">
        <Link to="/" className="hover:text-ink-700">Home</Link>
        <span>/</span>
        <span className="text-ink-600">Privacy Policy</span>
      </nav>

      <h1 className="font-display font-extrabold text-3xl text-ink-900 mb-4">Privacy Policy</h1>
      <p className="text-sm text-ink-400 mb-8">Last Updated: {monthYear}</p>

      <div className="prose-edu">
        <p>
          Welcome to Vidify Games. This Privacy Policy explains what information we collect when you visit vidify.site (the "Site"), how we use it, and the choices available to you. By using the Site, you agree to the terms described below.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We do not require account registration to play games on Vidify Games. Most information we collect is non-personal and automatically gathered, including:
        </p>
        <ul>
          <li>Pages visited and games played</li>
          <li>Approximate location (country/city level, based on IP address)</li>
          <li>Browser type, device type, and operating system</li>
          <li>Time spent on the Site and navigation patterns</li>
          <li>Scores and progress, which are stored locally in your browser (localStorage) and are not transmitted to our servers</li>
        </ul>
        <p>
          If you contact us directly (for example, via email), we may collect the information you voluntarily provide, such as your name and email address, solely to respond to your inquiry.
        </p>

        <h2>2. Cookies and Similar Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to operate the Site, remember your preferences, and support advertising. When you first visit the Site, you will see a cookie consent notice. By clicking "Accept," you agree to our use of cookies as described in this policy. You can disable cookies through your browser settings, though some features of the Site may not function properly without them.
        </p>

        <h2>3. Advertising</h2>
        <p>
          Vidify Games uses Google AdSense to display advertisements. Google and its partners may use cookies to serve ads based on your prior visits to this and other websites. You may opt out of personalized advertising by visiting Google's Ads Settings at <a href="https://adssettings.google.com" className="text-brand-700 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">https://adssettings.google.com</a>. Third-party vendors, including Google, may also use cookies to serve ads based on your visits to this Site and other sites on the internet. For more information about how Google uses data, visit <a href="https://policies.google.com/technologies/partner-sites" className="text-brand-700 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/partner-sites</a>.
        </p>

        <h2>4. How We Use Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Operate, maintain, and improve the Site and our games</li>
          <li>Understand how visitors use the Site through aggregate analytics</li>
          <li>Display relevant advertising</li>
          <li>Respond to inquiries sent to us directly</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>

        <h2>5. Third-Party Analytics</h2>
        <p>
          We may use third-party analytics tools (such as Google Analytics) to understand Site traffic and usage patterns. These tools collect information sent by your browser as part of a page request, including cookies and your IP address. This data is used in aggregate and is not used to personally identify you.
        </p>

        <h2>6. Children's Privacy</h2>
        <p>
          While some of our games are designed to be enjoyable for a broad age range, including younger players, Vidify Games as a whole is a general-audience website and is not intended to knowingly collect personal information from children under 13. We do not require registration or personal information to play any game on the Site. If you believe a child has provided us with personal information, please contact us at <a href="mailto:vidifygamesinfo@gmail.com" className="text-brand-700 font-semibold hover:underline">vidifygamesinfo@gmail.com</a> so we can address it.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          Non-personal analytics data is retained only as long as necessary to support the purposes described in this policy. Game scores and progress stored via localStorage remain on your own device and can be cleared at any time by clearing your browser's site data.
        </p>

        <h2>8. Your Rights (EEA, UK, and California Residents)</h2>
        <p>
          Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information, and to object to certain processing activities. To exercise any of these rights, contact us at <a href="mailto:vidifygamesinfo@gmail.com" className="text-brand-700 font-semibold hover:underline">vidifygamesinfo@gmail.com</a>. California residents may also have rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected and the right to opt out of its sale (note: we do not sell personal information).
        </p>

        <h2>9. Do Not Track</h2>
        <p>
          Some browsers offer a "Do Not Track" signal. Our Site does not currently respond to these signals, as there is no industry-standard approach to honoring them yet.
        </p>

        <h2>10. External Links</h2>
        <p>
          Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policy of any third-party site you visit.
        </p>

        <h2>11. Security</h2>
        <p>
          We take reasonable steps to protect the information we collect, but no method of transmission or storage is completely secure. We cannot guarantee absolute security.
        </p>

        <h2>12. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Continued use of the Site after changes are posted constitutes your acceptance of the revised policy. The "Last Updated" date at the top of this page reflects the most recent revision.
        </p>

        <h2>13. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at:
        </p>
        <p>
          <a href="mailto:vidifygamesinfo@gmail.com" className="text-brand-700 font-semibold hover:underline">vidifygamesinfo@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
