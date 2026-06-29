/**
 * 서비스 제안 — AX 도입을 단계별(진단 → PoC → 정착)로 프레이밍한다.
 * 신뢰 요소(차별점)도 함께 데이터로 관리한다.
 */
export interface ServiceStage {
  readonly id: string;
  readonly step: string;
  readonly phase: string;
  readonly name: string;
  readonly summary: string;
  readonly deliverables: readonly string[];
  readonly duration: string;
}

export const serviceStages: readonly ServiceStage[] = [
  {
    id: 'assessment',
    step: '01',
    phase: 'Assessment',
    name: '진단',
    summary:
      '어디서 막혀 있는지부터 정확히 짚습니다. 업무 흐름·데이터·리스크를 살펴 AX 기회를 우선순위화합니다.',
    deliverables: [
      'AX 성숙도 진단 리포트',
      '업무별 자동화 기회 맵',
      '데이터·보안 제약 정리',
      '우선순위 로드맵 초안',
    ],
    duration: '1–2주',
  },
  {
    id: 'poc',
    step: '02',
    phase: 'Proof of Concept',
    name: 'PoC',
    summary:
      '가장 효과 큰 한 가지를 빠르게 증명합니다. stdlib 기반의 가벼운 구현으로 며칠 단위 검증이 가능합니다.',
    deliverables: [
      '동작하는 PoC (로컬 실행 가능)',
      '정량 효과 측정 지표',
      '도입 시 ROI 추정',
      '확장 시 아키텍처 제안',
    ],
    duration: '2–4주',
  },
  {
    id: 'scale',
    step: '03',
    phase: 'Scale',
    name: '정착',
    summary:
      '검증된 PoC를 실제 운영에 안착시킵니다. 사람의 승인 루프를 유지해 통제 가능한 자동화를 설계합니다.',
    deliverables: [
      '운영 환경 통합 및 배포',
      '승인·모니터링 워크플로',
      '내부 담당자 핸드오버',
      '지속 개선 운영 가이드',
    ],
    duration: '지속',
  },
];

export interface Differentiator {
  readonly id: string;
  readonly title: string;
  readonly body: string;
}

export const differentiators: readonly Differentiator[] = [
  {
    id: 'local-first',
    title: '로컬 우선 · API 키 없이 동작',
    body: '데모와 PoC가 외부 API 키 없이 로컬 환경에서 종단 간 실행됩니다. 도입 검증의 진입 장벽이 낮습니다.',
  },
  {
    id: 'data-security',
    title: '데이터가 외부로 나가지 않는 설계',
    body: '로컬 LLM(Ollama) 기반으로 민감한 사내 데이터를 외부로 전송하지 않는 보안 친화 구조를 우선합니다.',
  },
  {
    id: 'lightweight',
    title: 'stdlib-only 가벼운 구현',
    body: '불필요한 의존성 없이 표준 라이브러리 중심으로 구현해 유지보수 부담과 공급망 리스크를 줄입니다.',
  },
  {
    id: 'fast-poc',
    title: '빠른 PoC로 리스크 최소화',
    body: '큰 투자를 약속하기 전에 효과를 먼저 증명합니다. 짧은 사이클로 검증하고 의사결정을 돕습니다.',
  },
];
