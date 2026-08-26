'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function BodyManager() {
  const pathname = usePathname();

  useEffect(() => {
    // Remove any page‑specific or theme classes that may already exist.
    const classesToRemove: string[] = [];
    document.body.classList.forEach(cls => {
      if (/^page-id-\d+$/.test(cls) || cls === 'lvf-gold') {
        classesToRemove.push(cls);
      }
    });
    if (classesToRemove.length) {
      document.body.classList.remove(...classesToRemove);
    }

    // Map routes to the body classes we need.
    const map: Record<string, string[]> = {
      '/': ['page-id-7895'],
      '/elite': ['lvf-gold', 'page-id-8046'],
      '/rules': ['page-id-8048'],
      '/evaluation': ['page-id-8049'],
      '/about': ['page-id-8095'],
      '/affiliate': ['page-id-5024', 'page-id-8041'],
      '/contact': ['page-id-8096'],
      '/faqs': ['page-id-8104'],
    };
    const classes = map[pathname] ?? [];
    if (classes.length) {
      document.body.classList.add(...classes);
    }
  }, [pathname]);

  return null;
}
