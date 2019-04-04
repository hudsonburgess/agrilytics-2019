import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { GetMostRecentTestsSuccessAction, GetSoilTestsForSampleSuccessAction } from '../actions/api/soil-test-api.actions';
import { MostRecentTestsPageActionTypes } from '../actions/ui/most-recent-tests-page.actions';
import { map, switchMap } from 'rxjs/operators';
import { SoilTestService } from '../../services/soil-test.service';
import { SampleSearchPageActionTypes, SearchBySampleNameAction } from '../actions/ui/sample-search-page.actions';

@Injectable()
export class SoilTestEffects {

  @Effect()
  getMostRecentSoilTests$: Observable<Action> = this.actions$.pipe(
    ofType(MostRecentTestsPageActionTypes.Loaded),
    switchMap(() => this.soilTestService.getMostRecentTests()),
    map(soilTests => new GetMostRecentTestsSuccessAction({ soilTests }))
  );

  @Effect()
  getSoilTestsForSample$: Observable<Action> = this.actions$.pipe(
    ofType(SampleSearchPageActionTypes.Search),
    map((action: SearchBySampleNameAction) => action.payload.sampleName),
    switchMap(sampleName => this.soilTestService.getTestsForSampleName(sampleName)),
    map(soilTests => new GetSoilTestsForSampleSuccessAction({ soilTests }))
  );

  constructor(private actions$: Actions, private soilTestService: SoilTestService) {
  }

}
