import React from 'react';
import { render, screen } from '@testing-library/react';
import PricingSection from '@/app/page';

describe('PricingSection Component', () => {
  it('renders pricing section title', () => {
    render(<PricingSection />);
    
    const titleElement = screen.getByText('Pricing Plans');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders free and pro plan cards', () => {
    render(<PricingSection />);
    
    const freePlanTitle = screen.getByText('Free Plan');
    const proPlanTitle = screen.getByText('Pro Plan');
    
    expect(freePlanTitle).toBeInTheDocument();
    expect(proPlanTitle).toBeInTheDocument();
  });

  it('renders correct number of features for each plan', () => {
    render(<PricingSection />);
    
    const freePlanFeatures = screen.getAllByText(/Access to 5 Templates|Generate up to 1,000 words per month|Basic Customer Support|Standard Content Tone|Limited Word Count Tracking/);
    const proPlanFeatures = screen.getAllByText(/Unlimited Access to All 14 Templates|Generate up to 100,000 words per month|Priority Customer Support|Custom Content Tone/);
    
    expect(freePlanFeatures.length).toBe(5);
    expect(proPlanFeatures.length).toBe(4);
  });

  it('renders get started buttons', () => {
    render(<PricingSection />);
    
    const freeStartButton = screen.getByText('Get Started for Free');
    const proStartButton = screen.getByText('Get Started');
    
    expect(freeStartButton).toBeInTheDocument();
    expect(proStartButton).toBeInTheDocument();
  });
});
