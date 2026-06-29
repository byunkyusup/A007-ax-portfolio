import { ButtonLink } from '../ui/Button';
import { buildMailto } from '../../lib/contact';
import './hero.css';

const METRICS = [
  { value: '6', label: 'AI 전환 프로젝트' },
  { value: '3', label: '단계 도입 프레임워크' },
  { value: '0', label: '외부로 나가는 데이터' },
] as const;

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading" id="top">
      <div className="hero__grid grid">
        <div className="hero__body">
          <p className="kicker hero__kicker">AI Transformation · Enterprise</p>
          <h1 id="hero-heading" className="display hero__headline">
            AX 전환,
            <br />
            <span className="hero__headline-accent">어디서 막혀 있나요?</span>
          </h1>
          <p className="lead hero__lead">
            진단부터 정착까지, 데이터가 외부로 나가지 않는{' '}
            <strong className="accent-text">보안 친화 AI</strong>로
            기업의 AI 전환을 현장에서 이끕니다.
          </p>
          <div className="hero__actions">
            <ButtonLink href={buildMailto()} variant="primary">
              AX 전환 상담하기
            </ButtonLink>
            <ButtonLink href="#work" variant="ghost">
              AX 역량 보기
            </ButtonLink>
          </div>
        </div>

        <aside className="hero__aside" aria-label="핵심 지표">
          <ul className="hero__metrics">
            {METRICS.map((metric) => (
              <li key={metric.label} className="hero__metric">
                <span className="display hero__metric-value">{metric.value}</span>
                <span className="mono-tag hero__metric-label">{metric.label}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <div className="hero__rule-wrap grid" aria-hidden="true">
        <hr className="rule hero__rule" />
      </div>
    </section>
  );
}
