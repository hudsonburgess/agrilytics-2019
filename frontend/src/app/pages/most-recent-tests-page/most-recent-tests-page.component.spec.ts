import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MostRecentTestsPageComponent } from './most-recent-tests-page.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../core/store/reducers';
import { AgrilyticsMaterialModule } from '../../agrilytics-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MostRecentTestsPageComponent', () => {

  let component: MostRecentTestsPageComponent;
  let fixture: ComponentFixture<MostRecentTestsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(reducers), AgrilyticsMaterialModule, BrowserAnimationsModule],
      declarations: [MostRecentTestsPageComponent]
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
