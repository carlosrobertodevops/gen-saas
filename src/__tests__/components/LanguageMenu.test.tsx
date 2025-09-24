import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageMenu from '@/app/components/LanguageMenu';
import { useRouter, usePathname } from 'next/navigation';

// Mock das dependências de navegação
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe('LanguageMenu Component', () => {
  const mockRouter = {
    replace: jest.fn(),
  };

  const mockPathname = '/dashboard';

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (usePathname as jest.Mock).mockReturnValue(mockPathname);
  });

  it('renders language menu button', () => {
    render(<LanguageMenu />);
    
    const languageButton = screen.getByText('Language');
    expect(languageButton).toBeInTheDocument();
  });

  it('opens language dropdown when clicked', () => {
    render(<LanguageMenu />);
    
    const languageButton = screen.getByText('Language');
    fireEvent.click(languageButton);

    const englishOption = screen.getByText('English');
    const portugueseOption = screen.getByText('Português (BR)');
    
    expect(englishOption).toBeInTheDocument();
    expect(portugueseOption).toBeInTheDocument();
  });

  it('changes language when option is selected', () => {
    render(<LanguageMenu />);
    
    const languageButton = screen.getByText('Language');
    fireEvent.click(languageButton);

    const portugueseOption = screen.getByText('Português (BR)');
    fireEvent.click(portugueseOption);

    expect(mockRouter.replace).toHaveBeenCalledWith('/pt-BR/dashboard');
  });
});
