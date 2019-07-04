import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

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
    return this.apiService.post<User>("/users" + route, {user: credentials})
    .pipe(
      tap(data => {
        this.setAuth(data.user);
        return data;
      })
    );
  }

  getCurrentUser(): User{
    return this.currentUserSubject.value;
  }

}
