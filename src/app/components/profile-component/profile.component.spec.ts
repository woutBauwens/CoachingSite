import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from '../profile-component/profile.component';
import {UserService} from "../../services/user.service";

describe('ProfileComponent', () => {
      let component: ProfileComponent;
      let UserService:UserService;
      let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ ProfileComponent ],
          providers: [
              { provide: UserService, useValue: UserService }
            ]
        }).compileComponents();
  })); 

  beforeEach(async(() => {
        fixture = TestBed.createComponent(ProfileComponent);
  })); 

  it('Login in with google', 
          inject([UserService], ((userService: UserService) => {
            spyOn(userService, 'loginWithGoogle');
            let component = fixture.componentInstance;
            component.loginWithGoogle();
            expect(userService.loginWithGoogle).toHaveBeenCalled();
          })));
 });
