import { TestBed } from '@angular/core/testing';

import { AuhtInterceptor } from './auht.interceptor';

describe('AuhtInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuhtInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuhtInterceptor = TestBed.inject(AuhtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
