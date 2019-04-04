import { TestBed } from '@angular/core/testing';
import { AuthHeadersInterceptor } from './auth-headers.interceptor';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InterceptorTestingService } from '../../testing/mocks/interceptor-testing.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe('AuthHeadersInterceptor', () => {

  let service: InterceptorTestingService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        InterceptorTestingService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthHeadersInterceptor, multi: true }
      ]
    });

    service = TestBed.get(InterceptorTestingService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const interceptor: AuthHeadersInterceptor = TestBed.get(AuthHeadersInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it(`adds a Username header to all requests`, () => {
    service.makeRequest('/some/url').subscribe();
    const req = httpMock.expectOne({ url: '/some/url' });
    expect(req.request.headers.has('Username')).toBe(true);
  });

});
