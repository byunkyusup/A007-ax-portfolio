import type { Project } from '../../data/projects';
import { Reveal } from '../ui/Reveal';

interface WorkCardProps {
  project: Project;
  delay?: number;
}

/** 프로젝트 한 건을 problem → solution → result 서사로 표현. */
export function WorkCard({ project, delay = 0 }: WorkCardProps) {
  const className = project.featured ? 'work-card work-card--featured' : 'work-card';

  return (
    <Reveal as="li" delay={delay} className={className}>
      <article aria-labelledby={`proj-${project.id}`}>
        <header className="work-card__head">
          <span className="display work-card__index" aria-hidden="true">
            {project.index}
          </span>
          <span className="mono-tag work-card__domain">{project.domain}</span>
          {project.featured && (
            <span className="work-card__badge">대표 사례</span>
          )}
        </header>

        <h3 id={`proj-${project.id}`} className="heading work-card__title">
          {project.title}
        </h3>

        <dl className="work-card__story">
          <div className="work-card__row">
            <dt className="work-card__label">문제</dt>
            <dd className="work-card__text">{project.problem}</dd>
          </div>
          <div className="work-card__row">
            <dt className="work-card__label work-card__label--accent">해결</dt>
            <dd className="work-card__text">{project.solution}</dd>
          </div>
          <div className="work-card__row">
            <dt className="work-card__label">성과</dt>
            <dd className="work-card__text">{project.result}</dd>
          </div>
        </dl>

        <footer className="work-card__foot">
          <ul className="work-card__stack">
            {project.stack.map((tech) => (
              <li key={tech} className="work-card__tag mono-tag">{tech}</li>
            ))}
          </ul>
          {project.localFirst && (
            <span className="work-card__local" title="로컬 우선 · 데이터 외부 미전송">
              로컬 우선 · 보안 친화
            </span>
          )}
        </footer>
      </article>
    </Reveal>
  );
}
