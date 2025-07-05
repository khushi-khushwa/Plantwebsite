import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorDetailComponent } from './indoor-detail.component';

describe('IndoorDetailComponent', () => {
  let component: IndoorDetailComponent;
  let fixture: ComponentFixture<IndoorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndoorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndoorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
