import { describe, it, expect } from 'vitest';
import { projects } from './projects';
import { serviceStages, differentiators } from './services';
import { buildMailto, CONTACT_EMAIL } from '../lib/contact';

describe('projects 데이터 무결성', () => {
  it('정확히 6개의 프로젝트를 가진다', () => {
    expect(projects).toHaveLength(6);
  });

  it('모든 프로젝트가 필수 필드를 비어있지 않게 가진다', () => {
    for (const p of projects) {
      expect(p.id.trim()).not.toBe('');
      expect(p.index.trim()).not.toBe('');
      expect(p.title.trim()).not.toBe('');
      expect(p.domain.trim()).not.toBe('');
      expect(p.problem.trim()).not.toBe('');
      expect(p.solution.trim()).not.toBe('');
      expect(p.result.trim()).not.toBe('');
      expect(p.stack.length).toBeGreaterThan(0);
      expect(p.stack.every((t) => t.trim() !== '')).toBe(true);
    }
  });

  it('프로젝트 id가 고유하다', () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('정확히 하나의 대표 사례를 가진다', () => {
    expect(projects.filter((p) => p.featured)).toHaveLength(1);
  });

  it('대표 사례는 멀티 에이전트 프로젝트(A004)다', () => {
    const featured = projects.find((p) => p.featured);
    expect(featured?.id).toBe('a004-partner-desk');
  });

  it('로컬 우선 프로젝트가 다수 존재한다(보안 친화 차별점)', () => {
    expect(projects.filter((p) => p.localFirst).length).toBeGreaterThanOrEqual(4);
  });
});

describe('serviceStages 데이터 무결성', () => {
  it('진단 → PoC → 정착 3단계를 순서대로 가진다', () => {
    expect(serviceStages.map((s) => s.id)).toEqual(['assessment', 'poc', 'scale']);
  });

  it('각 단계가 산출물을 1개 이상 가진다', () => {
    for (const stage of serviceStages) {
      expect(stage.name.trim()).not.toBe('');
      expect(stage.summary.trim()).not.toBe('');
      expect(stage.deliverables.length).toBeGreaterThan(0);
      expect(stage.deliverables.every((d) => d.trim() !== '')).toBe(true);
    }
  });
});

describe('differentiators 데이터 무결성', () => {
  it('차별점이 비어있지 않게 채워져 있다', () => {
    expect(differentiators.length).toBeGreaterThan(0);
    for (const d of differentiators) {
      expect(d.title.trim()).not.toBe('');
      expect(d.body.trim()).not.toBe('');
    }
  });
});

describe('buildMailto', () => {
  it('연락처 이메일로 mailto 링크를 생성한다', () => {
    const link = buildMailto();
    expect(link.startsWith(`mailto:${CONTACT_EMAIL}?`)).toBe(true);
  });

  it('제목과 본문을 인코딩해 포함한다', () => {
    const link = buildMailto('a@b.com', '제 목', '본 문');
    expect(link).toContain('mailto:a@b.com?');
    expect(link).toContain('subject=');
    expect(link).toContain('body=');
    // 공백/한글이 raw로 들어가지 않고 인코딩된다
    expect(link).not.toContain('제 목');
  });
});
