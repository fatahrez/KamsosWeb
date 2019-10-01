import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService, VetsService} from '../../core/services';
import {User} from '../../core/models';
import {Vet} from '../../core/models';

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
        }
      );

      this.getAllVets();
  }

  getAllVets() {
    this.vetService.getAll().subscribe(vets => {
      const vetz = vets["vet"]["results"];
      this.vets = vetz;
    });
  }
}
