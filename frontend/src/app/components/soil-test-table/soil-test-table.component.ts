import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { SoilTest } from '../../models/soil-test';
import { MatSort, MatTableDataSource, Sort } from '@angular/material';

@Component({
  selector: 'app-soil-test-table',
  templateUrl: './soil-test-table.component.html',
  styleUrls: ['./soil-test-table.component.scss']
})
export class SoilTestTableComponent implements OnChanges, OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @Input() soilTests: SoilTest[];
  @Input() defaultSort: Sort;

  dataSource: MatTableDataSource<SoilTest> = new MatTableDataSource();
  columnsToDisplay = ['sampleName', 'testDate', 'p', 'k', 'waterPh'];

  constructor() {
  }

  ngOnChanges() {
    this.dataSource.data = this.soilTests;
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    if (this.defaultSort) {
      this.dataSource.sort.active = this.defaultSort.active;
      this.dataSource.sort.direction = this.defaultSort.direction;
    }
  }

}
