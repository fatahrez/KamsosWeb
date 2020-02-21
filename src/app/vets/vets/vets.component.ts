import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestService, UserService, VetsService} from '../../core/services';
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
  vetImage: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private vetService: VetsService,
    private requestService: RequestService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: {vet: Vet}) => {
        this.vet = data.vet;
        // this.vetImage = 'http://167.172.122.210:8080' + this.vet.vet_image.substring(21, this.vet.vet_image.length);
      }
    );

    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
      }
    );
  }

  submitRequest() {
    this.requestService.add(this.vet.slug).subscribe();
  }
}
