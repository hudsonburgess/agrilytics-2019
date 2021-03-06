import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MostRecentTestsPageComponent } from './most-recent-tests-page.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../core/store/reducers';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MostRecentTestsPageComponent', () => {

  let component: MostRecentTestsPageComponent;
  let fixture: ComponentFixture<MostRecentTestsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(reducers)],
      declarations: [MostRecentTestsPageComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRecentTestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
