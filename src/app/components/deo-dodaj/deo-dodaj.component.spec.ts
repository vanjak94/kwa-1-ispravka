import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoDodajComponent } from './deo-dodaj.component';

describe('DeoDodajComponent', () => {
  let component: DeoDodajComponent;
  let fixture: ComponentFixture<DeoDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
