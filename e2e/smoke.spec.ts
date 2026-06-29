import { test, expect } from '@playwright/test';

test.describe('AX 포트폴리오 랜딩 스모크', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('히어로 h1이 보인다', async ({ page }) => {
    const heading = page.locator('#hero-heading');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('어디서 막혀 있나요?');
  });

  test('주요 메뉴 네비게이션이 존재한다', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: '주요 메뉴' });
    await expect(nav).toBeVisible();
  });

  test('CTA가 mailto 링크다', async ({ page }) => {
    const cta = page.getByRole('link', { name: 'AX 전환 상담하기' }).first();
    await expect(cta).toBeVisible();
    const href = await cta.getAttribute('href');
    expect(href).toContain('mailto:kbyun@i-screamarts.com');
  });

  test('모든 주요 섹션이 렌더된다', async ({ page }) => {
    for (const id of ['work', 'services', 'trust', 'contact']) {
      await expect(page.locator(`section#${id}`)).toBeAttached();
    }
  });

  test('6개 프로젝트가 모두 렌더된다', async ({ page }) => {
    const cards = page.locator('#work .work-card');
    await expect(cards).toHaveCount(6);
  });

  test('스킵 링크로 키보드 접근이 가능하다', async ({ page }) => {
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name: '본문으로 건너뛰기' });
    await expect(skip).toBeFocused();
  });
});
