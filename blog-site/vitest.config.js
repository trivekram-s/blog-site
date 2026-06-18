import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.{test,spec}.{js,jsx}'],
    reporters: 'junit',
    outputFile: './junit.xml'
  }
});