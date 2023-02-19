'use client';

import * as gtag from '@/utils/gtag';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function Gtag() {
  const pathname = usePathname();

  useEffect(() => {
    pathname && gtag.pageView(window.location.pathname);
  }, [pathname]);

  return null;
}
