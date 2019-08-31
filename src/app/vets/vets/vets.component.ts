import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService, VetsService} from '../../core/services';
import {User} from '../../core/models';
import {map, tap} from 'rxjs/operators';
import {Vet} from '../../core/models';
import {log} from 'util';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {
  currentUser: User;
  vets: Vet[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private vetService: VetsService
  ) { }

  ngOnInit() {
      this.userService.currentUser.subscribe(
        (userData: User) => {
          this.currentUser = userData;
          console.log(this.currentUser);
        }
      );
      let that = this;
      this.getAllVets();
      console.log(that.vets);
  }

  getAllVets() {
    this.vetService.getAll().subscribe(vets => console.log(vets));
  }
}
