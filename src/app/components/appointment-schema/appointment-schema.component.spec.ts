import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSchemaComponent } from './appointment-schema.component';

describe('AppointmentSchemaComponent', () => {
  let component: AppointmentSchemaComponent;
  let fixture: ComponentFixture<AppointmentSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentSchemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
