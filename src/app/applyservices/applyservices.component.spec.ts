import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyservicesComponent } from './applyservices.component';

describe('ApplyservicesComponent', () => {
  let component: ApplyservicesComponent;
  let fixture: ComponentFixture<ApplyservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
