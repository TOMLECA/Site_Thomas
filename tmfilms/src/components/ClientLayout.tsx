'use client';

import Navigation from './Navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="vhs-effect fixed inset-0 pointer-events-none"></div>
      <Navigation />
      <div className="relative z-10 pt-16">
        {children}
      </div>
    </>
  );
} 