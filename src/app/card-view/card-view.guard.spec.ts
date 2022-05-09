import { TestBed } from '@angular/core/testing';

import { CardViewGuard } from './card-view.guard';

describe('CardViewGuard', () => {
  let guard: CardViewGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CardViewGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
