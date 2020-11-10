import { Injectable } from '@angular/core';
import { UserI } from '../models/auth.interface';
import { AngularFireAuth }  from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData$: Observable<firebase.User>;

  constructor(private afsAuth: AngularFireAuth) { 
    this.userData$ = afsAuth.authState;
  }

  loginByEmail(user : UserI) {
    const {email, password } = user;
    return this.afsAuth.signInWithEmailAndPassword(email, password);
  }

  logout () {
    return this.afsAuth.signOut();
  }
}
