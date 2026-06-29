import { differentiators } from '../../data/services';
import { Reveal } from '../ui/Reveal';
import './trust.css';

export function Trust() {
  return (
    <section className="section trust" aria-labelledby="trust-heading" id="trust">
      <div className="grid trust__grid">
        <Reveal className="trust__intro">
          <p className="kicker">Why It Works</p>
          <h2 id="trust-heading" className="heading trust__title">
            엔터프라이즈가
            <br />
            안심할 수 있는 방식.
          </h2>
          <p className="trust__lede">
            가장 민감한 자산은 데이터입니다. 그래서 기본값을
            <strong className="accent-text"> 로컬·보안 우선</strong>으로 둡니다.
          </p>
        </Reveal>

        <ul className="trust__list">
          {differentiators.map((item, i) => (
            <Reveal as="li" key={item.id} delay={i * 70} className="trust-item">
              <span className="display trust-item__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="trust-item__body">
                <h3 className="heading trust-item__title">{item.title}</h3>
                <p className="trust-item__text">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
