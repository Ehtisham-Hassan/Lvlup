'use client';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useEffect } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function BodyManager() {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    // Remove all existing page-specific and theme classes immediately
    document.body.className = document.body.className
      .replace(/\bpage-id-\d+\b|\blvf-gold\b/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    // Add correct classes based on route synchronously before paint
    if (pathname === '/') {
      document.body.classList.add('page-id-7895');
    } else if (pathname === '/elite') {
      document.body.classList.add('lvf-gold', 'page-id-8046');
    } else if (pathname === '/rules') {
      document.body.classList.add('page-id-8048');
    } else if (pathname === '/evaluation') {
      document.body.classList.add('page-id-8049');
    } else if (pathname === '/about') {
      document.body.classList.add('page-id-8095');
    } else if (pathname === '/affiliate') {
      document.body.classList.add('page-id-5024', 'page-id-8041');
    } else if (pathname === '/contact') {
      document.body.classList.add('page-id-8096');
    } else if (pathname === '/faqs') {
      document.body.classList.add('page-id-8104');
    }
  }, [pathname]);

  return null;
}
