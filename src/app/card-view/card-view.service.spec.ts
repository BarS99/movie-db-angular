import { TestBed } from '@angular/core/testing';

import { CardViewService } from './card-view.service';

describe('CardViewService', () => {
  let service: CardViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
