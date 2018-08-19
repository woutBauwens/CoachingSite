import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';

import { CalorieFormComponent } from './calorie-form.component';
import { FormGroup , ReactiveFormsModule , FormsModule } from '@angular/forms';
import {StravaService} from "../../services/strava.service"
import {StravaComponent} from "../strava-component/strava.component"


describe('CalorieFormComponent', () => {
  let component: CalorieFormComponent;
  let fixture: ComponentFixture<CalorieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    providers: [
          {provide: StravaService, useClass: StravaComponent}
      ],
      declarations: [ CalorieFormComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorieFormComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('Je moet het aantal dagen ingeven als getal', () => {
      let errors = {};

    errors = component.days || {};
    expect(errors['required']).toBeTruthy();
  });
});
