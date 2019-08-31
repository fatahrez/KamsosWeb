import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

}
