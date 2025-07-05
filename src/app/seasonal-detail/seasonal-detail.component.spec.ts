import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalDetailComponent } from './seasonal-detail.component';

describe('SeasonalDetailComponent', () => {
  let component: SeasonalDetailComponent;
  let fixture: ComponentFixture<SeasonalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonalDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
