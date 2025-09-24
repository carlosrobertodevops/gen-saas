// Importações necessárias para testes
import '@testing-library/jest-dom/extend-expect';

// Configurações globais de mock
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: {},
      asPath: '',
      push: jest.fn(),
      replace: jest.fn(),
    };
  },
  usePathname() {
    return '/';
  },
}));

// Mock para internacionalização
jest.mock('next-intl', () => ({
  useTranslations: () => (key) => key,
}));

// Configurações adicionais de teste
beforeEach(() => {
  // Limpar todos os mocks antes de cada teste
  jest.clearAllMocks();
});
