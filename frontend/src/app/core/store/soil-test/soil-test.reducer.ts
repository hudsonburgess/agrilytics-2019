import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { SoilTest } from '../../../models/soil-test';
import { GetMostRecentTestsSuccessAction, SoilTestApiActionTypes } from '../actions/api/soil-test-api.actions';
import { SampleSearchPageActionTypes } from '../actions/ui/sample-search-page.actions';

export interface SoilTestState extends EntityState<SoilTest> {

}

export const entityAdapter = createEntityAdapter<SoilTest>();

export const initialState: SoilTestState = entityAdapter.getInitialState();

export function reducer(state = initialState, action: Action): SoilTestState {

  switch (action.type) {

    case SoilTestApiActionTypes.GetMostRecentTestsSuccess:
    case SoilTestApiActionTypes.GetSoilTestsForSampleSuccess: {
      const soilTests = (action as GetMostRecentTestsSuccessAction).payload.soilTests;
      return entityAdapter.addAll(soilTests, state);
    }

    case SampleSearchPageActionTypes.Loaded: {
      return entityAdapter.removeAll(state);
    }

    default:
      return state;
  }
}

const selectSoilTestState = createFeatureSelector<SoilTestState>('soilTest');

const { selectAll } = entityAdapter.getSelectors();

export const selectAllSoilTests = createSelector(selectSoilTestState, selectAll);
