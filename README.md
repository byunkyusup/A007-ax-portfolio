# A007 · AX 전환 포트폴리오 (AX Transformation Portfolio)

### 🔗 라이브 데모 — **https://a007-ax-portfolio.vercel.app**

[![Live](https://img.shields.io/badge/Live-a007--ax--portfolio.vercel.app-000?logo=vercel)](https://a007-ax-portfolio.vercel.app)
[![CI](https://github.com/byunkyusup/A007-ax-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/byunkyusup/A007-ax-portfolio/actions/workflows/ci.yml)

> GitHub Actions가 `main` 푸시마다 빌드·테스트 후 위 URL로 자동 배포합니다.

AI 전환(AX, AI Transformation)을 추진하는 **엔터프라이즈 의사결정자**를 대상으로 한
맞춤형 포트폴리오 사이트입니다. 변규섭(byunkyusup)이 진단 → PoC → 정착의 흐름으로
조직의 AX 전환을 이끌 수 있음을 설득하는 단일 페이지(SPA) 랜딩입니다.

> A tailored single-page portfolio aimed at enterprise decision-makers undergoing AI
> Transformation. Korean-first copy. Dark-luxury visual direction with a restrained gold accent.

## 핵심 메시지

- **로컬 우선 · API 키 없이 동작 · 데이터가 외부로 나가지 않는 보안 친화 설계** — 반복되는 차별점.
- 6개의 실제 프로젝트를 *기술 나열*이 아니라 *문제 → AI 해결 → 성과* 서사로 재구성.
- AX 도입을 **진단(Assessment) → PoC → 정착(Scale)** 단계별 서비스로 제안.

## 기술 스택 (Stack)

- **Vite + React 18 + TypeScript** (sibling `A002-AIEdu-Website` 컨벤션을 따름)
- 디자인 토큰: `src/styles/tokens.css` (color/typography/spacing/motion 전부 CSS 커스텀 속성)
- 폰트: **Fraunces**(display) + **Inter**(body), `font-display: swap`, Google Fonts `<link>` + preconnect
- 모션: `transform`/`opacity`만 사용. `IntersectionObserver` 기반 스크롤 리빌(`useInView`),
  `prefers-reduced-motion` 존중(`useReducedMotion` + 전역 CSS 게이팅)
- 테스트: **Vitest**(유닛) + **Playwright**(E2E 스모크)

## 디렉터리 구조

```
src/
  components/
    hero/        Hero.tsx + hero.css
    work/        Work.tsx, WorkCard.tsx + work.css      (AX 역량)
    services/    Services.tsx + services.css            (진단→PoC→정착)
    trust/       Trust.tsx + trust.css                  (신뢰 요소)
    contact/     Contact.tsx + contact.css              (CTA)
    layout/      Header.tsx, Footer.tsx + css
    ui/          Button.tsx, Reveal.tsx + button.css
  hooks/         useReducedMotion.ts, useInView.ts
  lib/           contact.ts (mailto 빌더 + 연락처 상수)
  data/          projects.ts, services.ts               (콘텐츠는 타입 배열로 분리)
  styles/        tokens.css, typography.css, global.css
e2e/             smoke.spec.ts
```

## 로컬 실행 (Commands)

```bash
npm install        # 의존성 설치
npm run dev        # Vite 개발 서버 (http://localhost:5187)
npm run build      # tsc -b && vite build  (타입체크가 빌드에 포함됨)
npm run preview    # 프로덕션 빌드 미리보기 (http://localhost:4187)
npm run test:unit  # Vitest 유닛 테스트 (non-watch)
npm run test:e2e   # Playwright E2E (자동으로 build + preview 후 실행)
```

## CI/CD

`.github/workflows/ci.yml`

역할이 분리되어 있습니다: **GitHub Actions = 품질 게이트(빌드·테스트)**, **Vercel = 배포**.

- **GitHub Actions** (`.github/workflows/ci.yml`) — 트리거: `main` 푸시 + 모든 `pull_request`.
  `build-and-test` 잡 하나만 실행: `npm ci` → `npm run build` → `npm run test:unit`
  → `npx playwright install --with-deps chromium` → `npm run test:e2e`.
- **Vercel 네이티브 Git 연동** — 배포 전담. **`main` 푸시 → 자동 프로덕션 배포**,
  PR → 자동 프리뷰 배포. GitHub Actions에 별도 deploy 잡이나 `VERCEL_TOKEN`이 필요 없습니다.

### 자동 배포 1회 설정 (Vercel 대시보드)

Vercel → `a007-ax-portfolio` 프로젝트 → **Settings → Git → Connect Git Repository**
에서 `byunkyusup/A007-ax-portfolio` 를 연결하고(최초 1회 Vercel GitHub App 승인),
Production Branch가 `main` 인지 확인하면 끝입니다. 이후 푸시마다 자동 배포됩니다.

`vercel.json`은 Vite SPA용 최소 설정으로, `dist`를 출력하고 모든 경로를 `index.html`로
리라이트합니다.

## 접근성 · 성능

- 시맨틱 HTML(`header`/`nav`/`main`/`section`/`footer`) + `aria-label`, 스킵 링크, `:focus-visible`.
- 고대비 텍스트, 키보드 내비게이션, `prefers-reduced-motion` 시 모든 모션 비활성화.
- 컴포지터 친화 모션만 사용(`transform`/`opacity`), 폰트 `display: swap`, 이미지 미사용으로 가벼운 번들.

## 라이선스 / 연락

문의: **kbyun@i-screamarts.com** (변규섭 · byunkyusup)
