import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetPreviewComponent } from './vet-preview.component';

describe('VetPreviewComponent', () => {
  let component: VetPreviewComponent;
  let fixture: ComponentFixture<VetPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
