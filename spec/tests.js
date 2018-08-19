import {TestBed, ComponentFixture} from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {LoginComponent, User} from "./login.component";

describe('Component: Calculator', () => {

  let component: CalorieFormComponent;
  let fixture: ComponentFixture<CalorieFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule], 
      declarations: [CalorieFormComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(CalorieFormComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit(); 
  });
});

it('form invalid when empty', () => {
  expect(component.form.valid).toBeFalsy();
});
