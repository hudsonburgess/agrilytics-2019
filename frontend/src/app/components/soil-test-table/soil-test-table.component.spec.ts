import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SoilTestTableComponent } from './soil-test-table.component';
import { MatTableModule } from '@angular/material';

describe('SoilTestTableComponent', () => {

  let component: SoilTestTableComponent;
  let fixture: ComponentFixture<SoilTestTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [SoilTestTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilTestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
