import { describe, it, expect } from 'vitest'
import { trap } from './42. Trapping Rain Water'

describe('42. Trapping Rain Water', () => {
  it('Test Case #1', () => {
    expect(trap([4,2,0,3,2,5])).toEqual(9);
  })

   it('Test Case #2', () => {
    expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toEqual(6);
  })

  it('Test Case #3', () => {
    expect(trap([4,2,3])).toEqual(1);
  })
})
