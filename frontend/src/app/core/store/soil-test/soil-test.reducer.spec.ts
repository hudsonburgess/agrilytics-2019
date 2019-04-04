import { reducer, initialState, SoilTestState } from './soil-test.reducer';
import { MostRecentTestsPageActionTypes, MostRecentTestsPageLoadedAction } from '../actions/ui/most-recent-tests-page.actions';
import {
  GetMostRecentTestsSuccessAction,
  GetSoilTestsForSampleSuccessAction,
  SoilTestApiActionTypes
} from '../actions/api/soil-test-api.actions';
import { soilTest1, soilTest2 } from '../../../testing/fixtures/soil-test.fixtures';
import { SampleSearchPageActionTypes, SampleSearchPageLoadedAction } from '../actions/ui/sample-search-page.actions';

describe('SoilTest Reducer', () => {

  describe(MostRecentTestsPageActionTypes.Loaded, () => {

    it(`returns the previous state`, () => {
      const action = new MostRecentTestsPageLoadedAction();
      const result = reducer(initialState, action);
      expect(result).toEqual(initialState);
    });

  });

  describe(SoilTestApiActionTypes.GetMostRecentTestsSuccess, () => {

    it(`adds all the given soil tests`, () => {
      const action = new GetMostRecentTestsSuccessAction({ soilTests: [soilTest1, soilTest2] });
      const result = reducer(initialState, action);

      expect(result.ids.length).toEqual(2);
      expect(result.ids).toContain(soilTest1.id);
      expect(result.ids).toContain(soilTest2.id);
    });

    it(`removes any existing soil tests`, () => {
      const state: SoilTestState = { ids: [soilTest1.id], entities: { soilTest1 } };
      const action = new GetMostRecentTestsSuccessAction({ soilTests: [soilTest2] });
      const result = reducer(state, action);

      expect(result.entities).toEqual({ soilTest2 });
    });

  });

  describe(SampleSearchPageActionTypes.Loaded, () => {

    it(`clears all existing soil tests`, () => {
      const state: SoilTestState = { ids: [soilTest1.id], entities: { soilTest1 } };
      const action = new SampleSearchPageLoadedAction();
      const result = reducer(state, action);

      expect(result.entities).toEqual({});
    });

  });

  describe(SoilTestApiActionTypes.GetSoilTestsForSampleSuccess, () => {

    it(`adds all the given soil tests`, () => {
      const action = new GetSoilTestsForSampleSuccessAction({ soilTests: [soilTest1, soilTest2] });
      const result = reducer(initialState, action);

      expect(result.ids.length).toEqual(2);
      expect(result.ids).toContain(soilTest1.id);
      expect(result.ids).toContain(soilTest2.id);
    });

    it(`removes any existing soil tests`, () => {
      const state: SoilTestState = { ids: [soilTest1.id], entities: { soilTest1 } };
      const action = new GetSoilTestsForSampleSuccessAction({ soilTests: [soilTest2] });
      const result = reducer(state, action);

      expect(result.entities).toEqual({ soilTest2 });
    });

  });

  describe('an unknown action', () => {

    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });

  });

});
