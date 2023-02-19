'use client';

import { AnalyticsWrapper } from './analytics';
import { Gtag } from './gtag';

export default function Analytics() {
  return (
    <>
      <Gtag />
      <AnalyticsWrapper />
    </>
  );
}
