import { TestBed } from '@angular/core/testing';
import { BaseUrlInterceptor } from './base-url.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InterceptorTestingService } from '../../testing/mocks/interceptor-testing.service';

describe('BaseUrlInterceptor', () => {

  let service: InterceptorTestingService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        InterceptorTestingService,
        { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true }
      ]
    });

    service = TestBed.get(InterceptorTestingService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const interceptor: BaseUrlInterceptor = TestBed.get(BaseUrlInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it(`prepends the API base url to all requests`, () => {
    const baseApiUrl = 'http://localhost:8080';
    const endpoint = '/soiltests/mostRecent';

    service.makeRequest(endpoint).subscribe();
    httpMock.expectOne({ url: baseApiUrl + endpoint });
  });

});
