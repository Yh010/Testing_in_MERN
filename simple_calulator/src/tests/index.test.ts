import {describe, expect, it} from '@jest/globals';
import {divide, multiply, subtract, sum} from '../index';

describe('sum module', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('subtract module', () => {
  it('adds 1 - 2 to equal -1', () => {
    expect(subtract(1, 2)).toBe(-1);
  });
});

describe('multiply module', () => {
  it('adds 1 * 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
  });
});

describe('divide module', () => {
  it('adds 1 / 2 to equal 0.5', () => {
    expect(divide(1, 2)).toBe(0.5);
  });
});