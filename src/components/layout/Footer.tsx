import { CONTACT_EMAIL, AUTHOR_NAME, AUTHOR_HANDLE } from '../../lib/contact';
import './footer.css';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer__inner grid">
        <p className="site-footer__brand">
          <span className="site-footer__name">{AUTHOR_NAME}</span>
          <span className="mono-tag">@{AUTHOR_HANDLE}</span>
        </p>
        <p className="site-footer__contact">
          <a href={`mailto:${CONTACT_EMAIL}`} className="site-footer__email">
            {CONTACT_EMAIL}
          </a>
        </p>
        <p className="site-footer__meta mono-tag">
          © {year} · AX Transformation Portfolio
        </p>
      </div>
    </footer>
  );
}
