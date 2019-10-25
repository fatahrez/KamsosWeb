import {Component, Input} from '@angular/core';
import {Vet} from '../../../core/models';

@Component({
  selector: 'app-vet-meta',
  templateUrl: './vet-meta.component.html',
  styleUrls: ['./vet-meta.component.css']
})
export class VetMetaComponent {
  @Input() vet: Vet;
}


