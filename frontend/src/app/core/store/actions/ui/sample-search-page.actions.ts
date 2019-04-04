import { Action } from '@ngrx/store';

export enum SampleSearchPageActionTypes {
  Loaded = '[Sample Search Page] Loaded',
  Search = '[Sample Search Page] Search',
}

export class SampleSearchPageLoadedAction implements Action {
  readonly type = SampleSearchPageActionTypes.Loaded;
}

export class SearchBySampleNameAction implements Action {
  readonly type = SampleSearchPageActionTypes.Search;
  constructor(public payload: { sampleName: string }) {
  }
}
