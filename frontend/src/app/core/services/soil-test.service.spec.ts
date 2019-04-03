import { TestBed } from '@angular/core/testing';
import { SoilTestService } from './soil-test.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('SoilTestService', () => {

  let service: SoilTestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SoilTestService]
    });

    service = TestBed.get(SoilTestService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMostRecentTests', () => {

    it(`calls the most recent tests endpoint`, () => {
      const mostRecentTestsEndpoint = '/soiltests/search/findMostRecentBySampleNameForUser';
      service.getMostRecentTests().subscribe();
      httpMock.expectOne({ method: 'get', url: mostRecentTestsEndpoint });
    });

  });

  describe('getTestsForSample', () => {

    it(`calls the find by sample name endpoint`, () => {
      const findBySampleEndpoint = '/soiltests/search/findByUsernameAndSampleName';
      service.getTestsForSampleName('FC1A').subscribe();
      httpMock.expectOne({ method: 'get', url: findBySampleEndpoint + '/FC1A' });
    });

  });

});
