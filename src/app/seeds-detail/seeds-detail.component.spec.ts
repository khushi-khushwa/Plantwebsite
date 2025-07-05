import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedsDetailComponent } from './seeds-detail.component';

describe('SeedsDetailComponent', () => {
  let component: SeedsDetailComponent;
  let fixture: ComponentFixture<SeedsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeedsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
