import { describe, test, expect } from 'vitest';
import { hello } from '../src/hello';

describe('hello', () => {
    test('Hello, World!', () => {
        expect(hello('World')).toBe('Hello, World!');
    });
    test('Hello, Vitest!', () => {
        expect(hello('Vitest')).toBe('Hello, Vitest!');
    });
});
