import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SoilTestEffects } from './soil-test.effects';
import { MostRecentTestsPageActionTypes, MostRecentTestsPageLoadedAction } from '../actions/ui/most-recent-tests-page.actions';
import { soilTest1, soilTest2 } from '../../../testing/fixtures/soil-test.fixtures';
import { GetMostRecentTestsSuccessAction, GetSoilTestsForSampleSuccessAction } from '../actions/api/soil-test-api.actions';
import { cold, hot } from 'jasmine-marbles';
import { SoilTestService } from '../../services/soil-test.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SampleSearchPageActionTypes, SearchBySampleNameAction } from '../actions/ui/sample-search-page.actions';

describe('SoilTestEffects', () => {

  let actions$: Observable<any>;
  let effects: SoilTestEffects;
  let soilTestService: SoilTestService;

  beforeEach(() => {
    actions$ = new Observable();
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SoilTestEffects,
        SoilTestService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(SoilTestEffects);
    soilTestService = TestBed.get(SoilTestService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe(MostRecentTestsPageActionTypes.Loaded, () => {

    it(`returns a GetMostRecentTestsSuccessAction with soil tests on success`, () => {
      const soilTests = [soilTest1, soilTest2];

      const mostRecentTestsPageLoadedAction = new MostRecentTestsPageLoadedAction();
      const getMostRecentSoilTestsSuccess = new GetMostRecentTestsSuccessAction({ soilTests });

      actions$ = hot('-a', { a: mostRecentTestsPageLoadedAction });
      const response = cold('-b|', { b: soilTests });
      const expected = cold('--c', { c: getMostRecentSoilTestsSuccess });
      spyOn(soilTestService, 'getMostRecentTests').and.returnValue(response);

      expect(effects.getMostRecentSoilTests$).toBeObservable(expected);
    });

  });

  describe(SampleSearchPageActionTypes.Search, () => {

    it(`returns a GetSoilTestsForSampleSuccessAction with soil tests on success`, () => {
      const soilTests = [soilTest1, soilTest2];

      const sampleSearchPageLoadedAction = new SearchBySampleNameAction({ sampleName: 'FC1A' });
      const getSoilTestsForSampleSuccessAction = new GetSoilTestsForSampleSuccessAction({ soilTests });

      actions$ = hot('-a', { a: sampleSearchPageLoadedAction });
      const response = cold('-b|', { b: soilTests });
      const expected = cold('--c', { c: getSoilTestsForSampleSuccessAction });
      spyOn(soilTestService, 'getTestsForSampleName').and.returnValue(response);

      expect(effects.getSoilTestsForSample$).toBeObservable(expected);
    });

  });

});
