import {
   Directive,
   Input,
   OnInit,
   TemplateRef,
   ViewContainerRef
} from '@angular/core';

import { UserService } from '../core';

@Directive({
  selector: '[appShowAuthed]'
})
export class ShowAuthedDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private userService: UserService,
    private viewContainerRef: ViewContainerRef
  ) { }

  condition: boolean;

  ngOnInit(){
    this.userService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if(isAuthenticated && this.condition || !isAuthenticated && !this.condition){
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainerRef.clear();
        }
      }
    );
  }

  @Input() set appShowAuthed(condition: boolean){
    this.condition = condition;
  }
}
