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
  return (
    <header className="site-header">
      <div className="site-header__inner grid">
        <a className="site-header__brand" href="#top">
          <span className="site-header__name">{AUTHOR_NAME}</span>
          <span className="site-header__role mono-tag">AX Transformation Lead</span>
        </a>
        <nav className="site-header__nav" aria-label="주요 메뉴">
          <ul className="site-header__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a className="site-header__link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink
          href={buildMailto()}
          variant="ghost"
          className="site-header__cta"
        >
          상담하기
        </ButtonLink>
      </div>
    </header>
  );
}
