import { serviceStages } from '../../data/services';
import { Reveal } from '../ui/Reveal';
import './services.css';

export function Services() {
  return (
    <section className="section services" aria-labelledby="services-heading" id="services">
      <div className="grid services__head">
        <Reveal className="services__intro">
          <p className="kicker">How I Help</p>
          <h2 id="services-heading" className="heading services__title">
            진단 → PoC → 정착,
            <br />
            <span className="accent-text">검증하며 나아갑니다.</span>
          </h2>
          <p className="lead services__lede">
            큰 투자를 약속하기 전에 효과를 먼저 증명합니다. 각 단계마다 손에 잡히는 산출물을 남깁니다.
          </p>
        </Reveal>
      </div>

      <ol className="grid services__list">
        {serviceStages.map((stage, i) => (
          <Reveal as="li" key={stage.id} delay={i * 90} className="stage">
            <article aria-labelledby={`stage-${stage.id}`}>
              <header className="stage__head">
                <span className="display stage__step" aria-hidden="true">{stage.step}</span>
                <div className="stage__titles">
                  <span className="mono-tag stage__phase">{stage.phase}</span>
                  <h3 id={`stage-${stage.id}`} className="heading stage__name">{stage.name}</h3>
                </div>
                <span className="stage__duration mono-tag">{stage.duration}</span>
              </header>

              <p className="stage__summary">{stage.summary}</p>

              <div className="stage__deliverables">
                <p className="stage__deliverables-label mono-tag">산출물</p>
                <ul className="stage__deliverable-list">
                  {stage.deliverables.map((item) => (
                    <li key={item} className="stage__deliverable">
                      <span className="stage__check" aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
