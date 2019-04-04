import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/reducers';
import { SampleSearchPageLoadedAction, SearchBySampleNameAction } from '../../core/store/actions/ui/sample-search-page.actions';
import { Observable } from 'rxjs';
import { SoilTest } from '../../models/soil-test';
import { selectAllSoilTests } from '../../core/store/soil-test/soil-test.reducer';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-sample-search-page',
  templateUrl: './sample-search-page.component.html',
  styleUrls: ['./sample-search-page.component.scss']
})
export class SampleSearchPageComponent implements OnInit {

  soilTests$: Observable<SoilTest[]>;
  defaultSort: Sort = { active: 'testDate', direction: 'desc' };

  constructor(private store: Store<AppState>) {
    this.soilTests$ = this.store.select(selectAllSoilTests);
  }

  ngOnInit() {
    this.store.dispatch(new SampleSearchPageLoadedAction());
  }

  search(sampleName: string) {
    this.store.dispatch(new SearchBySampleNameAction({ sampleName }));
  }

}
