import { describe, expect } from '@jest/globals';
import { stripOfLife } from '../game';

describe('Тест на здоровье', () => {
  test('Здоровь = 50', () => {
    const data = { name: 'Маг', health: 50 };
    expect(stripOfLife(data)).toBe('healthy');
  });
  test('Здоровь > 50', () => {
    const data = { name: 'Маг', health: 50 };
    expect(stripOfLife(data)).toBe('healthy');
  });

  test('Здоровь = 30', () => {
    const data = { name: 'Маг', health: 30 };
    expect(stripOfLife(data)).toBe('wounded');
  });

  test('Здоровь = 15', () => {
    const data = { name: 'Маг', health: 15 };
    expect(stripOfLife(data)).toBe('critical');
  });

  test('Здоровь < 15', () => {
    const data = { name: 'Маг', health: 1 };
    expect(stripOfLife(data)).toBe('critical');
  });
});
