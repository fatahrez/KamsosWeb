import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  vet: Vet;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private vetService: VetsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: {vet: Vet}) => {
        this.vet = data.vet;
        console.log(this.vet.slug);
      }
    );

    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
      }
    );
  }
}
