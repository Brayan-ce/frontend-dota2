'use client';

import { HeaderArriba } from './headerArriba';
import { HeaderIzquierdo } from './headerIzquierdo';

export function MainHeaders() {
  return (
    <>
      <HeaderArriba />
      <HeaderIzquierdo />
    </>
  );
}

export { HeaderArriba, HeaderIzquierdo };
