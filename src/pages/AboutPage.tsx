import { Link } from 'react-router-dom';
import { Target, Heart, Code2, Users } from 'lucide-react';
import { useSEO, SITE_ORIGIN, SITE_NAME } from '../lib/seo';

export default function AboutPage() {
  useSEO({
    title: 'About Us | Vidify Games',
    description: 'Vidify Games is a free educational gaming platform built to teach real-world skills through original, interactive games. Learn our mission and story.',
    canonicalPath: '/about',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: `About ${SITE_NAME}`,
      url: `${SITE_ORIGIN}/about`,
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_ORIGIN },
    },
  });

  return (
    <div className="container-content py-10 max-w-3xl">
      <nav className="flex items-center gap-2 text-sm text-ink-400 mb-6">
        <Link to="/" className="hover:text-ink-700">Home</Link>
        <span>/</span>
        <span className="text-ink-600">About</span>
      </nav>

      <h1 className="font-display font-extrabold text-3xl text-ink-900 mb-4">About Vidify Games</h1>

      <div className="prose-edu">
        <p>
          Vidify Games is a growing collection of free, browser-based educational games built to make learning practical skills feel like play. Every game on our platform is designed from the ground up — no third-party embeds, no recycled content — to teach something real: how to manage money, spot online scams, sharpen logic, or simply learn a new fact along the way.
        </p>

        <h2>What We Do</h2>
        <p>
          We build games across four categories: Finance Games, Tech &amp; Logic Games, Educational Games, and Kids Games. Each one is built around a single idea — that people learn better when they're engaged, not lectured. Whether it's understanding how a credit score works or catching the signs of a phishing email, we turn the concept into something you can practice, fail at, and improve on, without any real-world risk.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 my-8 not-prose">
          <div className="card p-5">
            <Target className="h-6 w-6 text-brand-600 mb-2" />
            <h3 className="font-display font-bold text-ink-900">Original, Not Aggregated</h3>
            <p className="text-sm text-ink-500 mt-1">Every game on Vidify Games is built from scratch with real game logic. No embeds, no iframes, no third-party content.</p>
          </div>
          <div className="card p-5">
            <Heart className="h-6 w-6 text-brand-600 mb-2" />
            <h3 className="font-display font-bold text-ink-900">Free, Forever</h3>
            <p className="text-sm text-ink-500 mt-1">No paywalls, no signups, no downloads. We believe educational tools should be accessible to everyone.</p>
          </div>
          <div className="card p-5">
            <Code2 className="h-6 w-6 text-brand-600 mb-2" />
            <h3 className="font-display font-bold text-ink-900">Built for the Web</h3>
            <p className="text-sm text-ink-500 mt-1">Our games run in any modern browser on any device. No installs, no plugins, no friction.</p>
          </div>
          <div className="card p-5">
            <Users className="h-6 w-6 text-brand-600 mb-2" />
            <h3 className="font-display font-bold text-ink-900">Made for Learners</h3>
            <p className="text-sm text-ink-500 mt-1">Each game page includes an original article explaining the skill, how to play, and tips for improvement.</p>
          </div>
        </div>

        <h2>Our Approach</h2>
        <p>
          Every game is paired with a short, plain-language guide explaining how it works, what skill it builds, and how to get better at it. We keep our content honest and specific — no vague advice, no filler. We're a small, independent team, and we review every game and article before it goes live to make sure it's accurate, useful, and free of unnecessary jargon.
        </p>

        <h2>New Games Every Month</h2>
        <p>
          We add new games regularly across all four categories, based on topics people are actively trying to understand — from personal finance basics to everyday tech literacy. If there's a topic you'd like to see turned into a game, reach out — we read every message.
        </p>

        <h2>Get in Touch</h2>
        <p>
          Questions, feedback, or suggestions? Email us at <a href="mailto:vidifygamesinfo@gmail.com" className="text-brand-700 font-semibold hover:underline">vidifygamesinfo@gmail.com</a> or through our <Link to="/contact" className="text-brand-700 font-semibold hover:underline">contact page</Link>.
        </p>
      </div>
    </div>
  );
}
