import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleSearchPageComponent } from './sample-search-page.component';
import { AgrilyticsMaterialModule } from '../../agrilytics-material.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../core/store/reducers';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SampleSearchPageComponent', () => {

  let component: SampleSearchPageComponent;
  let fixture: ComponentFixture<SampleSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AgrilyticsMaterialModule, StoreModule.forRoot(reducers)],
      declarations: [SampleSearchPageComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
