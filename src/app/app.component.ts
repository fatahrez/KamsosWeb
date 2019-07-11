import { Component, OnInit } from '@angular/core';

import { UserService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Kamsos-Web';

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(){
    this.userService.populate();
  }
}
