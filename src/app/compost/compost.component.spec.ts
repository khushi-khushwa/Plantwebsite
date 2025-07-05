import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompostComponent } from './compost.component';

describe('CompostComponent', () => {
  let component: CompostComponent;
  let fixture: ComponentFixture<CompostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
