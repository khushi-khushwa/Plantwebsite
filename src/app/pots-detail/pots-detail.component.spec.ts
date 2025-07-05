import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotsDetailComponent } from './pots-detail.component';

describe('PotsDetailComponent', () => {
  let component: PotsDetailComponent;
  let fixture: ComponentFixture<PotsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
