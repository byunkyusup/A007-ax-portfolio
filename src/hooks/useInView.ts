import { useEffect, useRef } from 'react';

/**
 * 요소가 뷰포트에 들어오면 `is-revealed` 클래스를 붙여 스크롤 리빌을 트리거한다.
 * IntersectionObserver 기반 — 스크롤 핸들러 churn 없음.
 * reduced-motion은 global.css의 .reveal 규칙이 처리한다.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.18,
  rootMargin = '0px 0px -8% 0px',
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-revealed');
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
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
