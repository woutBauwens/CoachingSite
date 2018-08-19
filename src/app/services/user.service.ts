import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import *  as firebase from "firebase";


@Injectable()
export class UserService {

    constructor(public afAuth: AngularFireAuth) {

    }

    public loginWithGoogle() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    public logout() {
        this.afAuth.auth.signOut();
    }

    public loginWithFacebook(){
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }
}
