import { ButtonLink } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { buildMailto, CONTACT_EMAIL } from '../../lib/contact';
import './contact.css';

export function Contact() {
  return (
    <section className="section section--lg contact" aria-labelledby="contact-heading" id="contact">
      <div className="grid contact__grid">
        <Reveal className="contact__inner">
          <p className="kicker contact__kicker">Start the Conversation</p>
          <h2 id="contact-heading" className="display contact__headline">
            AX 전환,
            <br />
            <span className="accent-text">대화부터 시작하세요.</span>
          </h2>
          <p className="lead contact__lede">
            현재 어디서 막혀 있는지 한 통의 메일로 알려주세요. 진단 관점에서 가능한 첫걸음을 함께 정리하겠습니다.
          </p>
          <div className="contact__actions">
            <ButtonLink href={buildMailto()} variant="primary" className="contact__cta">
              AX 전환 상담하기
            </ButtonLink>
            <a className="contact__email mono-tag" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
