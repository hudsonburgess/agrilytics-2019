import { Action } from '@ngrx/store';
import { SoilTest } from '../../../../models/soil-test';

export enum SoilTestApiActionTypes {
  GetMostRecentTestsSuccess = '[Soil Test API] Get Most Recent Tests Success',
  GetSoilTestsForSampleSuccess = '[Soil Test API] Get Soil Tests for Sample Success',
}

export class GetMostRecentTestsSuccessAction implements Action {
  readonly type = SoilTestApiActionTypes.GetMostRecentTestsSuccess;
  constructor(public payload: { soilTests: SoilTest[] }) {
  }
}

export class GetSoilTestsForSampleSuccessAction implements Action {
  readonly type = SoilTestApiActionTypes.GetSoilTestsForSampleSuccess;
  constructor(public payload: { soilTests: SoilTest[] }) {
  }
}
