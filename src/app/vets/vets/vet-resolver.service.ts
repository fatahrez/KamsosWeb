import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Vet} from '../../core/models';
import {Observable} from 'rxjs';
import {UserService, VetsService} from '../../core/services';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VetResolverService implements Resolve<Vet> {

  constructor(
    private vetsService: VetsService,
    private router: Router,
    private userService: UserService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.vetsService.get(route.params.slug)
      .pipe(catchError(err => this.router.navigateByUrl('/')));
  }
}
