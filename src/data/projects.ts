/**
 * AX 역량 — 기존 6개 프로젝트를 "비즈니스 가치" 관점으로 재구성한다.
 * 기술 나열이 아니라 problem → solution → result 서사로 전달한다.
 */
export interface Project {
  readonly id: string;
  readonly index: string;
  readonly title: string;
  readonly domain: string;
  readonly problem: string;
  readonly solution: string;
  readonly result: string;
  readonly stack: readonly string[];
  /** 로컬 우선·보안 친화 차별점이 적용되는 프로젝트인지 */
  readonly localFirst: boolean;
  /** 가장 강조할 대표 사례 여부 */
  readonly featured: boolean;
}

export const projects: readonly Project[] = [
  {
    id: 'a004-partner-desk',
    index: '01',
    title: '거래처 문의 자동응대 멀티 에이전트',
    domain: 'Multi-Agent · MCP',
    problem:
      '동일한 거래처 문의가 매일 반복되고, 담당자가 단순 응대에 시간을 빼앗겨 핵심 업무가 지연됩니다.',
    solution:
      '여러 전문 에이전트가 문의를 분류·조회·초안 작성까지 협업하고, MCP 게이트웨이로 사내 시스템과 안전하게 연결합니다. 사람은 승인만 하면 됩니다.',
    result:
      '반복 문의의 1차 응대를 자동화해 담당자가 판단이 필요한 업무에 집중. API 키 없이도 종단 간 동작하도록 설계했습니다.',
    stack: ['Multi-Agent', 'MCP', 'Python', '승인 워크플로'],
    localFirst: true,
    featured: true,
  },
  {
    id: 'a006-graphrag',
    index: '02',
    title: '개념 관계를 추론하는 GraphRAG',
    domain: 'Knowledge Graph · RAG',
    problem:
      '단순 키워드 검색은 "무엇을 먼저 알아야 하는가" 같은 관계형 질문에 답하지 못합니다.',
    solution:
      '지식을 그래프로 구조화해 선후 관계·의존성을 따라 추론하고, 결과를 시각적 그래프로 함께 보여줍니다.',
    result:
      '단편적 검색을 넘어 "왜·무엇 다음에"까지 설명하는 차세대 검색 경험을 제공합니다.',
    stack: ['GraphRAG', 'Ollama', 'Graph Viz'],
    localFirst: true,
    featured: false,
  },
  {
    id: 'a005-hybrid-rag',
    index: '03',
    title: '사내 자료 정밀 검색·추천 하이브리드 RAG',
    domain: 'Hybrid Retrieval',
    problem:
      '사내 문서가 쌓일수록 필요한 자료를 정확히 찾기 어렵고, 단일 검색 방식은 누락이 많습니다.',
    solution:
      'BM25 키워드 검색과 bge-m3 임베딩을 RRF로 융합해 정확도와 재현율을 동시에 끌어올립니다.',
    result:
      '키워드·의미 검색의 장점을 결합해 사내 지식과 자료를 더 정확하게 검색·추천합니다.',
    stack: ['BM25', 'bge-m3', 'RRF', 'Ollama'],
    localFirst: true,
    featured: false,
  },
  {
    id: 'a003-pipeline',
    index: '04',
    title: '문서 → 지식 노트 자동 파이프라인',
    domain: 'Data Pipeline',
    problem:
      '회의록·PDF·보고서가 흩어진 채 방치되어 조직의 지식이 자산으로 축적되지 못합니다.',
    solution:
      'PDF를 수집해 Kafka 스트림으로 처리하고, 요약·구조화된 지식 노트로 자동 정리합니다.',
    result:
      '쌓이기만 하던 문서를 검색·재사용 가능한 지식 자산으로 전환하는 흐름을 구축했습니다.',
    stack: ['Kafka', 'Ollama', 'Obsidian Sink'],
    localFirst: true,
    featured: false,
  },
  {
    id: 'a001-smart-factory',
    index: '05',
    title: '실시간 공정 모니터링 대시보드',
    domain: 'Operations · Dashboard',
    problem:
      '설비 가동률과 품질 지표가 분산되어 있어 이상 징후를 늦게 발견합니다.',
    solution:
      '핵심 지표를 한 화면에 통합하고, 이상 신호를 조기에 시각적으로 드러내는 대시보드를 제공합니다.',
    result:
      '가동·품질 상태를 한눈에 파악해 이상을 조기에 감지하고 대응 시간을 단축합니다.',
    stack: ['React', 'TypeScript', 'Realtime'],
    localFirst: false,
    featured: false,
  },
  {
    id: 'a002-aiedu',
    index: '06',
    title: 'AI 교육 마케팅 사이트',
    domain: 'Web · Product Marketing',
    problem:
      '복잡한 AI 교육 가치를 의사결정자에게 빠르게 설득할 채널이 필요했습니다.',
    solution:
      '메시지 우선의 편집형 구성과 성능·접근성을 갖춘 React 사이트로 핵심 가치를 전달합니다.',
    result:
      '제품의 가치 제안을 명확한 서사와 빠른 로딩으로 전달하는 전환 중심 사이트입니다.',
    stack: ['React', 'TypeScript', 'Vite'],
    localFirst: false,
    featured: false,
  },
];
