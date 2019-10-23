import {Component, Input, OnInit} from '@angular/core';
import {Vet} from '../../../core/models';

@Component({
  selector: 'app-vet-preview',
  templateUrl: './vet-preview.component.html',
  styleUrls: ['./vet-preview.component.css']
})
export class VetPreviewComponent {
  @Input() vet: Vet;
}
