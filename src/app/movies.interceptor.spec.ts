import { TestBed } from '@angular/core/testing';

import { MoviesInterceptor } from './movies.interceptor';

describe('MoviesInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MoviesInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MoviesInterceptor = TestBed.inject(MoviesInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
