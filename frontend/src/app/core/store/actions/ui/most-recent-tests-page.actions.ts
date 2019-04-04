import { Action } from '@ngrx/store';

export enum MostRecentTestsPageActionTypes {
  Loaded = '[Most Recent Tests Page] Loaded'
}

export class MostRecentTestsPageLoadedAction implements Action {
  readonly type = MostRecentTestsPageActionTypes.Loaded;
}
