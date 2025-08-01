import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceDetailComponent } from './absence-detail.component';

describe('AbsenceDetailComponent', () => {
  let component: AbsenceDetailComponent;
  let fixture: ComponentFixture<AbsenceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsenceDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsenceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
