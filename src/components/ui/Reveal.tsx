import type { ElementType, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

interface RevealProps {
  children: ReactNode;
  /** 렌더링할 시맨틱 태그 (기본 div) */
  as?: ElementType;
  /** 스태거 효과용 지연(ms) */
  delay?: number;
  className?: string;
}

/**
 * IntersectionObserver로 진입 시 노출되는 래퍼.
 * 모션은 .reveal CSS가 담당하고, reduced-motion은 전역 규칙이 비활성화한다.
 */
export function Reveal({ children, as, delay = 0, className }: RevealProps) {
  const ref = useInView<HTMLElement>();
  const Tag = as ?? 'div';
  const classes = className ? `reveal ${className}` : 'reveal';

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as Record<string, string>) : undefined}
    >
      {children}
    </Tag>
  );
}
