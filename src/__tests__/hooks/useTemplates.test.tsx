import { renderHook } from '@testing-library/react-hooks';
import { useTemplatesArray } from '@/features/data/templates';

// Mock do next-intl
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      'postTitle': 'Post Title',
      'blogTags': 'Blog Tags',
      'youtubeHashtags': 'YouTube Hashtags',
      'codeGenerator': 'Code Generator',
    };
    return translations[key] || key;
  },
}));

describe('useTemplatesArray Hook', () => {
  it('returns an array of templates', () => {
    const { result } = renderHook(() => useTemplatesArray());

    expect(Array.isArray(result.current)).toBe(true);
    expect(result.current.length).toBeGreaterThan(0);
  });

  it('templates have correct structure', () => {
    const { result } = renderHook(() => useTemplatesArray());
    const firstTemplate = result.current[0];

    expect(firstTemplate).toHaveProperty('id');
    expect(firstTemplate).toHaveProperty('title');
    expect(firstTemplate).toHaveProperty('icon');
    expect(firstTemplate).toHaveProperty('totalWordsCount');
    expect(firstTemplate).toHaveProperty('description');
    expect(firstTemplate).toHaveProperty('isFavorite');
    expect(firstTemplate).toHaveProperty('shortSubTitle');
    expect(firstTemplate).toHaveProperty('isForPro');
  });

  it('templates have translated titles', () => {
    const { result } = renderHook(() => useTemplatesArray());

    const templateTitles = result.current.map(template => template.title);
    
    expect(templateTitles).toContain('Post Title');
    expect(templateTitles).toContain('Blog Tags');
    expect(templateTitles).toContain('YouTube Hashtags');
    expect(templateTitles).toContain('Code Generator');
  });
});
