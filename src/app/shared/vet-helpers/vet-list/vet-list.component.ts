import {Component, Input, OnInit} from '@angular/core';
import {VetsService} from '../../../core/services';
import {Vet} from '../../../core/models';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.css']
})
export class VetListComponent implements OnInit {
  results: Vet[];

  constructor(
    private vetsService: VetsService
  ) { }

  ngOnInit() {
    this.results = [];

    this.vetsService.getAll().subscribe(data => {
      this.results = data["vet"]["results"];
      console.log(this.results);
    });
  }
}
