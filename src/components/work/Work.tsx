import { projects } from '../../data/projects';
import { Reveal } from '../ui/Reveal';
import { WorkCard } from './WorkCard';
import './work.css';

export function Work() {
  return (
    <section className="section work" aria-labelledby="work-heading" id="work">
      <div className="grid work__head">
        <Reveal className="work__intro">
          <p className="kicker">Proven AX Capability</p>
          <h2 id="work-heading" className="heading work__title">
            기술이 아니라,
            <br />
            <span className="accent-text">해결한 문제</span>로 말합니다.
          </h2>
          <p className="lead work__lede">
            6개의 프로젝트를 비즈니스 관점에서 다시 봅니다. 공통된 차별점은{' '}
            <strong className="accent-text">로컬 우선 · API 키 없이 동작 · 데이터가 외부로 나가지 않는 보안 친화 설계</strong>
            입니다.
          </p>
        </Reveal>
      </div>

      <ol className="grid work__list">
        {projects.map((project, i) => (
          <WorkCard key={project.id} project={project} delay={(i % 2) * 80} />
        ))}
      </ol>
    </section>
  );
}
