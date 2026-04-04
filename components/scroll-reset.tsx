'use client';

import { useEffect } from 'react';

export function ScrollReset() {
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
