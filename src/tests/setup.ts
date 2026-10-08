import { cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';

// Vitest 5 clears mocks before every test by default
afterEach(() => {
  cleanup();
});
