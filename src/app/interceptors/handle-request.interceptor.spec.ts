import { TestBed } from '@angular/core/testing';

import { HandleRequestInterceptor } from './handle-request.interceptor';

describe('HandleRequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HandleRequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HandleRequestInterceptor = TestBed.inject(HandleRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
