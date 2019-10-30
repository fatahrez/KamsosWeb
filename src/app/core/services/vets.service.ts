import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Vet} from '../models';
import {map, tap} from 'rxjs/operators';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class VetsService {

  constructor(
    private apiService: ApiService
  ) { }

  getAll(): Observable<Vet[]> {
    return this.apiService.get(`/vets/`)
      .pipe(tap(_ => log(`fetched vets`)), map(data => {
        return data;
      }));
  }

  get(slug): Observable<Vet> {
    return this.apiService.get(`/vets/` + slug + `/`)
      .pipe(map(data => data.vet));
  }
}
