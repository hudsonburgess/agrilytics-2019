import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
// import { environment } from '../../environments/environment';
import * as fromSoilTest from './soil-test/soil-test.reducer';

export interface AppState {
  soilTest: fromSoilTest.SoilTestState;
}

export const reducers: ActionReducerMap<AppState> = {
  soilTest: fromSoilTest.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
