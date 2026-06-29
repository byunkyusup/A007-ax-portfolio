import { useEffect, useRef } from 'react';

/**
 * 요소가 뷰포트에 들어오면 `is-revealed` 클래스를 붙여 스크롤 리빌을 트리거한다.
 * IntersectionObserver 기반 — 스크롤 핸들러 churn 없음.
 * reduced-motion은 global.css의 .reveal 규칙이 처리한다.
 */
/** 안전장치: 옵저버가 늦거나 실패해도 콘텐츠가 영구히 숨지 않도록 강제 노출하는 시간(ms). */
const REVEAL_FALLBACK_MS = 600;

export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.12,
  rootMargin = '0px 0px 15% 0px',
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add('is-revealed');

    // 옵저버 미지원 환경: 즉시 노출
    if (typeof IntersectionObserver === 'undefined') {
      reveal();
      return;
    }

    // 첫 화면(이미 뷰포트 안)은 마운트 시점에 바로 노출 → 깜빡임/공백 방지
    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportH) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);

    // 안전장치: 옵저버가 어떤 이유로든 트리거되지 않아도 콘텐츠는 반드시 보이게 한다.
    const fallback = window.setTimeout(reveal, REVEAL_FALLBACK_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold, rootMargin]);

  return ref;
}
