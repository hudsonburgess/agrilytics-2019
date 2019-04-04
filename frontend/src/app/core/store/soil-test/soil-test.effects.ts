import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { GetMostRecentTestsSuccessAction } from '../actions/api/soil-test-api.actions';
import { MostRecentTestsPageActionTypes } from '../actions/ui/most-recent-tests-page.actions';
import { map, switchMap } from 'rxjs/operators';
import { SoilTestService } from '../../services/soil-test.service';

@Injectable()
export class SoilTestEffects {

  @Effect()
  getMostRecentSoilTests$: Observable<Action> = this.actions$.pipe(
    ofType(MostRecentTestsPageActionTypes.Loaded),
    switchMap(() => this.soilTestService.getMostRecentTests()),
    map(soilTests => new GetMostRecentTestsSuccessAction({ soilTests }))
  );

  constructor(private actions$: Actions, private soilTestService: SoilTestService) {}

}
