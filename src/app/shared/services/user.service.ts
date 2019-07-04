import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../models';
import { distinctUntilChanged, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) { }

  setAuth(user: User){
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  attemptAuth(type, credentials): Observable<User>{
    let route = (type === 'login') ? '/login' : '';
    return this.apiService.post("/auth" + route, {user: credentials})
    .pipe(
      map(
        data => {
          this.setAuth(data.user);
          console.log(data);
          return data;
        }
      )
    );
  }

  getCurrentUser(): User{
    return this.currentUserSubject.value;
  }

}
