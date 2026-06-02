import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-consent');
    if (!accepted) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] bg-surface border-t border-outline-variant px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg animate-fade-up">
      <p className="text-sm text-on-surface-variant text-center md:text-left">
        We use cookies to improve your experience. By continuing to use this site you accept our{' '}
        <Link to="/privacy-policy" className="text-accent underline">Privacy Policy</Link>.
      </p>
      <button
        onClick={accept}
        className="flex-shrink-0 bg-accent text-accent-foreground text-sm font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition active:scale-95"
      >
        Accept
      </button>
    </div>
  );
}
