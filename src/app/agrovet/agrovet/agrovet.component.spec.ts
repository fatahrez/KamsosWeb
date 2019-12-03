import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrovetComponent } from './agrovet.component';

describe('AgrovetComponent', () => {
  let component: AgrovetComponent;
  let fixture: ComponentFixture<AgrovetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrovetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrovetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
