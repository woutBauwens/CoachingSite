import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
    selector: 'hom-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {


    constructor(public userService: UserService, public afAuth: AngularFireAuth) {

    }


    public loginWithGoogle() {
        this.userService.loginWithGoogle();
    }

    public logout() {
        this.userService.logout();
    }

    public loginWithFacebook(){
        this.userService.loginWithFacebook();
    }
}
