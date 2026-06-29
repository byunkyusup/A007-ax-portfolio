/** 연락처 상수 — 메일 CTA 한 곳에서만 관리한다. */
export const CONTACT_EMAIL = 'kbyun@i-screamarts.com';
export const AUTHOR_NAME = '변규섭';
export const AUTHOR_HANDLE = 'byunkyusup';

const MAIL_SUBJECT = 'AX 전환 상담 요청';
const MAIL_BODY = '안녕하세요, 변규섭 님. 저희 조직의 AX 전환과 관련해 상담을 요청드립니다.';

/** 제목/본문이 프리필된 mailto 링크를 생성한다. */
export function buildMailto(
  email: string = CONTACT_EMAIL,
  subject: string = MAIL_SUBJECT,
  body: string = MAIL_BODY,
): string {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${email}?${params.toString()}`;
}
