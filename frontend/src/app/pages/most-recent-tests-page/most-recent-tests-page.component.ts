import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/reducers';
import { MostRecentTestsPageLoadedAction } from '../../core/store/actions/ui/most-recent-tests-page.actions';
import { Observable } from 'rxjs';
import { SoilTest } from '../../models/soil-test';
import { selectAllSoilTests } from '../../core/store/soil-test/soil-test.reducer';

@Component({
  selector: 'app-most-recent-tests-page',
  templateUrl: './most-recent-tests-page.component.html',
  styleUrls: ['./most-recent-tests-page.component.scss']
})
export class MostRecentTestsPageComponent implements OnInit {

  soilTests$: Observable<SoilTest[]>;
  columnsToDisplay = ['sampleName', 'testDate', 'p', 'k', 'waterPh'];

  constructor(private store: Store<AppState>) {
    this.soilTests$ = this.store.select(selectAllSoilTests);
  }

  ngOnInit() {
    this.store.dispatch(new MostRecentTestsPageLoadedAction());
  }

}
