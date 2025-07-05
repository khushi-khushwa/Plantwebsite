import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorDetailComponent } from './outdoor-detail.component';

describe('OutdoorDetailComponent', () => {
  let component: OutdoorDetailComponent;
  let fixture: ComponentFixture<OutdoorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutdoorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
