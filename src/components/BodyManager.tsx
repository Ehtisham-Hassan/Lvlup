'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function BodyManager() {
  const pathname = usePathname();

  useEffect(() => {
    // Remove existing page-specific classes
    document.body.className = document.body.className.replace(/page-id-\d+|lvf-gold/g, '').trim();
    
    // Add correct classes based on route
    if (pathname === '/') {
      document.body.classList.add('page-id-7895');
    } else if (pathname === '/elite') {
      document.body.classList.add('lvf-gold', 'page-id-8046');
    } else if (pathname === '/rules') {
      document.body.classList.add('page-id-8048');
    }
  }, [pathname]);

  return null;
}
