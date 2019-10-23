import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetMetaComponent } from './vet-meta.component';

describe('VetMetaComponent', () => {
  let component: VetMetaComponent;
  let fixture: ComponentFixture<VetMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
