import { useEffect, useState } from 'react';
import { ButtonLink } from '../ui/Button';
import { buildMailto, AUTHOR_NAME } from '../../lib/contact';
import './header.css';

const NAV_ITEMS = [
  { href: '#work', label: 'AX 역량' },
  { href: '#services', label: '서비스' },
  { href: '#trust', label: '신뢰 요소' },
  { href: '#contact', label: '문의' },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const headerClass = `site-header${isScrolled ? ' site-header--scrolled' : ''}${
    isMenuOpen ? ' site-header--open' : ''
  }`;

  return (
    <header className={headerClass}>
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" onClick={closeMenu}>
          <span className="site-header__name">{AUTHOR_NAME}</span>
          <span className="site-header__role mono-tag">AX Transformation Lead</span>
        </a>

        <nav className="site-header__nav" aria-label="주요 메뉴">
          <ul className="site-header__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a className="site-header__link" href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <ButtonLink href={buildMailto()} variant="primary" className="site-header__cta">
            상담하기
          </ButtonLink>
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="site-header__toggle-bar" aria-hidden="true" />
            <span className="site-header__toggle-bar" aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className="site-header__mobile"
        aria-label="모바일 메뉴"
        hidden={!isMenuOpen}
      >
        <ul className="site-header__mobile-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a className="site-header__mobile-link" href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
