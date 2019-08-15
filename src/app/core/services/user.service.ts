import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';
import { distinctUntilChanged, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) { }

  populate() {
    if (this.jwtService.getToken()) {
      this.apiService.get('/auth/user')
        .subscribe(
          data => this.setAuth(data.user),
          err => this.purgeAuth()
        );
    } else {
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    this.jwtService.saveToken(user.token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'login') ? '/login' : '/createpastoralist';
    return this.apiService.post('/auth' + route, {user: credentials})
    .pipe(
      map(
        data => {
          this.setAuth(data.user);
          return data;
        }
      )
    );
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  purgeAuth() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
  }

}
